import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EchartsScatterplotComponent } from './echarts-scatterplot.component';

describe('EchartsScatterplotComponent', () => {
  let component: EchartsScatterplotComponent;
  let fixture: ComponentFixture<EchartsScatterplotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EchartsScatterplotComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EchartsScatterplotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
