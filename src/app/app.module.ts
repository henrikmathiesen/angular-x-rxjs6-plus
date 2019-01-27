import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';

import { ReactiveProgrammingBasicsComponent } from './reactive-programming-basics/reactive-programming-basics.component';
import { UnderstandingAndCreatingObservablesComponent } from './understanding-and-creating-observables/understanding-and-creating-observables.component';
import { ManagingSubscriptionsWithObserversComponent } from './managing-subscriptions-with-observers/managing-subscriptions-with-observers.component';
import { UsingOperatorsComponent } from './using-operators/using-operators.component';
import { CreatingOurOwnOperatorsComponent } from './creating-our-own-operators/creating-our-own-operators.component';
import { SubjectsAndMulticastedObservablesComponent } from './subjects-and-multicasted-observables/subjects-and-multicasted-observables.component';

import { TypeaheadSearchInObjectsComponent } from './other';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ReactiveProgrammingBasicsComponent,
    UnderstandingAndCreatingObservablesComponent,
    ManagingSubscriptionsWithObserversComponent,
    UsingOperatorsComponent,
    CreatingOurOwnOperatorsComponent,
    SubjectsAndMulticastedObservablesComponent,
    TypeaheadSearchInObjectsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule,
    AppRoutingModule,

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
