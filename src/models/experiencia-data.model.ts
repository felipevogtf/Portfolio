export interface ExperienciaData {
  titulo: string;
  experiencias: ExperienciaLaboral[];
}

interface ExperienciaLaboral {
  empresa: string;
  empresa_abrev: string;
  empresa_link: string;
  cargo: string;
  fecha: string;
  funciones: string[];
}
