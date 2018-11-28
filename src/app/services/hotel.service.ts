import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HotelService {

  private _hotelsUrl = 'http://localhost:3030/hotels'
  private _oneHotel = 'http://localhost:3030/hotel'
  constructor(private http:HttpClient) { }
  getAllHotels(){
    return this.http.get<any>(this._hotelsUrl);
  }
  getHotelsWithFilter(offset,count){
    return this.http.get<any>(this._hotelsUrl + "?offset="+offset + "&count="+count);
  }
  getOneHotel(hotelId){
    return this.http.get<any>(this._oneHotel + "/" + hotelId)
  }
}
