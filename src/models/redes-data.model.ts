export interface RedesData {
  id: string;
  redes: Red[];
}

interface Red {
  nombre: string;
  url: string;
  fontawesome_icon: string;
}
