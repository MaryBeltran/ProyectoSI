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

