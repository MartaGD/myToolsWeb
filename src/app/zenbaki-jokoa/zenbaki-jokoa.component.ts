import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-zenbaki-jokoa',
  templateUrl: './zenbaki-jokoa.component.html',
  styleUrls: ['./zenbaki-jokoa.component.scss'],
})
export class ZenbakiJokoaComponent implements OnInit {
  title: string =  "Zenbaki Jokoa";
  number : number = 0;
  constructor() { }

  ngOnInit() {}

}
