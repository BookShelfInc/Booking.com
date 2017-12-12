import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main.component';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';

const routes: Routes = [
  {
    path: '',
    component: MainComponent,
  },
  {
    path: 'info/:id', 
    component: HotelDetailComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }
