import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomepageComponent} from './homepage/homepage.component';
import {LoginComponent} from './login/login.component';
import {SignupComponent} from './signup/signup.component';
import {ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import {SearchBusesComponent} from './search-buses/search-buses.component';
import { ShowBusesComponent } from './show-buses/show-buses.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CancelBookingComponent } from './cancel-booking/cancel-booking.component';
import { PasswordresetComponent } from './passwordreset/passwordreset.component';
import { PaymentComponent } from './payment/payment.component';
import { SeatLayoutComponent } from './seat-layout/seat-layout.component';
import { FrequentlytravelledroutesComponent } from './frequentlytravelledroutes/frequentlytravelledroutes.component';
import { LastmonthrecordsandprofitComponent } from './lastmonthrecordsandprofit/lastmonthrecordsandprofit.component';
import { MostpreferredtypeofbusesComponent } from './mostpreferredtypeofbuses/mostpreferredtypeofbuses.component';
import { RegisteredcustomerbutnoreservationComponent } from './registeredcustomerbutnoreservation/registeredcustomerbutnoreservation.component';
import { ReservationdetailsComponent } from './reservationdetails/reservationdetails.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WallettopupComponent } from './wallettopup/wallettopup.component';


const routes: Routes = [
  { path:'', redirectTo: "/homepage", pathMatch: 'full'},
  { path: "homepage", component: HomepageComponent, children: [
    { path: "", component:SearchBusesComponent}
  ]},
  { path: "login", component: LoginComponent},
  { path: "signup", component: SignupComponent},
  { path: "forgotPassword", component: ForgotPasswordComponent},
  { path: "searchBuses", component:SearchBusesComponent},
  { path: "showBuses", component: ShowBusesComponent},
  { path: "dashboard", component: DashboardComponent},
  { path: 'cancel-booking', component: CancelBookingComponent },
  { path: 'reset-password', component: PasswordresetComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'payment', component: PaymentComponent },
  { path: 'seat-layout', component: SeatLayoutComponent },
  { path: 'about-us', component: AboutUsComponent},
  { path: 'contact-us', component: ContactUsComponent},
  { path:'frequentlytravelledroutes',component:FrequentlytravelledroutesComponent },
  { path:'lastmonthrecordsandprofit',component:LastmonthrecordsandprofitComponent },
  { path:'mostpreferredtypeofbuses',component:MostpreferredtypeofbusesComponent },
  { path:'registeredcustomerbutnoreservation',component:RegisteredcustomerbutnoreservationComponent },
  { path:'reservationdetails',component:ReservationdetailsComponent },
  { path:'wallettopup', component:WallettopupComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }