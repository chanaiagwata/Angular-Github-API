import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service'
import { HttpClientModule } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GithubUserComponent } from './github-user/github-user.component';
import { FindRepoComponent } from './find-repo/find-repo.component';

@NgModule({
  declarations: [
    AppComponent,
    GithubUserComponent,
    FindRepoComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule 
  
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
