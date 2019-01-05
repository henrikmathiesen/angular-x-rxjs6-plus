import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { ReactiveProgrammingBasicsComponent } from './reactive-programming-basics/reactive-programming-basics.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ReactiveProgrammingBasicsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
