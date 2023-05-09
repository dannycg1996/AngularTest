import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plotly-scatterplot',
  templateUrl: './plotly-scatterplot.component.html',
  styleUrls: ['./plotly-scatterplot.component.css']
})
export class PlotlyScatterplotComponent implements OnInit {
  generatedMaleDataX: Array<number> = []
  generatedMaleDataY: Array<number> = []
  generatedFemaleDataX: Array<number> = []
  generatedFemaleDataY: Array<number> = []
  constructor() { }

  ngOnInit(): void {
    for (let i = 0; i < 50000; i++) {
      const x = Number((Math.random() * 42 + 156).toFixed(2))
      const y = Number((Math.random() * 53 + 63).toFixed(2))
      // console.log('x', x, 'y', y)
      this.generatedMaleDataX.push(x)
      this.generatedMaleDataY.push(y)
    }
    // console.log('generatedMale', this.generatedMaleData)
    // console.log(this.generatedMaleData.map(arr => arr[0]))

    for (let i = 0; i < 50000; i++) {
      const x = Number((Math.random() * 37 + 144).toFixed(2));
      const y = Number((Math.random() * 63.2 + 42).toFixed(2));
      this.generatedFemaleDataX.push(x)
      this.generatedFemaleDataY.push(y)
    }

  }

  public graph = {
    data: [
      { x: this.generatedMaleDataX, y: this.generatedMaleDataY, name: 'Male', type: 'scatter', mode: 'markers', marker: { color: 'green' } },
      { x: this.generatedFemaleDataX, y: this.generatedFemaleDataY, name: 'Female', type: 'scatter', mode: 'markers', marker: { color: 'blue' } },

    ],
    layout: { width: 800, height: 700, title: 'A Fancy Plot' }
    // { x: [1, 2, 3], y: [2, 5, 3], type: 'bar' },
  };

}
