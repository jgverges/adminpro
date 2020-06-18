import { Injectable } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

import { map } from 'rxjs/operators';

@Injectable({   providedIn: 'root' })
export class UsuarioService {

  constructor(
    public http: HttpClient
  ) {
    console.log("Servicio de usuario listo");
   }

   login( usuario: Usuario, recordar: boolean=false ) {

    let url = URL_SERVICIOS + "/login";
    return this.http.post( url, usuario).pipe(
        map( (resp: any) => {

        localStorage.setItem('id', resp.id);
        localStorage.setItem('token', resp.token);
        localStorage.setItem('usuario',JSON.stringify(resp.usuario));

          return true;
        })
    );

   }


   crearUsuario( usuario:Usuario ){

    let url= URL_SERVICIOS + '/usuario';

    // map ???
 //    return this.http.get<Model>( url, { params } )
 //             .pipe(
 //                map( resp => resp)
 //              );
    //
    return this.http.post(url, usuario).pipe
      ( map( (resp:any) => {
        alert('Usuario creado : '+ usuario.email);
        return resp.usuario;
      }) );
    
/* Original falla   
 .map( (resp:any) => {

               alert('Usuario creado');
              return resp.usuario;
            });
 */
   }
}
