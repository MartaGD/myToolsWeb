import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { CalendarCreatorComponent } from './calendar-creator.component';
import{ TableGeneratorService } from '../table-generator/table-generator.service';

@NgModule({
  declarations: [CalendarCreatorComponent],
  imports: [
    CommonModule,
    IonicModule,
    RouterModule.forChild([
      {
        path: '',
        component: CalendarCreatorComponent
      }
    ])
  ],
  providers:[
    TableGeneratorService
  ]
})
export class CalendarCreatorModule { }
