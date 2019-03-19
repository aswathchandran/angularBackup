import { Component } from '@angular/core';
import { google } from '@agm/core/services/google-maps-types';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'mapsSample';
  lat: number = 51.678418;
  lng: number = 7.809007;



  haaa(event:Event)
  {
    console.log(event);
  }


}
