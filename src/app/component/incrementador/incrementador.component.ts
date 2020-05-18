import { Component,EventEmitter, OnInit, Input, Output, ViewChild, ElementRef } from '@angular/core';

@Component({
  selector: 'app-incrementador',
  templateUrl: './incrementador.component.html',
  styleUrls: []
})
export class IncrementadorComponent implements OnInit {
  @ViewChild('textProgress') textProgress:ElementRef;

  @Input('nombre') leyenda:string ="leyenda";
  @Input() progreso:number =50;

  @Output() cambiaValor:EventEmitter<number> =new EventEmitter();

  constructor() { 
/*     console.log(this.textProgress);
    console.log("Constructor: progreso",this.progreso);
 */  }
  
  ngOnInit(): void {
/*     console.log("OnInit",this.leyenda);
 */  //  console.log("ngOnInt: progreso",this.progreso);
  }

  onChanges(newVAlue:number){
   // let elemHTML:any = document.getElementsByName('progreso')[0];
 //   console.log(this.textProgress.nativeElement.value);

    if (newVAlue>100) {this.progreso=100}   
    else if (newVAlue<0) {this.progreso=0}
    else {this.progreso=newVAlue};

    this.textProgress.nativeElement.value=this.progreso;
    this.textProgress.nativeElement.focus();
    this.cambiaValor.emit(this.progreso);
  }


  cambiarValor(value:number){
    
    this.progreso += value;
    this.cambiaValor.emit(this.progreso);

    if (this.progreso>100) this.progreso=100;
    if (this.progreso<0) this.progreso=0;
  }


}
