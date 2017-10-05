import { Route } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './user/login.component';
import { ProductsComponent, ProductActivator } from './products/index';

export const Routes: Route[] = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent},
  { path: 'products', component: ProductsComponent, canActivate: [ ProductActivator ]},
  { path: '', redirectTo: '/home', pathMatch: 'full'}
]

export const components = [
  HomeComponent, LoginComponent, ProductsComponent
]
