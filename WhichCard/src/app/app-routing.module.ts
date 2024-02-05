
import { NgModule } from '@angular/core';
import { PreloadAllModules, Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { SelectionComponent } from './selection/selection.component';

export const routes: Routes = [
    { path: '', pathMatch: 'full', redirectTo: 'home', },
    { path: 'selection', component: SelectionComponent },
    { path: 'home', component: HomeComponent },
];

export class AppRoudingModule{}
