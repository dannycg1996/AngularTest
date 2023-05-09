import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlotlyScatterplotComponent } from './plotly-scatterplot.component';

describe('PlotlyScatterplotComponent', () => {
  let component: PlotlyScatterplotComponent;
  let fixture: ComponentFixture<PlotlyScatterplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PlotlyScatterplotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PlotlyScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
