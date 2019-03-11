import { Component, OnInit, Input } from '@angular/core';
import { EventsService } from '../../services/events.service';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {
  events = [];
  images = ["../../../assets/image1.jpeg",
    "../../../assets/image2.jpeg",
    "../../../assets/image3.jpeg",
    "../../../assets/image4.jpeg",
    "../../../assets/image5.jpeg",
    "../../../assets/image6.jpeg",
];
  constructor(private _authsrv: EventsService) { }

  ngOnInit() {
    this._authsrv.getevents()
      .subscribe(
        res => {
          // console.log(res);
          this.events = res;
          console.log(this.events);

        }, err => {
          console.log(err);
        }
      )
  }

}
