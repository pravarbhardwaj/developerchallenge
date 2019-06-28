import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UpcomingComponent } from './upcoming/upcoming.component';
import { LiveComponent } from './live/live.component';
import { PastComponent } from './past/past.component';
import {HomeComponent} from './home/home.component';
const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
