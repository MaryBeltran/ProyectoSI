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
    id?: number;
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
    Descripcion: String;
    Departamento: String;
  }
  export interface Favoritos{
    id?: String;
    Usuario?: String;
    productoID?: String;
  }

  

  export interface Categoria{
    id?: String;
    Nombre: String;
    CantidadDeproductos: String;
  }

 

