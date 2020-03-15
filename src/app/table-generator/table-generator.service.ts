import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ ITags } from '../model/tagsHTML';
import { Observable } from "rxjs";

@Injectable()
export class TableGeneratorService {

  constructor(private http: HttpClient) {}

  private tagsHTMLURL : string = "../assets/htmlTags.json";
  private tagsBBCodeURL : string = "../assets/bbcodeTags.json";
  private tagsIonicURL : string = "../assets/ionicTags.json";

  getJsonProfile(): Observable<ITags>{
    return this.http.get<ITags>(this.tagsHTMLURL);
  }

  getHTML(): Observable<ITags>{
    return this.http.get<ITags>(this.tagsHTMLURL);
  }

  getBBCode(): Observable<ITags>{
    return this.http.get<ITags>(this.tagsBBCodeURL);
  }

  getIonicCode(): Observable<ITags>{
    return this.http.get<ITags>(this.tagsIonicURL);
  }
}
