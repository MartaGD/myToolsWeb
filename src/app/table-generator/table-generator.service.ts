import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import{ ITagsHTML } from '../model/tagsHTML';
import { Observable } from "rxjs";
import {map} from 'rxjs/operators';

@Injectable()
export class TableGeneratorService {

  constructor(private http: HttpClient) {}

  private tagsHTMLURL : string = "../assets/htmlTags.json";
  private tagsBBCodeURL : string = "../assets/bbcodeTags.json";

  getJsonProfile(): Observable<ITagsHTML>{
    return this.http.get<ITagsHTML>(this.tagsHTMLURL);
  }

  getHTML(): Observable<ITagsHTML>{
    return this.http.get<ITagsHTML>(this.tagsHTMLURL);
  }

  getBBCode(): Observable<ITagsHTML>{
    return this.http.get<ITagsHTML>(this.tagsBBCodeURL);
  }
}
