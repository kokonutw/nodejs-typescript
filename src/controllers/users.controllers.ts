export class UsersController {
  public getUsers(req: any, res: any): void {
    res.json({
      productos: [
        {
          id: 1,
          nombre: "Figura de acción de Tokino Sora",
          categoria: "Figura",
          precio: 45.99,
          descripcion:
            "Figura de colección de Tokino Sora, la primera miembro de Hololive.",
          imagen: "url_de_imagen_tokino_sora.jpg",
        },
        {
          id: 2,
          nombre: "Almohada de Remilia Scarlet",
          categoria: "Almohada",
          precio: 30.0,
          descripcion:
            "Almohada con diseño de Remilia Scarlet, miembro de Hololive.",
          imagen: "url_de_imagen_almohada_remilia.jpg",
        },
        {
          id: 3,
          nombre: "Camiseta de Hololive",
          categoria: "Ropa",
          precio: 20.0,
          descripcion: "Camiseta con el logo de Hololive.",
          imagen: "url_de_imagen_camiseta_hololive.jpg",
        },
        {
          id: 4,
          nombre: "Taza de Kiryu Coco",
          categoria: "Accesorios",
          precio: 15.99,
          descripcion: "Taza de cerámica con la imagen de Kiryu Coco.",
          imagen: "url_de_imagen_taza_kiryu_coco.jpg",
        },
        {
          id: 5,
          nombre: "Llaveros de Hololive",
          categoria: "Accesorios",
          precio: 7.5,
          descripcion: "Llaveros con los personajes principales de Hololive.",
          imagen: "url_de_imagen_llavero_hololive.jpg",
        },
      ],
    });
  }
}
