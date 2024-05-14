import { Injectable } from '@angular/core';
import { Product } from '../interfaces/products';
 
@Injectable({
  providedIn: 'root'
})
 
export class AddProductsService {
 
  private products: Product[] = [];
 
  constructor() {}
 
  setProduct(product: Product) {
    this.products.push(product);
  }
 
  getProducts(): Product[] {
    return this.products;
  }
 
  getProductByReference(reference: string): Product | null {
    return this.products.find(product => product.reference === reference) || null;
  }
}