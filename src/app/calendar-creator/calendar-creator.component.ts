import { Component, ViewEncapsulation, OnInit } from '@angular/core';
import{ TableGeneratorService } from '../table-generator/table-generator.service';
import{ ITags } from '../model/tagsHTML';
import { concat } from 'rxjs';

@Component({
  selector: 'app-calendar-creator',
  templateUrl: './calendar-creator.component.html',
  styleUrls: ['./calendar-creator.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class CalendarCreatorComponent implements OnInit {
  title: string =  "Calendar Generator";
  lbMonth : string = "Month to create:";
  public tagsIonic: ITags;

  constructor(private tblGeneratorService: TableGeneratorService){}

  ngOnInit() {
    this.tblGeneratorService.getIonicCode()
    .subscribe(data => this.tagsIonic = data);  
    document.getElementById("monthSelector").
    addEventListener('change',this.createCalendar,false);
   }

  createCalendar = () : void => {
    document.getElementById("calendarSpace").innerHTML =  this.createCalendarStructure();
    let grids = <HTMLCollectionOf<HTMLIonGridElement>>document.getElementsByTagName("ion-grid");
    console.log("SSS"+grids[0]);
  }

 createCalendarStructure = () : string  => {
    let rows = 5;
    let columns = 7;
    let rowsData = "";
    let monthSelected = <HTMLInputElement>document.getElementById("monthSelector");
    let date: Date = new Date(monthSelected.valueAsDate);
    console.log(date);  
    let monthNumber = date.getMonth();
    //Ponemos el mes con letras y con la primera letra en mayúscula
    let monthName = date.toLocaleString('default', { month: 'long' });
    monthName = monthName[0].toUpperCase()+monthName.substr(1).toLowerCase();
    rowsData = rowsData.concat(this.createTR(monthName));
    /*Los Open siempre tienen que concaternarse con el closeSign
    En caso que se quiera añadir algun atributo iria entre los dos parametros.*/
    //Creamos la fila de los días de la semana
    rowsData = rowsData.concat(this.createTR(this.createRowWeekdays()));
    for(var j=0;j<=rows;j++){
      var columnsData : string = "";
      if(monthNumber == date.getMonth()) {
        for(var i=1;i<=columns;i++){
          if(monthNumber == date.getMonth()) {
            if(i==date.getDay() && 0 != date.getDay()){
              let dayName = date.toLocaleString('default', { weekday: 'long' });
              console.log(dayName+" - "+date.getDate()); 
              columnsData = columnsData.concat(this.createTD(date.getDate()));
              date.setDate(date.getDate() + 1); 
            }else{
              if(0==date.getDay() && i==7){
                let dayName = date.toLocaleString('default', { weekday: 'long' });
                console.log(dayName+" - "+date.getDate()); 
                columnsData = columnsData.concat(this.createTD(date.getDate()));
                date.setDate(date.getDate() + 1);
                
              }else{
                columnsData = columnsData.concat(this.createTD(""));
              }
            }
          }else{
            //we concat the content to create a new cell
            columnsData = columnsData.concat(this.createTD(""));
          }
        }
      } 
      //we concat all the new columns to create a new row
      rowsData = rowsData.concat(this.createTR(columnsData));
    }
    //we concat all the rows into a table
    return this.createTable(rowsData);
  }

  createRowWeekdays = () : string =>{
    let newDate = new Date();
    let stringToReturn :string = "";
    while(newDate.getDay() != 1){
      newDate.setDate(newDate.getDate() + 1);
    }
    for(var i = 1; i<=7;i++){
      let aux : string = newDate.toLocaleString('default', { weekday: 'long' });
      stringToReturn = stringToReturn.concat(this.createTD(aux));
      newDate.setDate(newDate.getDate() + 1);
    }

  return stringToReturn;

}
  createTable = (rows) : string  => {
    var newTbl : string = "";
    newTbl = this.tagsIonic.openTABLE+rows+this.tagsIonic.closeTABLE;              
  return newTbl;
  }

  createTR = (columns) : string  => {
    var newRow : string = "";
    newRow = this.tagsIonic.openTR+columns+this.tagsIonic.closeTR;              
  return newRow;
}
  createTD = (content) : string  => {
      var newCell : string = "";
      newCell = this.tagsIonic.openTD+content+this.tagsIonic.closeTD;              
    return newCell;
  }

}
