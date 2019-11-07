import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

import { PostGeneratorComponent } from './post-generator.component';

@NgModule({
  declarations: [PostGeneratorComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: PostGeneratorComponent
      }
    ])
  ]
})
export class PostGeneratorModule { }
