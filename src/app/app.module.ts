import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NadvarComponent } from './nadvar/nadvar.component';
import { FooterComponent } from './footer/footer.component';
import { BodyComponent } from './index/body.component';
import { FormsModule } from '@angular/forms';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { AplicativoComponent } from './aplicativo/aplicativo.component';

@NgModule({
  declarations: [
    AppComponent,
    NadvarComponent,
    FooterComponent,
    BodyComponent,
    EjemploComponent,
    AplicativoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
