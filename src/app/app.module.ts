import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ApiService } from './api.service'
import { HttpClientModule } from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchInfoComponent } from './search-info/search-info.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchInfoComponent
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
