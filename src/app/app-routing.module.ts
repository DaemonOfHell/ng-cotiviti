import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
// import { HeroesComponent } from './components/heroes/heroes.component'; 
import { DashboardComponent } from './components/dashboard/dashboard.component';
// import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { LoginComponent } from './pages/login/login.component';
import {AdminDashboardComponent} from './pages/admin-dashboard/admin-dashboard.component'
import { AllUsersComponent } from './pages/admin/all-users/all-users.component';
import { AllBidsComponent } from './pages/admin/all-bids/all-bids.component';
import { AllBidsPageComponent } from './pages/all-bids-page/all-bids-page.component';
import { PostedBidsComponent } from './pages/posted-bids/posted-bids.component';
import { AppliedBidsComponent } from './pages/applied-bids/applied-bids.component';
import { AdminGuard } from './guards/admin.guard';
import { TokenGuard } from './guards/token.guard';
import { LoginGuard } from './guards/login.guard';
import { NotuserGuard } from './guards/notuser.guard';
import { MyPostsComponent } from './pages/user/my-posts/my-posts.component'; 
import { AllPostsComponent } from './pages/user/all-posts/all-posts.component';

const routes: Routes = [
  // {
  //   path:'bids',
  //   component: HeroesComponent
  // },
  {
    path:'dashboard',
    component: DashboardComponent,
    canActivate: [TokenGuard,NotuserGuard]
  },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  // {
  //   path: 'detail/:pid',
  //   component: HeroDetailComponent
  // },
  {
    path:'login',
    component: LoginComponent,
    canActivate: [LoginGuard]
  },
  {
    path:'dashboard/admin',
    component: AdminDashboardComponent,
    canActivate: [AdminGuard, TokenGuard]
  },
  {
    path:'admin/all-users',
    component: AllUsersComponent,
    canActivate: [AdminGuard]
  },
  {
    path:'admin/all-bids',
    component: AllBidsComponent,
    canActivate: [ AdminGuard]
  },
  {
    path:'all-bids',
    component: AllBidsPageComponent,
    canActivate: [ TokenGuard]
  },
  {
    path:'posted-bids',
    component: PostedBidsComponent,
    canActivate: [ TokenGuard]
  },
  {
    path:'applied-bids',
    component: AppliedBidsComponent,
    canActivate: [ TokenGuard]
  },
  {
    path:'my-posts',
    component: MyPostsComponent,
    canActivate: [ TokenGuard]
  },
  // { 
  //     path:'my-bids',
  //     component: MyBidsComponent
  // },
  { 
    path:'all-posts',
    component: AllPostsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
