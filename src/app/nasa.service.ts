import { Injectable, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class NasaService implements OnInit{

  photo: any={}
  lienPhoto = ""
  constructor(public http: HttpClient) { }

  ngOnInit(): void {
      this.getImageOfTheDay()
  }


  // GET https://api.nasa.gov/planetary/apod?api_key=827EpLVXq21db720R3x5SKPzE97FbvyY9YBcqc3q


getImageOfTheDay(){
  return this.http.get("https://api.nasa.gov/planetary/apod?api_key=827EpLVXq21db720R3x5SKPzE97FbvyY9YBcqc3q")
  .subscribe((photoAPI)=>{
this.photo = photoAPI;
this.lienPhoto = this.photo.url
console.log(this.photo);
console.log(this.lienPhoto);
  })



  }

}
