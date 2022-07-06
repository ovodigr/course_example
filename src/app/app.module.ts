import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ConversionComponent } from './conversion/conversion.component';
import { CurrencyComponent } from './currency/currency.component';

import { HttpClientModule } from '@angular/common/http';
import { GetCourseService } from './service/course.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ConversionComponent,
    CurrencyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

  ],
  providers: [GetCourseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
