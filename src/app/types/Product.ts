export default interface Product {
  id: number;
  name: string;
  specifications: Specification;
  picture: string;
}

export interface Specification {
  color: string;
  weight: string;
  storage: string;
  price: string;
}
