export class Validators {
  // el uso de get define un accesor que permite obtener el valor de una propiedad como si fuera un atributo en lugar de un método.
  // Esto significa que no necesitas llamar explícitamente a un método (con paréntesis), lo que hace que el código sea más limpio y legible
  static get email() {
    // Como esto retorna una expresión regular, puedes usar el método .test() directamente sobre ella.
    //  Dado que Validators.email devuelve una expresión regular (gracias al get), puedes usar el método .test() directamente sobre ella.
    return /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
  }
}
