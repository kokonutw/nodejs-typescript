import { Request, Response } from "express";
import { RegisterUserDto } from "../dtos/register-user.dto";
import { PrismaClient } from "@prisma/client";

export class UsersController {
  public async getUsers(req: Request, res: Response): Promise<void> {
    const prisma = new PrismaClient();

    const users = await prisma.usuario.findMany();

    res.json(users);
  }


  registerUser = (req: Request, res: Response)=>{
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    
    //Nuestro dto verifica el body, y retorna una tupla ['mensaje de error', null]
    if (error) return res.status(400).json({ error });

    //Si no hay errores, retorna nuestro dto que seria un objeto {name: 'Aqukin', email: '', password: ''}
    res.status(200).json(registerUserDto);
  }
}
