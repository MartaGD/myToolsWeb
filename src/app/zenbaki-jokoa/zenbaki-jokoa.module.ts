import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { ZenbakiJokoaComponent } from './zenbaki-jokoa.component';
import { ZenbakiJokoaService } from './zenbaki-jokoa.service';

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
  ],
  providers: [
    ZenbakiJokoaService
  ]
})
export class ZenbakiJokoaModule { }
