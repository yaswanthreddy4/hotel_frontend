import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './auth/login/login.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { AlertComponent } from './alert/alert.component';
import { HotelDetailsComponent } from './hotels/hotel-details/hotel-details.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { HotelService } from './services/hotel.service';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule} from '@angular/forms';
import { AdminComponent } from './admin/admin.component';
import { EventsComponent } from './home/events/events.component';
import { CustomifDirective } from './directives/customif.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    NotFoundComponent,
    LoginComponent,
    RegistrationComponent,
    AlertComponent,
    HotelDetailsComponent,
    HotelsComponent,
    EventsComponent,
    AdminComponent,
    CustomifDirective,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
