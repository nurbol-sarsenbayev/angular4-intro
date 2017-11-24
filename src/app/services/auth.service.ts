import { Injectable } from '@angular/core';

@Injectable()
export class AuthService {

  constructor() { }

  private isLogged: boolean = false;

  isAuth(): Promise<boolean> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(this.isLogged);
      }, 1000);
    }) 
  }

  logIn() {
    this.isLogged = true;
  }

  logOut() {
    this.isLogged = false;
  }

}
