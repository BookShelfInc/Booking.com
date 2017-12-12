import { Injectable } from '@angular/core';
import { Http, Headers, Response, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class HotelService {
  
  constructor(private http: Http) { }

  private headers = new Headers({ 'Content-Type': 'application/json' });
  private options = new RequestOptions({ headers: this.headers });

  public getHotels(){
    let url = 'api/hotel/all';
    return this.http.get(url, this.options);
  }

  public getHotelInfo(id: number){
    let url = 'api/hotel/id/' + id.toString();
    return this.http.get(url, this.options);
  }

  public getHotelReviews(id: number){
    let url = 'api/review/hotel/' + id.toString();
    return this.http.get(url, this.options);
  }
}
