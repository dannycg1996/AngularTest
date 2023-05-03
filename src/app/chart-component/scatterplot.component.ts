import { Component, ViewChild } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';

export interface chartContainer {
  chart: Chart
}

@Component({
  selector: 'app-chart-component',
  templateUrl: './scatterplot.component.html',
  styleUrls: ['./scatterplot.component.css']
})


export class ScatterplotComponent {
  @ViewChild('chart') chart: chartContainer;

  constructor() {
    Chart.register(zoomPlugin);
  }

  datasets: any = {
    datasets: [{
      data: [
        { x: 10, y: 14 },
        { x: 25, y: 35 },
        { x: 21, y: 20 },
        { x: 35, y: 28 },
        { x: 15, y: 10 },
        { x: 19, y: 30 },
      ],
    }],
  };

  options = {
    "maintainAspectRatio": false,
    plugins: {

      zoom: {
        pan: {
          enabled: true,
          mode: 'x'
        },
        zoom: {
          wheel: {
            enabled: true,
          },
          pinch: {
            enabled: true
          },
          mode: 'xy',
        }
      },
    }
  }

  resized(event: ResizedEvent) { }
};
