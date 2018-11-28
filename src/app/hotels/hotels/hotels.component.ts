import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service'


@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {
  offset = 0;
  count = 6;
  hotels=[];

  constructor(private _htlSrvs:HotelService) { }

  ngOnInit() {
    // this.getHotels();
    this.getHotelsWithFilter(0,6);
  }
  getHotels(){
    this._htlSrvs.getAllHotels()
    .subscribe(
      (res=>{
        console.log(res);
        this.hotels=res;
      }),(err=>{
        console.log(err);
      })
    )
  }

getHotelsWithFilter(offset, count){
  this._htlSrvs.getHotelsWithFilter(offset, count)
  .subscribe(
    (res=>{
      console.log(res);
      this.hotels = res;
    }),(err=>{
    console.log(err);
    })
  )
  this.offset = offset;
}
}
