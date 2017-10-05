import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  templateUrl: './login.component.html'
})

export class LoginComponent {
  constructor(private authService: AuthService) {

  }

  authenticateUser(formValues) {
    console.log(formValues);
    this.authService.saveUser(formValues);
  }
}
