import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component'
import { AdminComponent } from './components/admin/admin.component'
import { HomeComponent } from './components/home/home.component';


export const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' }, //Raiz por
    { path: 'home', component: HomeComponent },
    { path: 'products', component: ProductsComponent },
    { path: 'admin', component: AdminComponent }

];
