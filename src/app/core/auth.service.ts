import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {
  isLogged!: boolean;

  constructor() { }

  login() {
    this.isLogged = true;
  }

  logout() {
    this.isLogged = false;
  }

}
