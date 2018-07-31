import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RouteCollections } from './route.config';
import { Global } from './global.config';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { BeforeloginComponent } from './layout/beforelogin/beforelogin.component';
import { AfterloginComponent } from './layout/afterlogin/afterlogin.component';
import { HeaderComponent } from './layout/header/header.component';
import { LeftNavComponent } from './layout/left-nav/left-nav.component';
import { LoginComponent } from './login/login.component';
import { CustomerComponent } from './customer/customer.component';
import { AlertComponent } from './alert/alert.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';

@NgModule({
  declarations: [
    AppComponent,
    BeforeloginComponent,
    AfterloginComponent,
    HeaderComponent,
    LeftNavComponent,
    LoginComponent,
    CustomerComponent,
    AlertComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(RouteCollections),
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule.forRoot(),
    LoadingBarHttpClientModule
  ],
  providers: [Global],
  bootstrap: [AppComponent]
})
export class AppModule { }
