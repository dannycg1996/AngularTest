import { Component, ViewChild } from '@angular/core';
import { ResizedEvent } from 'angular-resize-event';
import { Chart } from 'chart.js';
import zoomPlugin from 'chartjs-plugin-zoom';
import { MenubarModule } from 'primeng/menubar';

export interface chartContainer {
  chart: Chart
}

@Component({
  selector: 'app-chart-component',
  templateUrl: './chartjs.scatterplot.component.html',
  styleUrls: ['./chartjs.scatterplot.component.css']
})


export class ScatterplotComponent {
  @ViewChild('chart') chart: chartContainer;

  constructor() {
    Chart.register(zoomPlugin);
  }

  datasets: any = {
    datasets: [{
      data: [
        {
          "x": 2,
          "y": "0.2988645804"
        },
        {
          "x": 1,
          "y": -0.3055223935
        },
        {
          "x": 5,
          "y": -0.0372828723
        },
        {
          "x": 3,
          "y": -0.5250367936
        },
        {
          "x": 8,
          "y": -0.0729558289
        },
        {
          "x": 1,
          "y": -0.5418833542
        },
        {
          "x": 3,
          "y": -0.2141589565
        },
        {
          "x": 6,
          "y": -0.3525098864
        },
        {
          "x": "0",
          "y": -0.2741039063
        },
        {
          "x": 9,
          "y": -0.2474933787
        },
        {
          "x": 9,
          "y": -0.2349083411
        },
        {
          "x": 7,
          "y": -0.1751100609
        },
        {
          "x": 8,
          "y": "0.0416000146"
        },
        {
          "x": 3,
          "y": "0.0020011557"
        },
        {
          "x": "0",
          "y": -0.4983777668
        },
        {
          "x": 1,
          "y": "0.2495868823"
        },
      ],
    }],
  };

  items = [
    {
      label: 'File',
      icon: 'pi pi-fw pi-file',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-plus',
          items: [
            {
              label: 'Bookmark',
              icon: 'pi pi-fw pi-bookmark'
            },
            {
              label: 'Video',
              icon: 'pi pi-fw pi-video'
            }
          ]
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-trash'
        },
        {
          separator: true
        },
        {
          label: 'Export',
          icon: 'pi pi-fw pi-external-link'
        }
      ]
    },
    {
      label: 'Edit',
      icon: 'pi pi-fw pi-pencil',
      items: [
        {
          label: 'Left',
          icon: 'pi pi-fw pi-align-left'
        },
        {
          label: 'Right',
          icon: 'pi pi-fw pi-align-right'
        },
        {
          label: 'Center',
          icon: 'pi pi-fw pi-align-center'
        },
        {
          label: 'Justify',
          icon: 'pi pi-fw pi-align-justify'
        }
      ]
    },
    {
      label: 'Users',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'New',
          icon: 'pi pi-fw pi-user-plus'
        },
        {
          label: 'Delete',
          icon: 'pi pi-fw pi-user-minus'
        },
        {
          label: 'Search',
          icon: 'pi pi-fw pi-users',
          items: [
            {
              label: 'Filter',
              icon: 'pi pi-fw pi-filter',
              items: [
                {
                  label: 'Print',
                  icon: 'pi pi-fw pi-print'
                }
              ]
            },
            {
              icon: 'pi pi-fw pi-bars',
              label: 'List'
            }
          ]
        }
      ]
    },
    {
      label: 'Events',
      icon: 'pi pi-fw pi-calendar',
      items: [
        {
          label: 'Edit',
          icon: 'pi pi-fw pi-pencil',
          items: [
            {
              label: 'Save',
              icon: 'pi pi-fw pi-calendar-plus'
            },
            {
              label: 'Delete',
              icon: 'pi pi-fw pi-calendar-minus'
            }
          ]
        },
        {
          label: 'Remove',
          icon: 'pi pi-fw pi-search-minus'
        }
      ]
    },
    {
      icon: 'pi pi-fw pi-search-minus'
    },
    {
      icon: 'pi pi-fw pi-search-plus'
    },
    {
      label: 'Reset'
    }
  ];

  options = {
    "maintainAspectRatio": false,
    onHover: (evt: any, activeEls: any, chart: any) => {
      console.log('evt', evt, activeEls, chart)
      if (activeEls.length === 0 || chart.getElementsAtEventForMode(evt, 'nearest', {
        intersect: true
      }, true).length === 0) {
        return;
      }
    },
    plugins: {
      // events: ['mousemove', 'mouseout', 'click', 'touchstart', 'touchmove', 'onHover'],

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

  onHover(e: any) {
    console.log('hover', e)
  }

  resized(event: ResizedEvent) { }
};
