import { prisma } from "../../../connections/prisma.service";
import { UserDto } from "../dto/user.dto";


export class UserRepository {
  async getUsers() {
    return await prisma.usuario.findMany();
  }

  async getUserById(id: number) {
    return await prisma.usuario.findUnique({
      where: {
        id,
      },
    });
  }

  async createUser(body: UserDto) {
    return await prisma.usuario.create({
      data: body
    });
  }
}
