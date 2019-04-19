import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { UsingOperatorsModule } from './using-operators/using-operators.module';
import { OtherModule } from './other/other.module';
import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { ReactiveProgrammingBasicsComponent } from './reactive-programming-basics/reactive-programming-basics.component';
import { UnderstandingAndCreatingObservablesComponent } from './understanding-and-creating-observables/understanding-and-creating-observables.component';
import { ManagingSubscriptionsWithObserversComponent } from './managing-subscriptions-with-observers/managing-subscriptions-with-observers.component';
import { CreatingOurOwnOperatorsComponent } from './creating-our-own-operators/creating-our-own-operators.component';
import { SubjectsAndMulticastedObservablesComponent } from './subjects-and-multicasted-observables/subjects-and-multicasted-observables.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ReactiveProgrammingBasicsComponent,
    UnderstandingAndCreatingObservablesComponent,
    ManagingSubscriptionsWithObserversComponent,
    CreatingOurOwnOperatorsComponent,
    SubjectsAndMulticastedObservablesComponent
  ],
  imports: [
    BrowserModule,
    UsingOperatorsModule,
    OtherModule,
    AppRoutingModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
