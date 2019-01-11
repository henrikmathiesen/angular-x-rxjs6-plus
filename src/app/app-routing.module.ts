import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveProgrammingBasicsComponent } from './reactive-programming-basics/reactive-programming-basics.component';
import { UnderstandingAndCreatingObservablesComponent } from './understanding-and-creating-observables/understanding-and-creating-observables.component';
import { ManagingSubscriptionsWithObserversComponent } from './manging-subscriptions-with-observers/manging-subscriptions-with-observers.component';
import { UsingOperatorsComponent } from './using-operators/using-operators.component';
import { CreatingOurOwnOperatorsComponent } from './creating-our-own-operators/creating-our-own-operators.component';
import { SubjectsAndMulticastedObservablesComponent } from './subjects-and-multicasted-observables/subjects-and-multicasted-observables.component';

const routes: Routes = [
  {
    path: 'reactive-programming-basics',
    component: ReactiveProgrammingBasicsComponent
  },
  {
    path: 'understanding-and-creating-observables',
    component: UnderstandingAndCreatingObservablesComponent
  },
  {
    path: 'manging-subscriptions-with-observers',
    component: ManagingSubscriptionsWithObserversComponent
  },
  {
    path: 'using-operators',
    component: UsingOperatorsComponent
  },
  {
    path: 'creating-our-own-operators',
    component: CreatingOurOwnOperatorsComponent
  },
  {
    path: 'subjects-and-multicasted-observables',
    component: SubjectsAndMulticastedObservablesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
