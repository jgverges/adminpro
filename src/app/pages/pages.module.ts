import { NgModule } from "@angular/core";
// pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
// shared
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';
//
import { FormsModule } from '@angular/forms'
//temporal
import { IncrementadorComponent } from '../component/incrementador/incrementador.component';
// charts
import { ChartsModule } from 'ng2-charts';
import { GraficoDonaComponent } from '../component/grafico-dona/grafico-dona.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';
import { PromesasComponent } from './promesas/promesas.component';
import { RxjsComponent } from './rxjs/rxjs.component';

@NgModule({
    declarations:[
        DashboardComponent,
        Graficas1Component,
        GraficoDonaComponent,
        IncrementadorComponent,
        PagesComponent,
        ProgressComponent,
        AccoutSettingsComponent,
        PromesasComponent,
        RxjsComponent
       
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent   
    ],
    imports: [
        ChartsModule,
        SharedModule,
        PAGES_ROUTES,
        FormsModule
    ]
})
export class PagesModule {}