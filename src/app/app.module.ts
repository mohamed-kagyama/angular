import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import {MatIconModule} from '@angular/material/icon';
import {MatMenuModule} from '@angular/material/menu';

import { AppComponent } from './app.component';
import { HighchartsChartModule } from 'highcharts-angular';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DonutChartComponent } from './donut-chart/donut-chart.component';
import { TachesComponent } from './taches/taches.component';
import { TacheComponent } from './taches/tache/tache.component';
import { FichiersComponent } from './fichiers/fichiers.component';
import { FichierComponent } from './fichiers/fichier/fichier.component';

@NgModule({
  declarations: [
    AppComponent,
    DonutChartComponent,
    TachesComponent,
    TacheComponent,
    FichiersComponent,
    FichierComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    HighchartsChartModule,
    MatIconModule,
    MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
