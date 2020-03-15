import { Component, ViewEncapsulation  } from '@angular/core';
import{ TableGeneratorService } from './table-generator.service';
import{ ITags } from '../model/tagsHTML';

@Component({
  selector: 'app-table-generator',
  templateUrl: 'table-generator.component.html',
  styleUrls: ['table-generator.component.scss'],
  encapsulation: ViewEncapsulation.None  
})
export class TableGeneratorComponent  {
  title: string =  "Tables BBCode Generator";
  lbRows : string = "Rows";
  lbCols: string = "Columns";
  lbHtmlCode : string = "HTML Code:";
  lbBbCode : string = "BBCode:";
  public provaHTML: string;
  public provaBBCODE: string;
  private tagsBBCode: ITags;
  private tagsHTML: ITags;
  private msgTxtCopied : string = "Code copied to the clipboard.";

  constructor(private tblGeneratorService: TableGeneratorService){}

  ngOnInit() {
    console.log("POOTETOOES");
    this.carga();
    this.tblGeneratorService.getHTML()
    .subscribe(data => this.tagsHTML = data);  
    this.tblGeneratorService.getBBCode()
    .subscribe(data => this.tagsBBCode = data); 
  }

  carga():void{
    let inputs = document.getElementsByName("inputs");
    for (var i = 0; i < inputs.length; i++) {
      inputs[i].addEventListener('change',this.changeTable,false);
    }
    /*let buttons = document.getElementsByTagName("ion-button"); 
    for (var i = 0; i < buttons.length; i++) {
      buttons[i].addEventListener('click',this.openPicker(),false);
    }*/
  }

  changeTable= () : void => {
        let rows = <HTMLInputElement>document.getElementById("rows");
        console.log(rows.value);
        //.value=="" ? 1 : document.getElementById("rows").value;
        let cols = <HTMLInputElement>document.getElementById("cols");
        console.log(cols.value);
        //.value=="" ? 1 : document.getElementById("cols").value;
        document.getElementById("page").innerHTML =  this.createTableHTML(+rows.value,+cols.value,this.tagsHTML);
        this.provaHTML =  this.createTableHTML(+rows.value,+cols.value,this.tagsHTML);
        this.provaBBCODE =  this.createTableHTML(+rows.value,+cols.value,this.tagsBBCode);
  }

  createTableHTML(rows : number,columns : number ,data: ITags) : string{
  let totalCells = 1;
  let table = "";
  /*Los Open siempre tienen que concaternarse con el closeSign
  En caso que se quiera añadir algun atributo iria entre los dos parametros.*/
  table = table.concat(data.openTABLE,data.closeSign);
  for(var j=1;j<=rows;j++){
    table = table.concat(data.openTR,data.closeSign);
    for(var i=1;i<=columns;i++){
      table = table.concat(data.openTD,data.closeSign,totalCells.toString(),data.closeTD);
      totalCells++;
    }
    table = table.concat(data.closeTR);
  }
  table = table.concat(data.closeTABLE);

  return table;

  }

  copyTextArea = (event: Event) : void => {
    let ev = <HTMLButtonElement>event.currentTarget;
    let txtArea = <HTMLTextAreaElement>document.getElementById(ev.id.substring(3));
    
    if(txtArea.value !== ""){
      /*Select the text field */
      txtArea.select();
      txtArea.setSelectionRange(0, 99999); /*For mobile devices*/

      /*Copy the text inside the text field */
      document.execCommand("copy");

      /*Alert the copied text */
      alert(this.msgTxtCopied);
    }
  }

}
