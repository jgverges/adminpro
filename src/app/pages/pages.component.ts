import { Component, OnInit } from '@angular/core';


declare function init_pluguins();
 
@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    init_pluguins();
  }

}
