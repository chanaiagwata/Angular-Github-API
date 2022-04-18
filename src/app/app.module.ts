import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { FindUserComponent } from './find-user/find-user.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserComponent,
    FindUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
