import { prisma } from "../../../database/prisma.service";


export class UserRepository {

   async getUsers() {
        return await prisma.usuario.findMany();
   }
   
   async getUserById(id: number){
        return await prisma.usuario.findUnique({
            where: {
                id
            }
        });
   }
}