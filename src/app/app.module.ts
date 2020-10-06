import { BrowserModule } from '@angular/platform-browser';
import { NgModule ,CUSTOM_ELEMENTS_SCHEMA} from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';



import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookinglistComponent } from './bookinglist/bookinglist.component';
import { ProfileComponent } from './profile/profile.component';
import { WalletComponent } from './wallet/wallet.component';
import { ForgotPasswordComponent} from './forgot-password/forgot-password.component';
import { HomepageComponent} from './homepage/homepage.component';
import { LoginComponent} from './login/login.component';
import { SearchBusesComponent} from './search-buses/search-buses.component';
import { ShowBusesComponent} from './show-buses/show-buses.component';
import { SignupComponent} from './signup/signup.component';
import { CancelBookingComponent} from './cancel-booking/cancel-booking.component';
import { PasswordresetComponent} from './passwordreset/passwordreset.component';
import { PaymentComponent} from './payment/payment.component';
import { SeatLayoutComponent} from './seat-layout/seat-layout.component';

import { RegisteredcustomerbutnoreservationComponent } from './registeredcustomerbutnoreservation/registeredcustomerbutnoreservation.component';
//import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { FrequentlytravelledroutesComponent } from './frequentlytravelledroutes/frequentlytravelledroutes.component';
import { LastmonthrecordsandprofitComponent } from './lastmonthrecordsandprofit/lastmonthrecordsandprofit.component';
import { MostpreferredtypeofbusesComponent } from './mostpreferredtypeofbuses/mostpreferredtypeofbuses.component';
import { ReservationdetailsComponent } from './reservationdetails/reservationdetails.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { WallettopupComponent } from './wallettopup/wallettopup.component';
import { ProfilePicComponent } from './profile-pic/profile-pic.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { PassengerComponent } from './passenger/passenger.component';


@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    BookinglistComponent,
    ProfileComponent,

    WalletComponent,
    ForgotPasswordComponent,
    HomepageComponent,
    LoginComponent,
    SearchBusesComponent,
    ShowBusesComponent,
    SignupComponent,
    CancelBookingComponent,
    PasswordresetComponent,
    PaymentComponent,
    SeatLayoutComponent,
    
    FrequentlytravelledroutesComponent,
    LastmonthrecordsandprofitComponent,
    MostpreferredtypeofbusesComponent,
    RegisteredcustomerbutnoreservationComponent,
     ReservationdetailsComponent,
     AboutUsComponent,
     ContactUsComponent,
     WallettopupComponent,
     ProfilePicComponent,
     EditProfileComponent,
     PassengerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]

})
export class AppModule { }
