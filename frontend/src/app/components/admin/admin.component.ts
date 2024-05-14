import { Component } from '@angular/core';
import { Product } from '../../interfaces/products';
import { ReactiveFormsModule, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

import { AddProductsService } from '../../services/add-products.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {

  product: Product = {
    reference: '',
    name: '',
    price: 0,
    description: '',
    category: '',
    sale: false,
    image: '',
  };

  regexPatternRef = /^[A-Za-z]{3}\d{10}$/;
  form = new FormGroup({
    reference: new FormControl('', [Validators.required, Validators.pattern(this.regexPatternRef)]),
    name: new FormControl('', [Validators.required, Validators.maxLength(25)]),
    price: new FormControl('', [Validators.required, Validators.min(0)]),
    description: new FormControl('', Validators.required),
    category: new FormControl('', Validators.required),
    sale: new FormControl(''),
    image: new FormControl(''),
  });

  f = this.form.controls;


  constructor(private router: Router, private productService: AddProductsService) { }
  onSubmit() {
    if (this.form.invalid) {
      console.log('Form data:', this.product);
      return;
    }

    this.productService.setProduct(this.product);
    this.router.navigate(['/products']);
  }

  //this.router.navigate(['/products'], { state: { productData: this.product } });
}
