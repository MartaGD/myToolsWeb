import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs";
import{ ISound } from '../model/sound.interface';

@Injectable({
  providedIn: 'root'
})
export class MusicBoxService {

  constructor(private http: HttpClient) {}

  private configUrl : string = "../assets/sounds.json";

  getJsonProfile(url:string): Observable<ISound[]>{
    return this.http.get<ISound[]>("../assets/"+url);
  }
}
