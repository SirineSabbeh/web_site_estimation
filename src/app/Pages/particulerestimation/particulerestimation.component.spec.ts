import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ParticulerestimationComponent } from './particulerestimation.component';

describe('ParticulerestimationComponent', () => {
  let component: ParticulerestimationComponent;
  let fixture: ComponentFixture<ParticulerestimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ParticulerestimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ParticulerestimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
