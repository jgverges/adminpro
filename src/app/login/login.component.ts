import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/service.index';
import { Usuario } from '../models/usuario.model';
// declaramos la función de iniciación que hemos creado en asstes/js/custom.js
declare function init_pluguins();

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css' ]
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;

  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit(): void {
    init_pluguins();
  }

  ingresar( forma: NgForm) {

    if ( forma.invalid ) {
      return;
    }

    let usuario = new Usuario(null, forma.value.email, forma.value.password );

    this._usuarioService.login( usuario, forma.value.recuerdame )
    .subscribe( resp =>  console.log(resp) );

    console.log(forma.value);

      // this.router.navigate(['/dashboard']);
  }
}
