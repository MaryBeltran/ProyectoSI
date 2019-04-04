import { Usuario } from 'src/app/Service/models/interfaces';
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
  habilitado?: boolean;
  direccion?: string;
  photoURL?: string;
}
export interface Piloto {
  Piloto?: boolean;
}
export interface Filtro1 {
  filtro1?: boolean;
}
export interface Filtro2 {
  filtro2?: boolean;
}
export interface Filtro3 {
  filtro3?: boolean;
}
export interface Producto{
  id?: number;
  Nombre?: String;
  foto?: String;
  foto1?: String;
  foto2?: String;
  foto3?: String;
  foto4?: String;
  especificaciones?: String;
  Costo?: String;
  Cantidad?: String;
  descuento?: number;
  Descripcion?: String;
  Departamento?: String;
  Calificacion?: number;
  cod?: String;
  }
  export interface Favoritos{
    id?: String;
    Usuario?: String;
    productoID?: String;
  }
  export interface Carrito{
    id?: String;
    Usuario?: String;
    productoID?: String;
  }


  export interface Comentario{
    Usuario?: String;
    id?: String;
    productoID?: String;
    Comentario?: String;
    Estrellas?: String;
    }  

  export interface Categoria{
    id?: String;
    Nombre: String;
    CantidadDeproductos: String;
  }

 

