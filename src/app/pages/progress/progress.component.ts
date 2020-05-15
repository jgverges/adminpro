import { Component, OnInit } from '@angular/core';
import { ThrowStmt } from '@angular/compiler';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: [
  ]
})
export class ProgressComponent implements OnInit {

  progreso1: number =75;
  progreso2:number = 25;
   
  constructor() { }

  ngOnInit(): void {
  }
  asignaProgreso1(event:number) {
    this.progreso1 =event;
  }
}
