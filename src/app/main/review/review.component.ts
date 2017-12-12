import { Component, OnInit, Input } from '@angular/core';
import { HotelService } from '../../services/hotel.service';
import { Review, User } from '../../models/user';
import { Hotel } from '../../models/hotel';
import { MatIconModule } from '@angular/material/icon';
import { UserService } from '../../services/user.service';
import { MatInputModule } from '@angular/material/input';
import { reverse } from 'dns';

@Component({
  selector: 'app-review',
  templateUrl: './review.component.html',
  styleUrls: ['./review.component.scss']
})
export class ReviewComponent implements OnInit {

  user: User;
  model;
  reviews: Review[];
  private _hotelInput: number;

  @Input()
  set hotelInput(id: number){
    this._hotelInput = id;
    if(this._hotelInput){
      this.hotelService.getHotelReviews(id).subscribe(
        data => {
          this.reviews = data.json() as Review[];
          console.log("review app");
          console.log(this.reviews);
        },
        error => {
          console.log(error);
        }
      );
    }
  }

  constructor(private hotelService: HotelService, private userService: UserService) {
    this.checkUser();
  }

  ngOnInit() {
  }

  checkUser(){
    this.userService.getCurrentUser().subscribe(
      data => {
        this.user = data.json() as User;
      }, 
      error => {
        console.log(error);
      }
    );
  }

  addReview(){
    console.log(this.model);
    const hotelW: Hotel = {
      id: this._hotelInput,
    };
    const reviewW: Review = {
      content: this.model,
      stars: 4,
      hotel: hotelW,
    };
    this.userService.postReview(reviewW);
    this.reviews.push(reviewW);
    this.model = "";
  }

  deleteReview(id: number){
    console.log("delete review " + id.toString());
    this.userService.deleteReview(id);

    var lReviews: Review[] = [];
    for(let review of this.reviews){
      if(review.id != id){
        lReviews.push(review);
      }
    }
    this.reviews = lReviews;
  }

}
