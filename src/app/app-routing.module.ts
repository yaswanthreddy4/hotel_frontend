import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { RegistrationComponent } from './auth/registration/registration.component';
import { LoginComponent } from './auth/login/login.component';
import { HotelsComponent } from './hotels/hotels/hotels.component';
import { HotelDetailsComponent } from './hotels/hotel-details/hotel-details.component';
import { RouteGuard } from './guard/route.guard';
import { AdminComponent } from './admin/admin.component';
import { AdminGuard } from './guard/admin.guard';
import { EventsComponent } from './home/events/events.component';




const routes: Routes = [
  {path:'', component:HomeComponent},
  { path: 'home', component: HomeComponent },
  { path: 'events', component: EventsComponent },
  { path: 'hotels', component:HotelsComponent,canActivate:[RouteGuard] },
  { path: 'hotel/:hotelId', component: HotelDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'events', component: EventsComponent },
  { path: 'admin', component: AdminComponent,canActivate:[AdminGuard] },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
