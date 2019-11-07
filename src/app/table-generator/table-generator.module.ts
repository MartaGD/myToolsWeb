import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import{ TableGeneratorService } from './table-generator.service';

import { TableGeneratorComponent } from './table-generator.component';
@NgModule({
  declarations: [TableGeneratorComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
    {
      path: '',
      component: TableGeneratorComponent
    }
  ])
  ],
  providers: [
    TableGeneratorService
  ]
})
export class TableGeneratorModule { }
