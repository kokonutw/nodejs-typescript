import { prisma } from "../../../connections/prisma.service";
import { ContactDto } from "../dto/create.dto";


export class ContactRepository {
  async createContact(body: ContactDto) {
    return await prisma.contacto.create({ data: body });
  }
}
