import { Validators } from "../../../shared/validators";
import { ContactDto } from "../../contacts/dto/create.dto";
import { UserDto } from "./user.dto";

// export class TestRegisterUserDto {
//   //private para evitar que hagan instancias fuera de esta clase
//   private constructor(
//     public name: string,
//     public email: string,
//     public password: string
//   ) {}

//   // el body es un objeto, [key]: any.
//   // ejem: {name: 'Aqukin'}, el key seria name y el any el valor en este caso Aqukin
//   // El key es name, email, o password.
//   //El valor (de tipo any) es "Aqukin", "aqucrew@example.com", o "123456"
//   static create(body: { [key: string]: any }): [string?, TestRegisterUserDto?] {
//     const { name, email, password } = body;

//     if (!name || !email || !password)
//       return ["Faltan datos obligatorios para el registro"];

//     if (!Validators.email.test(email))
//       return ["El correo electrónico no es válido"];

//     if (password.length < 6)
//       return ["La contraseña debe tener al menos 8 caracteres"];

//     return [undefined, new TestRegisterUserDto(name, email, password)];
//   }
// }
// registerUser = (req: Request, res: Response) => {
//   const [error, registerUserDto] = RegisterUserDto.create(req.body);

//   //Nuestro dto verifica el body, y retorna una tupla ['mensaje de error', null]
//   if (error) return res.status(400).json({ error });

//   //Si no hay errores, retorna nuestro dto que seria un objeto {name: 'Aqukin', email: '', password: ''}
//   res.status(200).json(registerUserDto);
// };


export class RegisterUserWithContactDto extends ContactDto{
  direccion!: string;
  profile_url!: string;
  id_contacto!: number;
  password!: string;
}
