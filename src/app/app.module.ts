import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from "@angular/forms";

import { AppComponent } from './app.component';

import { HomePageComponent } from './components/home-page/home-page.component';
import { AppRoutingModule } from './app-routing.module';
//import { ConsoleService } from './services/console.service';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AuthService } from './services/auth.service';
import { MyPageComponent } from './components/my-page/my-page.component';
import { AuthGuard } from './services/auth.guard';
import { ConsoleService } from './services/console.service';

@NgModule({
  declarations: [
    AppComponent,
    HomePageComponent,
    NotFoundComponent,
    MyPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule    
  ],
  providers: [
    AuthService, 
    AuthGuard,
    ConsoleService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
