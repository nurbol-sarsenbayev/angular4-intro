import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  isLogged: Promise<boolean>;

  constructor(private auth: AuthService) {
    this.isLogged = this.auth.isAuth();
  }

  ngOnInit() {
  }

  changeAuthStatus(status: string) {
    if(status === 'login') {
      this.auth.logIn();
    }
  }
}
