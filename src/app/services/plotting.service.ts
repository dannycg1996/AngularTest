import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PlottingService {

  constructor() { }

  generateFakeFemaleData(n: number) {
    const arr: Array<Array<number>> = [];
    for (let i = 0; i < n; i++) {
      const x = Number((Math.random() * 37 + 144).toFixed(2));
      const y = Number((Math.random() * 63.2 + 42).toFixed(2));
      arr.push([x, y]);
    }
    return arr;
  }

  generateFakeMaleData(n: number) {
    const arr: Array<Array<number>> = [];
    for (let i = 0; i < 10000; i++) {
      const x = Number((Math.random() * 42 + 156).toFixed(2))
      const y = Number((Math.random() * 53 + 63).toFixed(2))
      arr.push([x, y])
    }
    return arr;
  }
}
