import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { HttpClientModule } from '@angular/common/http';
import { MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSortModule}from '@angular/material/sort';
import {MatCardModule}from '@angular/material/card';
import {MatGridListModule} from "@angular/material/grid-list"
import { RegisterTravelerComponent } from './Travelers_/pages/register-traveler/register-traveler.component';
import { TripEventsComponent } from './Travelers_/pages/trip-events/trip-events.component';
import { LoginComponent } from './public/login/login.component';
import { KnowMoreComponent } from './Travelers_/pages/know-more/know-more.component';
import { CreateEventComponent } from './Travelers_/pages/create-event/create-event.component';
import { SearchEventComponent } from './Travelers_/pages/search-event/search-event.component';
import { SearchRouteComponent } from './Travelers_/pages/search-route/search-route.component';
import { RoutesComponent } from './Travelers_/pages/routes/routes.component';
import { GoogleMapsModule } from '@angular/google-maps';
import {MatListModule} from '@angular/material/list';
import { FilterPipe } from './pipes/filter.pipe'
import { MatOptionModule } from '@angular/material/core';
import { CreateRouteComponent } from './Drivers/pages/create-route/create-route.component';
import { TripRoutesComponent } from './Drivers/pages/trip-routes/trip-routes.component';
import { ShowMyRoutesComponent } from './Drivers/pages/show-my-routes/show-my-routes.component';
import { LoginDriverComponent } from './Drivers/pages/login-driver/login-driver.component';
import { RegisterDriverComponent } from './Drivers/pages/register-driver/register-driver.component';
import { RegisterVehicleComponent } from './Drivers/pages/register-vehicle/register-vehicle.component';
import { LoginTravelerComponent } from './Travelers_/pages/login-traveler/login-traveler.component';
import { ViewEventsComponent } from './Drivers/pages/view-events/view-events.component';
import { TravelerProfileComponent } from './Travelers_/pages/traveler-profile/traveler-profile.component';

@NgModule({
  declarations: [
    AppComponent,
    RegisterTravelerComponent,
    TripEventsComponent,
    LoginComponent,
    KnowMoreComponent,
    CreateEventComponent,
    SearchEventComponent,
    SearchRouteComponent,
    RoutesComponent,
    FilterPipe,
    CreateRouteComponent,
    TripRoutesComponent,
    ShowMyRoutesComponent,
    LoginDriverComponent,
    RegisterDriverComponent,
    RegisterVehicleComponent,
    LoginTravelerComponent,
    ViewEventsComponent,
    TravelerProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatFormFieldModule,
    FormsModule,
    ReactiveFormsModule,
    MatTableModule,
    MatPaginatorModule,
    MatInputModule,
    MatButtonModule,
    MatToolbarModule,
    MatFormFieldModule,
    MatIconModule,
    MatSortModule,
    MatCardModule,
    MatGridListModule,
    GoogleMapsModule,
    MatListModule,
    MatOptionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
