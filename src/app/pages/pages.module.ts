import { NgModule } from "@angular/core";
// pages
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { PagesComponent } from './pages.component';
// shared
import { SharedModule } from '../shared/shared.module';
import { PAGES_ROUTES } from './pages.routes';


@NgModule({
    declarations:[
        DashboardComponent,
        Graficas1Component,
        PagesComponent,
        ProgressComponent   
    ],
    exports: [
        DashboardComponent,
        Graficas1Component,
        ProgressComponent   
    ],
    imports: [
        SharedModule,
        PAGES_ROUTES

    ]
})
export class PagesModule {}