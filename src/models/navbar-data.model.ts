export interface NavbarData {
  logo: string;
  items: NavItems[];
  curriculum: CurriculumItem;
}

interface NavItems {
  id: string;
  nombre: string;
}

interface CurriculumItem {
  nombre: string;
  link: string;
}
