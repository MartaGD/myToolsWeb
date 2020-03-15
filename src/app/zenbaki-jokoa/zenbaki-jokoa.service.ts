import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ Zenbakia } from '../model/zenbakia';
import { Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ZenbakiJokoaService {

  constructor(private http: HttpClient) {}

  private zenbakiakURL : string = "../assets/zenbakiak.json";

  getZenbakiakJson(): Observable<Zenbakia[]>{
    return this.http.get<Zenbakia[]>(this.zenbakiakURL);
  }
}

/*    "0" : "zero",
    "1":"bat",
    "2" : "bi",
    "3" : "hiru",
    "4" : "lau",
    "5" : "bost",
    "6" : "sei",
    "7" : "zazpi",
    "8" : "zortzi",
    "9" : "bederatzi",
    "10" : "hamar",
    "11" : "hamaika",
    "12" : "hamabi",
    "13" : "hamahiru",
    "14" : "hamalau",
    "15" : "hamabost",
    "16" : "hamasei",
    "17" : "hamazazpi",
    "18" : "hemezortzi",
    "19" : "hemeretzi",
    "20" : "hogei" */