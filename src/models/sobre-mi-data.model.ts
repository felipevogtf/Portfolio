export interface SobreMiData {
  titulo: string;
  parrafos: string[];
  tecnologias: Tecnologia[];
}

interface Tecnologia {
  nombre: string;
  icono: string;
}
