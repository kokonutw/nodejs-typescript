import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./user/user.router";
import { ConfigServer } from "./config/config";
import { ProductRouter } from "./products/products.router";

class ServerBoostrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnvirontmentValue('PORT') || 4000;

  constructor() {
    super();
    this.middelewares();
    this.app.use("/api", this.routes());
    this.listen();
  }

  middelewares(): void {
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
  }

  routes(): Array<express.Router> {
    return [new UserRouter().router, new ProductRouter().router];
  }

  listen(): void {
    this.app.listen(this.port, (): void => {
      console.log(`Server on port ${this.port}`);
    });
  }
}

new ServerBoostrap();
