import { Injectable } from '@angular/core';

@Injectable()

export class AuthService {
  currentUser;

  saveUser(formvalues) {
    this.currentUser = formvalues;
  }

}
