export interface SobreMiData {
  id: string;
  titulo: string;
  imagen: string;
  perfil_link: string;
  parrafos: string[];
  tecnologias: Tecnologia[];
}

interface Tecnologia {
  nombre: string;
  icono: string;
}
