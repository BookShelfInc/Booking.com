import { Component, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel';

@Component({
  selector: 'app-hotel',
  templateUrl: './hotel.component.html',
  styleUrls: ['./hotel.component.scss']
})
export class HotelComponent implements OnInit {

  hotels: Hotel[];

  constructor(private hotelService: HotelService) { }

  ngOnInit() {
    this.hotelService.getHotels().subscribe(
      data => {
        this.hotels = data.json() as Hotel[];
        console.log(this.hotels);
      },
      error => {
        console.log(error);
      }
    );
  }
}
