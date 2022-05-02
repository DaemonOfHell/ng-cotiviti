import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import {HttpClientModule} from '@angular/common/http'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeroesComponent } from './components/heroes/heroes.component';
import { HeroDetailComponent } from './components/hero-detail/hero-detail.component';
import { MessagesComponent } from './components/messages/messages.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { HeroSearchComponent } from './components/hero-search/hero-search.component';
import { PostBidComponent } from './components/post-bid/post-bid.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardSummaryComponent } from './components/dashboard-summary/dashboard-summary.component';
import { SummaryCardComponent } from './components/cards/summary-card/summary-card.component';
import { PersonalBidsComponent } from './components/overlays/personal-bids/personal-bids.component';
import { ButtonComponent } from './components/button/button.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminDashboardComponent } from './pages/admin-dashboard/admin-dashboard.component';
import { AdminDashboardSummaryComponent } from './components/admin-dashboard-summary/admin-dashboard-summary.component';
import { AllUsersComponent } from './pages/all-users/all-users.component';
import { AllBidsComponent } from './pages/all-bids/all-bids.component';
import { CreateUserFormComponent } from './components/create-user-form/create-user-form.component';
import { AllBidsPageComponent } from './pages/all-bids-page/all-bids-page.component';
import { BidFormComponent } from './components/overlays/bid-form/bid-form.component';
import { PostedBidsComponent } from './pages/posted-bids/posted-bids.component';
import { AppliedBidsComponent } from './pages/applied-bids/applied-bids.component'; 

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    DashboardComponent,
    HeroSearchComponent,
    PostBidComponent,
    FooterComponent,
    DashboardSummaryComponent,
    SummaryCardComponent,
    PersonalBidsComponent,
    ButtonComponent,
    LoginComponent,
    AdminDashboardComponent,
    AdminDashboardSummaryComponent,
    AllUsersComponent,
    AllBidsComponent,
    CreateUserFormComponent,
    AllBidsPageComponent,
    BidFormComponent,
    PostedBidsComponent,
    AppliedBidsComponent 
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
