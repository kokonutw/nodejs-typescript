import { Request, Response } from "express";
import { RegisterUserDto } from "../dtos/register-user.dto";
import { UserService } from "../services/user.service";


export class UsersController {
  private readonly userService: UserService;

  constructor(){
    this.userService = new UserService();
  }

  getUsers = async (req: Request, res: Response): Promise<void> => {
    const users = await this.userService.getUsers();
    res.json(users);
  }

  getUserById = async (req: Request, res: Response): Promise<void> => {
    const { id } = req.params;
    const user = await this.userService.getUserById(Number(id));
    res.json(user);
  }

  registerUser = (req: Request, res: Response)=>{
    const [error, registerUserDto] = RegisterUserDto.create(req.body);
    
    //Nuestro dto verifica el body, y retorna una tupla ['mensaje de error', null]
    if (error) return res.status(400).json({ error });

    //Si no hay errores, retorna nuestro dto que seria un objeto {name: 'Aqukin', email: '', password: ''}
    res.status(200).json(registerUserDto);
  }
}
