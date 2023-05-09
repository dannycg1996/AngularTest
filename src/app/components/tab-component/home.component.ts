import { Component, ViewChild } from '@angular/core';
import { MenuItem } from 'primeng/api/menuitem';
import { ResizedEvent } from 'angular-resize-event';
import { ScatterplotComponent } from '../chartjs-scatterplot/chartjs.scatterplot.component';


@Component({
  selector: 'app-tab-component',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @ViewChild('scatterPlot') scatterPlot: ScatterplotComponent;
  @ViewChild('chartContainer') chartContainer: any;
  items: MenuItem[];

  activeItem: MenuItem;

  ngOnInit() {
    this.items = [
      { label: 'chartJS', icon: 'pi pi-fw  pi-home' },
      { label: 'ECharts Scatter', icon: 'pi pi-fw pi-calendar' },
      { label: 'Plotly Scatter', icon: 'pi pi-fw pi-pencil' },
      { label: 'Documentation', icon: 'pi pi-fw pi-file' },
      { label: 'Settings', icon: 'pi pi-fw pi-cog' }
    ];

    this.activeItem = this.items[0];

  }

  onActiveItemChange(event: any) {
    this.activeItem = event;
  }

  onResized(event: ResizedEvent) {
  }
}
