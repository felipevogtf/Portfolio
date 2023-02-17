import type { Proyecto } from "./proyecto.model";

export interface ProyectosData {
  titulo: string;
  proyectos: Proyecto[];
  boton_mostrar_mas?: string;
}
