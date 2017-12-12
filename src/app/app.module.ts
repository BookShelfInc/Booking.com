import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpModule } from '@angular/http';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { MainModule } from './main/main.module';
import { ProfileModule } from './profile/profile.module';

import { AppComponent } from './app.component';
import { HotelService } from './services/hotel.service';
import { UserService } from './services/user.service';

import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule,
    MainModule,
    ProfileModule,
    FlexLayoutModule,
    BrowserAnimationsModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqkPD1J5x9yQh0lP7Z-uQVKzGo4B8CBEM'
    }),
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [HotelService, UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
