import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { MainRoutingModule } from './main-routing.module';
import { FlexLayoutModule } from '@angular/flex-layout';

import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { MatPaginatorModule, MatTableModule, MatIconModule, MatSelectModule, MatInputModule, 
        MatListModule, MatSliderModule, MatSlideToggleModule, MatButtonModule, MatButtonToggleModule,
        MatToolbarModule, MatAutocompleteModule, MatCardModule, MatCheckboxModule, MatChipsModule, 
        MatDatepickerModule, MatDialogModule, MatStepperModule, MatExpansionModule, MatGridListModule, 
        MatMenuModule, MatNativeDateModule, MatProgressBarModule, MatProgressSpinnerModule, MatRadioModule, 
        MatRippleModule, MatSidenavModule, MatSnackBarModule, MatSortModule, 
        MatTabsModule, MatTooltipModule } from '@angular/material';
import { CdkTableModule } from '@angular/cdk/table';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MainComponent } from './main.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AgmCoreModule } from '@agm/core';
import { HotelComponent } from './hotel/hotel.component';

import { HotelService } from '../services/hotel.service';
import { HotelDetailComponent } from './hotel-detail/hotel-detail.component';
import { ReviewComponent } from './review/review.component';
import { UserService } from '../services/user.service';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    MainRoutingModule,
    HttpClientModule,
    HttpModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
    FlexLayoutModule,
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBqkPD1J5x9yQh0lP7Z-uQVKzGo4B8CBEM'
    }),
    // BrowserAnimationsModule,
  ],
  declarations: [
    NavbarComponent,
    MainComponent,
    HotelComponent,
    HotelDetailComponent,
    ReviewComponent,
  ],
  exports: [
    NavbarComponent,
    CommonModule,
    RouterModule,
    CdkTableModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatStepperModule,
    MatDatepickerModule,
    MatDialogModule,
    MatExpansionModule,
    MatGridListModule,
    MatIconModule,
    MatInputModule,
    MatListModule,
    MatMenuModule,
    MatNativeDateModule,
    MatPaginatorModule,
    MatProgressBarModule,
    MatProgressSpinnerModule,
    MatRadioModule,
    MatRippleModule,
    MatSelectModule,
    MatSidenavModule,
    MatSliderModule,
    MatSlideToggleModule,
    MatSnackBarModule,
    MatSortModule,
    MatTableModule,
    MatTabsModule,
    MatToolbarModule,
    MatTooltipModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers:[HotelService, UserService]
})
export class MainModule { }
