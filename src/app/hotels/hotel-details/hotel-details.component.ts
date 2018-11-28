import { Component, OnInit } from '@angular/core';
import { HotelService } from '../../services/hotel.service'
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-hotel-details',
  templateUrl: './hotel-details.component.html',
  styleUrls: ['./hotel-details.component.css']
})
export class HotelDetailsComponent implements OnInit {
  hotel = {};
  hotelId: any;
  constructor(private _htlSrvs: HotelService, private route: ActivatedRoute) { }

  ngOnInit() {
    // this.route.params.subscribe(params => {
    //   console.log(params.hotelId);
    //   this.hotelId = params.hotelId
    // })
    this._htlSrvs.getOneHotel(this.hotelId)
      .subscribe(
        res => {
          // console.log(res);
          this.hotel = res;
          console.log(this.hotel);
          
        }, err => {
          console.log(err);
        }
      )
  }

}
 

