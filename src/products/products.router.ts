import { ApplicationRouter } from "../routes/router";
import { ProductsController } from "./controllers/products.controllers";

export class ProductRouter extends ApplicationRouter<ProductsController, null> {
  constructor() {
    super(ProductsController);
  }

  public routes(): void {
    this.router.get("/products", this.controller.getProducts);
  }
}
