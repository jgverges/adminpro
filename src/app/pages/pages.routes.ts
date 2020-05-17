import { Routes, RouterModule } from '@angular/router';
// pages
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { Graficas1Component } from './graficas1/graficas1.component';
import { AccoutSettingsComponent } from './accout-settings/accout-settings.component';


const pagesRoutes: Routes= [
    {path:'', component: PagesComponent,
        children: [
            {path:'dashboard', component: DashboardComponent},
            {path:'accout-settings', component: AccoutSettingsComponent},
            {path:'progress', component: ProgressComponent},
            {path:'graficas1', component: Graficas1Component},
            {path:'', redirectTo: 'dashboard', pathMatch: 'full'}
        ]
    }
]
export const PAGES_ROUTES = RouterModule.forChild(pagesRoutes)