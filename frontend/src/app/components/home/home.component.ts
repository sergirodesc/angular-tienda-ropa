import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // Importa CommonModule



@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule], // Agrega CommonModule a los imports
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
