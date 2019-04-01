import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MegaMenuDemo} from './megamenudemo';
const routes: Routes = [{path: '', component: MegaMenuDemo}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
