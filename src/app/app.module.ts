import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ChartModule } from 'primeng/chart';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScatterplotComponent } from './components/chartjs-scatterplot/chartjs.scatterplot.component';
import { HomeComponent } from './components/tab-component/home.component';
import { TabMenuModule } from 'primeng/tabmenu';
import { AngularResizeEventModule } from 'angular-resize-event';
import { AngularSplitModule } from 'angular-split';
import { MenubarModule } from 'primeng/menubar';
import { NgxEchartsModule } from 'ngx-echarts';

import * as PlotlyJS from 'plotly.js-dist-min';
import { PlotlyModule } from 'angular-plotly.js';
PlotlyModule.plotlyjs = PlotlyJS;
import 'hammerjs';
import 'chartjs-plugin-zoom';
import { EchartsScatterplotComponent } from './components/echarts-scatterplot/echarts-scatterplot.component';
import { PlotlyScatterplotComponent } from './components/plotly-scatterplot/plotly-scatterplot.component';

@NgModule({
  declarations: [
    AppComponent,
    ScatterplotComponent,
    HomeComponent,
    EchartsScatterplotComponent,
    PlotlyScatterplotComponent
  ],
  imports: [
    NgxEchartsModule.forRoot({
      echarts: () => import('echarts')
    }),
    PlotlyModule,
    BrowserModule,
    AppRoutingModule,
    ChartModule,
    TabMenuModule,
    AngularResizeEventModule,
    AngularSplitModule,
    MenubarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
