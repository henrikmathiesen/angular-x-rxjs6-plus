import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ReactiveProgrammingBasicsComponent } from './reactive-programming-basics/reactive-programming-basics.component';

const routes: Routes = [
  {
    path: 'reactive-programming-basics',
    component: ReactiveProgrammingBasicsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
