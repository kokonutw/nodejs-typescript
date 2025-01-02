import * as dotenv from "dotenv";

export abstract class ConfigServer {
  constructor() {
    const nodeNameEnv: string = this.createPathEnv(this.nodeEnv);
    dotenv.config({
      path: nodeNameEnv, // asi se leera el archivo .env o .production.env
    });
  }

  // este metodo es publico para retornar el valor de un ENV que me da el metodo getEnvirontmentValue(este tiene una funcion reutilizable )
  public getNumberEnvirontmentValue(key: string): number {
    //El retorno dependera segun que ENV fue leido, en el constructor usamos el {path: y el nombre de nuestro .Env}
    // en este caso tenemos un script que ejecuta SET NODE_ENV=production && node dist/server.js, pero si no se ejecuta este script el valor por defecto sera env (nuestro nombre de enviroment)
    // exam: getNumberEnvirontmentValue('PORT') => 4000
    //exam: getNumberEnvirontmentValue('PORT') => 3000
    return Number(this.getEnvirontmentValue(key));
  }

  private get nodeEnv(): string {
    // nuestro package tiene un script que hace un SET NODE_ENV y este tiene un valor, ( SET NODE_ENV=production && node dist/server.js)
    return this.getEnvirontmentValue("NODE_ENV")?.trim() || "";
  }

  // este metodo nos retorna el path de nuestro archivo .env o .production.env
  private createPathEnv(path: string): string {
    const envs: Array<string> = ["env"];

    if (path.length > 0) {
      const stringArray: Array<string> = path.split(".");
      envs.unshift(...stringArray);
    }
    return "." + envs.join(".");
  }

  // este metodo solo utilizo para conseguir los ENVS de mi archivo .env o .production.env
  private getEnvirontmentValue(key: string): string | undefined {
    return process.env[key]; //proccess.env['PORT']
  }
}
