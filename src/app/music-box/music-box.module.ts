import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { MusicBoxComponent } from './music-box.component';
import { MusicBoxService } from './music-box.service';


@NgModule({
  declarations: [MusicBoxComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
    {
      path: '',
      component: MusicBoxComponent
    }
  ])
  ],
  providers: [
    MusicBoxService
  ]
})
export class MusicBoxModule { }
