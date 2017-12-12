import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Review } from '../models/user';

@Injectable()
export class UserService {

  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  public getCurrentUser(){
    let url = 'api/user/online';
    return this.http.get(url, this.options);
  }

  public postReview(review: Review){
    let url = 'api/review/create';
    console.log(JSON.stringify(review));
    this.http.post(url, JSON.stringify(review), this.options).subscribe(
      data => {
        console.log("success post " + data);
      },
      error => {
        console.log(error);
      }
    );
  }

  public deleteReview(id: number){
    let url = 'api/review/delete/' + id.toString();
    this.http.post(url, this.options).subscribe();
  }

}
