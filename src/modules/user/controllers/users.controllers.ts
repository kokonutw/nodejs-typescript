import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export class UsersController {
  private readonly userService: UserService;

  constructor() {
    this.userService = new UserService();
  }

  getUsers = async (req: Request, res: Response) => {
    const users = await this.userService.getUsers();
    res.json(users);
  };

  getUserById = async (req: Request, res: Response) => {
    const { id } = req.params;
    const user = await this.userService.getUserById(Number(id));
    res.json(user);
  };

  registerUser = async (req: Request, res: Response) => {
    try {
      const data = await this.userService.createContactAndUser(req.body);
      if (!data) {
        res.status(400).json({ error: "No se pudo crear el usuario" });
        return;
      }

      res.status(201).json(data);
      return;
    } catch (error) {
      if (error instanceof Error) {
        res.status(400).json({ error: error.message });
        return;
      }
    }
  };
}
