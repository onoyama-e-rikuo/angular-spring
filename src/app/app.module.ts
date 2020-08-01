import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import {AuthenticationService} from './service/authentication.service';
import {UserService} from './service/user.service';
import {HTTP_INTERCEPTORS} from '@angular/common/http';
import {AuthInterceptor} from './interceptor/auth.interceptor';
import {AuthenticationGuard} from './guars/authentication.guard';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    AuthenticationService,
    UserService,
    AuthenticationGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true }
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
