import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-generator',
  templateUrl: './post-generator.component.html',
  styleUrls: ['./post-generator.component.scss'],
})
export class PostGeneratorComponent implements OnInit {
  title: string =  "Tables BBCode Generator";
  
  constructor() { }

  ngOnInit() {}

}
