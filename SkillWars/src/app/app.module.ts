import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { routing } from './app.routing';
import { AppConfig } from './app.config';

//import { AlertComponent } from 'Additional/_servises/alert.service';

import { AppComponent } from './app.component';
import { UnloggedComponent } from './unlogged/unlogged.component';
import { SignComponent } from './sign/sign.component';
import {AlertService} from "./Additional/_servises/alert.service";
import {AuthenticationService} from "./Additional/_servises/authentication.service";
import {UserService} from "./Additional/_servises/user.service";
import {AuthGuard} from "./Additional/_guards/auth.guard";

@NgModule({
  declarations: [
    AppComponent,
    UnloggedComponent,
    SignComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [
    AppConfig,
    AuthGuard,
    AlertService,
    AuthenticationService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
