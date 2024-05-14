// products.ts

// Define la interfaz o tipo 'Product'
export interface Product {
  reference: string;
  name: string;
  price: number;
  description: string;
  category: string;
  sale: boolean;
  image: string;
}

// Opcionalmente, también puedes definir un tipo de lista de productos
// export type ProductsList = Product[];

// También podrías exportar una clase, si lo prefieres
// export class Product {...}
