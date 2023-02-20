export interface Proyecto {
  id: string;
  titulo: string;
  imagen?: string;
  descripcion: string;
  tecnologias: string[];
  git_link: string;
  demo_link: string;
}
