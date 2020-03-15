import { Component, OnInit } from '@angular/core';
import { MusicBoxService } from './music-box.service';
import{ ISound } from '../model/sound.interface';

@Component({
  selector: 'app-music-box',
  templateUrl: './music-box.component.html',
  styleUrls: ['./music-box.component.scss'],
})
export class MusicBoxComponent {
  title: string =  "Music Box";
  songs: ISound[];
  ambient: ISound[];
  sounds: ISound[]; 

  comptaAmbMi = "Compta amb mi";
  comptaAmbMiExt = ".mp3"

  market = "Market";
  marketExt = ".wav";

  constructor( private homeService: MusicBoxService){}

  ngOnInit(){
    console.log("POOTETOOES");
    this.homeService.getJsonProfile("songs.json")
    .subscribe(data => this.songs = data);
    this.homeService.getJsonProfile("ambient.json")
    .subscribe(data => this.ambient = data);    
    this.homeService.getJsonProfile("sounds.json")
    .subscribe(data => this.sounds = data);   


  }

    playerPlayPause(id){
    let audioPlayer:   HTMLAudioElement = <HTMLAudioElement>document.getElementById(id);  
    let colorClass = document.createAttribute("color");
    let iconClass = document.createAttribute("name");
    if(audioPlayer.paused == true){
      audioPlayer.play();
      colorClass.value = "medium";
      iconClass.value = "pause";
      document.getElementById(id+"Btn1").attributes.setNamedItem(iconClass); 
      document.getElementById(id+"Btn1").parentElement.attributes.setNamedItem(colorClass);  
    }else{
      audioPlayer.pause();
      colorClass.value = "dark";
      iconClass.value = "play";
      document.getElementById(id+"Btn1").attributes.setNamedItem(iconClass); 
      document.getElementById(id+"Btn1").parentElement.attributes.setNamedItem(colorClass); 
    }
  }
 
  playerStop(id){
    let audioPlayer:   HTMLAudioElement = <HTMLAudioElement>document.getElementById(id);
    let colorClass = document.createAttribute("color");
    let iconClass = document.createAttribute("name");
    audioPlayer.pause();
    audioPlayer.currentTime = 0;
    colorClass.value = "dark";
    iconClass.value = "play";
    //Volvemos a poner el botón Play/Pause en color oscuro
    document.getElementById(id+"Btn1").parentElement.attributes.setNamedItem(colorClass); 
    document.getElementById(id+"Btn1").attributes.setNamedItem(iconClass); 
  }

  playerLoop(id){
    let audioPlayer:   HTMLAudioElement = <HTMLAudioElement>document.getElementById(id);
    let colorClass = document.createAttribute("color");
    let iconClass = document.createAttribute("name");
    if(audioPlayer.loop == true){
      audioPlayer.loop = false;
      colorClass.value = "dark";
    }else{
      audioPlayer.loop = true;
      colorClass.value = "medium";
    }
    //Volvemos a poner el botón Play/Pause en color oscuro
    document.getElementById(id+"Btn3").parentElement.attributes.setNamedItem(colorClass); 

  }

}
