import { usuario } from "@prisma/client";
import { UserRepository } from "../repositories/user.repository";
import { prisma } from "../../../connections/prisma.service";
import { RegisterUserWithContactDto } from "../dto/register-user.dto";
import { ContactService } from "../../contacts/services/contact.service";
import { supabase } from "../../../connections/supabase.connection";
import { EstadoType, RoleType } from "../../contacts/dto/create.dto";

export class UserService {
  constructor(
    private readonly userRepository: UserRepository = new UserRepository(),
    private readonly contactService: ContactService = new ContactService()
  ) {}

  async getUsers(): Promise<usuario[]> {
    return await this.userRepository.getUsers();
  }

  async getUserById(id: number): Promise<usuario | null> {
    return await this.userRepository.getUserById(id);
  }

  async createContactAndUser(body: RegisterUserWithContactDto) {
    return await prisma.$transaction(async (tx) => {
      const { data, error } = await supabase.auth.signUp({
        email: body.correo,
        password: body.password,
        phone: body.telefono,
      });

      if (error || !data.user) {
        throw new Error(
          `Error en el registro de Supabase: ${
            error?.message || "Usuario no creado"
          }`
        );
      }

      body.supabase_user_id = data.user.id;

      const contact = await this.contactService.createContact({
        correo: body.correo,
        departamento: body.departamento,
        estado: EstadoType.ACTIVO,
        firstname: body.firstname,
        lastname: body.lastname,
        role: RoleType.USER,
        supabase_user_id: body.supabase_user_id,
        telefono: body.telefono,
      });

      console.log({ contact });

      const user = await this.userRepository.createUser({
        direccion: body.direccion,
        profile_url: body.profile_url,
        id_contacto: contact.id,
      });
      console.log({ user });

      return { contact, user };
    });
  }
}
