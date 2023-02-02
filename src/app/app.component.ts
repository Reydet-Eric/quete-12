import { Component, OnInit } from '@angular/core';
import { NasaService } from './nasa.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'quete-12';

constructor (public nasa: NasaService) {this.nasa.lienPhoto}

  ngOnInit(){this.nasa.getImageOfTheDay()
  }

}
