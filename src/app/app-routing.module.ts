import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from "@angular/router";
import {TailStatusProgressComponent} from "./tail-status-progress/tail-status-progress.component";

const routes: Routes = [
  { path: 'tail/:id', component: TailStatusProgressComponent }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
