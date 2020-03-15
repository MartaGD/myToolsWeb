import { Component, OnInit } from '@angular/core';
import{ ZenbakiJokoaService } from './zenbaki-jokoa.service';
import{ Zenbakia } from '../model/zenbakia';

@Component({
  selector: 'app-zenbaki-jokoa',
  templateUrl: './zenbaki-jokoa.component.html',
  styleUrls: ['./zenbaki-jokoa.component.scss'],
})
export class ZenbakiJokoaComponent implements OnInit {
  title: string =  "Zenbaki Jokoa";
  number : number =  0;
  option1 : string;
  option2 : string;
  option3 : string;
  zenbakiak: Zenbakia[];
  zenbakiak2: Zenbakia[];
  
  constructor(private zenbakiJokoaService: ZenbakiJokoaService) { }

  ngOnInit() {
    console.log("Zenbakia!");
    this.zenbakiJokoaService.getZenbakiakJson()
    .subscribe(data => this.zenbakiak = data);
  
   console.log(Object.keys(this.zenbakiak2).length);
  }

}
