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

export interface Producto{
    id?: String;
    Nombre: String;
    Foto: String;
    Costo: String;
    Cantidad: String;
    descuento: String;
    Clasificacion: String;
  }

  export interface Categoria{
    id?: String;
    Nombre: String;
    CantidadDeproductos: String;
  }

