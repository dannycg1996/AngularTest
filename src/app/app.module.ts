import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'primeng/chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScatterplotComponent } from './chart-component/scatterplot.component';
import { HomeComponent } from './tab-component/home.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { AngularResizeEventModule } from 'angular-resize-event';
import { HAMMER_GESTURE_CONFIG, HammerModule } from '@angular/platform-browser';
import 'hammerjs';
import 'chartjs-plugin-zoom';





@NgModule({
  declarations: [
    AppComponent,
    ScatterplotComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    TabMenuModule,
    AngularResizeEventModule,
    HammerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
