import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Product } from '../../interfaces/products';
import { AddProductsService } from '../../services/add-products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  standalone: true,
  imports: [CommonModule],
  styleUrls: ['./products.component.css']
})
export class ProductsComponent implements OnInit {
  products: Product[] = [];
  showSearchBar: boolean = false;

  constructor(private addproductService: AddProductsService) { }

  ngOnInit(): void {
    this.products = this.addproductService.getProducts();
    this.showSearchBar = this.products.length > 0;
  }
}
 