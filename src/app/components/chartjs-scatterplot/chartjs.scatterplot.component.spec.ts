import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ScatterplotComponent } from './chartjs.scatterplot.component';

describe('ChartComponentComponent', () => {
  let component: ScatterplotComponent;
  let fixture: ComponentFixture<ScatterplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ScatterplotComponent]
    })
      .compileComponents();

    fixture = TestBed.createComponent(ScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
