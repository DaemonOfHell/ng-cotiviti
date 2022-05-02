import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HeroesComponent } from './components/heroes/heroes.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { LoginComponent } from './pages/login/login.component';
import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component'
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { AllBidsComponent } from './pages/all-bids/all-bids.component';
import { AllBidsPageComponent } from './pages/all-bids-page/all-bids-page.component';
import { PostedBidsComponent } from './pages/posted-bids/posted-bids.component';
import { AppliedBidsComponent } from './pages/applied-bids/applied-bids.component';

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
    path:'admin/all-users',
    component: AllUsersComponent
  },
  {
    path:'admin/all-bids',
    component: AllBidsComponent
  },
  {
    path:'all-bids',
    component: AllBidsPageComponent
  },
  {
    path:'posted-bids',
    component: PostedBidsComponent
  },
  {
    path:'applied-bids',
    component: AppliedBidsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
