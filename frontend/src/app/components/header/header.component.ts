import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { HomeComponent } from '../home/home.component';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  imports: [NavComponent, HomeComponent],
  standalone: true
})
export class HeaderComponent {

}
