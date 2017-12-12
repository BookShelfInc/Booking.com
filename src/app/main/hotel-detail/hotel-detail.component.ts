import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { Hotel } from '../../models/hotel';
import { ActivatedRoute, Params, Router }   from '@angular/router';

@Component({
  selector: 'app-hotel-detail',
  templateUrl: './hotel-detail.component.html',
  styleUrls: ['./hotel-detail.component.scss']
})
export class HotelDetailComponent implements OnInit {
  private sub: any;

  hotel: Hotel;
  private latitude;
  private longitude;
  private hotelId;

  constructor(private route: ActivatedRoute, private hotelService: HotelService) { }

  ngOnInit() {
    this.sub = this.route.params.subscribe(
      params => { 
        console.log(params['id']);
        this.hotelService.getHotelInfo(params['id']).subscribe(
          data => {
            this.hotel = data.json() as Hotel;
            this.latitude = this.hotel.latitude;
            this.longitude = this.hotel.longitude;
            this.hotelId = params['id'];
            console.log(this.hotel);
          },
          error => {
            console.log(error);
          }
        );
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
