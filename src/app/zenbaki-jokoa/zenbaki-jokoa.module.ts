import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ZenbakiJokoaComponent } from './zenbaki-jokoa.component';

@NgModule({
  declarations: [ZenbakiJokoaComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
    {
      path: '',
      component: ZenbakiJokoaComponent
    }
  ])
  ]
})
export class ZenbakiJokoaModule { }
