import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: [
  ]
})
export class BreadcrumbsComponent implements OnInit {

  titulo:string;

  constructor(  private router:Router,
                private title:Title,
                private meta:Meta) {

    this.getDataRoute().subscribe ( data => {
      console.log(data);
    this.titulo = data.titulo;
    this.title.setTitle(data.titulo);

    const metaTag:MetaDefinition = {
      name:'description que pongo yooo',
      content: this.titulo
    };
    this.meta.updateTag(metaTag);
  })

   }

  ngOnInit(): void {
  }
  getDataRoute() {
   return  this.router.events.pipe(
      filter( evento => evento instanceof ActivationEnd),
      filter( (evento:ActivationEnd)=> evento.snapshot.routeConfig.children ==null),
      map ( (evento:ActivationEnd) => evento.snapshot.data)
    )

  }

}
