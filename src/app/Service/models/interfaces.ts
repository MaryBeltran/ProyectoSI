import { Observable } from 'rxjs';

export interface Usuario { //interfaces utilizadas en todo el codigo
    id?: string;
    Nombre?: string;
    Correo?: string;
    Clave?: string;
    Clavec?: string;
    Direccion?: string;
    Admin?: boolean;
    Habilitacion?: boolean;
}
export interface User {
  uid?: string;
  email?: string;
  displayName?: string;
  admin?: boolean;
  disabled?: boolean;
  direccion?: string;
  photoURL?: string;
}
export interface Producto{
    id?: String;
    Nombre: String;
    Foto: String;
    Foto1: String;
    Foto2: String;
    Foto3: String;
    Foto4: String;
    espeficificaciones: String;
    Costo: String;
    Cantidad: String;
    descuento: String;
    Descrpcion: String;
    Departamento: String;
  }

  export interface Categoria{
    id?: String;
    Nombre: String;
    CantidadDeproductos: String;
  }

  export interface Favoritos{
    id?: String;
    Usuario: String;
    Nombre: String;
    Costo: String;
    Foto: String;
    Departamento: String;
  }

