import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntrepriseestimationComponent } from './entrepriseestimation.component';

describe('EntrepriseestimationComponent', () => {
  let component: EntrepriseestimationComponent;
  let fixture: ComponentFixture<EntrepriseestimationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntrepriseestimationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntrepriseestimationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
