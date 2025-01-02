import { ContactDto } from "../dto/create.dto";
import { ContactRepository } from "../repositories/contact.repository";

export class ContactService {
  constructor(
    private readonly contactRepository: ContactRepository = new ContactRepository()
  ) {}

  async createContact(body: ContactDto) {
    return await this.contactRepository.createContact(body);
  }
}
