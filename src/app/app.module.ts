import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';

/* Custom Create components */
import { Routes, components } from './routes';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav/navbar.comoponent';

/* Services */
import { AuthService } from './services/auth.service';
import { ProductActivator } from './products/index';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    components
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(Routes)
  ],
  providers: [AuthService, ProductActivator],
  bootstrap: [AppComponent]
})
export class AppModule { }
