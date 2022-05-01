import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { LoginComponent } from './pages/login/login.component';
import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component'
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { AllBidsComponent } from './pages/all-bids/all-bids.component';

const routes: Routes = [
  {
    path:'bids',
    component: HeroesComponent
  },
  {
    path:'dashboard',
    component: DashboardComponent
  },
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  {
    path: 'detail/:pid',
    component: HeroDetailComponent
  },
  {
    path:'login',
    component: LoginComponent
  },
  {
    path:'dashboard/admin',
    component: AdminDashboardComponent
  },
  {
    path:'all-users',
    component: AllUsersComponent
  },
  {
    path:'all-bids',
    component: AllBidsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
