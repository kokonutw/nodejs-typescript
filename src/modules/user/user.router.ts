import { ApplicationRouter } from "../../routes/router";
import { UsersController } from "./controllers/users.controllers";
export class UserRouter extends ApplicationRouter<UsersController, null> {
  constructor() {
    super(UsersController);
  }

  public routes(): void {
    //(req, res) => {this.controller.getUsers(req, res);} Como solo envia req,res y  es arrowfunction podemos quitarlos, y solo enviar la referencia de la funcion
    this.router.get("/users", this.controller.getUsers);
    this.router.get("/users/:id", this.controller.getUserById);
    this.router.post("/users", this.controller.registerUser);
  }
}
