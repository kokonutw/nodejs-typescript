export class ContactDto {
  firstname!: string;
  lastname!: string;
  correo!: string;
  telefono!: string;
  supabase_user_id!: string;
  role?: RoleType;
  departamento!: number;
  estado!: EstadoType;
}
export enum RoleType {
  ADMIN = "admin",
  USER = "usuario",
}

export enum EstadoType {
    ACTIVO = "activo",
    INACTIVO = "inactivo",
}