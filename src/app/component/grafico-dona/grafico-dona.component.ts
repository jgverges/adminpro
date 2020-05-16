import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Label, MultiDataSet } from 'ng2-charts';
import { ChartType } from 'chart.js';

@Component({
  selector: 'grafico-dona',
  templateUrl: './grafico-dona.component.html',
  styles: [
  ]
})
export class GraficoDonaComponent implements OnInit {

  @Input() doughnutChartLabels: Label[];
  @Input() doughnutChartData: MultiDataSet  ;
  @Input()doughnutChartType: ChartType;

  @Output() Hijo:EventEmitter<string>= new EventEmitter();

  graficosHijo: any = {
    'grafico1': {
      'labels': ['Con Frijoles-**hijo**', 'Con Natilla', 'Con tocino'],
      'data':  [24, 30, 46],
      'type': 'doughnut',
      'leyenda': 'HIJO::: El pan se come con'
    },
    'grafico2': {
      'labels': ['Hombres', 'Mujeres'],
      'data':  [4500, 6000],
      'type': 'doughnut',
      'leyenda': 'Entrevistados'
    },
    'grafico3': {
      'labels': ['Si', 'No'],
      'data':  [95, 5],
      'type': 'doughnut',
      'leyenda': '¿Le dan gases los frijoles?'
    },
    'grafico4': {
      'labels': ['No', 'Si'],
      'data':  [85, 15],
      'type': 'doughnut',
      'leyenda': '¿Le importa que le den gases?'
    },
  };


  constructor() { }

  ngOnInit(): void {
  }
  sendHijo(){
    this.Hijo.emit(this.graficosHijo.grafico1.leyenda  );
    console.log(this.graficosHijo.grafico1.leyenda );
  }
}
