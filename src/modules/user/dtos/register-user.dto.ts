import { Validators } from "../../../shared/validators";


export class RegisterUserDto {
  //private para evitar que hagan instancias fuera de esta clase
  private constructor(
    public name: string,
    public email: string,
    public password: string
  ) {}


  // el body es un objeto, [key]: any.
  // ejem: {name: 'Aqukin'}, el key seria name y el any el valor en este caso Aqukin
  // El key es name, email, o password.
  //El valor (de tipo any) es "Aqukin", "aqucrew@example.com", o "123456"
  static create(body: { [key: string]: any }): [string?, RegisterUserDto?] {
    const { name, email, password } = body;

    if (!name || !email || !password)
      return ["Faltan datos obligatorios para el registro"];

    if (!Validators.email.test(email))
      return ["El correo electrónico no es válido"];

    if (password.length < 6)
      return ["La contraseña debe tener al menos 8 caracteres"];

    return [undefined, new RegisterUserDto(name, email, password)];
  }
}
