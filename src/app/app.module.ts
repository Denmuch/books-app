import { NgModule } from '@angular/core';

import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { SharedModule } from './shared/shared.module';
import { AppRoutingModule } from './app-routing.module';
import { TextMaskModule } from 'angular2-text-mask';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';

import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { COMPONENTS as pages } from './pages';



@NgModule({
  declarations: [
    AppComponent,
    ...pages,
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    TextMaskModule,
    HttpClientModule,
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {dataEncapsulation: false})
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
