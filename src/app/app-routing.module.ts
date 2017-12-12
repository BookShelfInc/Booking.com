import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MainModule } from './main/main.module';
import { NavbarComponent } from './main/navbar/navbar.component';
import { ProfileModule } from './profile/profile.module';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        loadChildren: 'app/main/main.module#MainModule',
      },
      {
        path: '',
        component: NavbarComponent,
        outlet: 'navbar'
      },
      {
        path: 'profile',
        loadChildren: 'app/profile/profile.module#ProfileModule',
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
