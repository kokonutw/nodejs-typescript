import { UsersController } from "../controllers/users.controllers";
import { ApplicationRouter } from "./router";

export class UserRouter extends ApplicationRouter<UsersController, null> {
  constructor() {
    super(UsersController);
  }

  public routes():void{
    this.router.get("/users", (req, res) => {
      this.controller.getUsers(req, res);
    });
  }
}
