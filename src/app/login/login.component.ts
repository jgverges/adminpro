import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

// declaramos la función de iniciación que hemos creado en asstes/js/custom.js
declare function init_pluguins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent implements OnInit {

  constructor( public router:Router) { }

  ngOnInit(): void {
    init_pluguins();
  }
ingresar() {

   this.router.navigate(['/dashboard']);
}
}
