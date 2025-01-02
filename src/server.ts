import express from "express";
import morgan from "morgan";
import cors from "cors";
import { UserRouter } from "./routes/user.router";
import { ConfigServer } from "./config/config";

class ServerBoostrap extends ConfigServer {
  public app: express.Application = express();
  private port: number = this.getNumberEnvirontmentValue('PORT') || 4000;

  constructor() {
    super();
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));
    this.app.use(morgan("dev"));
    this.app.use(cors());
    this.app.use("/api", this.routes());
    this.listen();
  }

  public routes(): Array<express.Router> {
    return [new UserRouter().router];
  }

  public listen(): void {
    this.app.listen(this.port, (): void => {
      console.log(`Server on port ${this.port}`);
    });
  }
}

new ServerBoostrap();
