import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodandnutritionComponent } from './foodandnutrition.component';

describe('FoodandnutritionComponent', () => {
  let component: FoodandnutritionComponent;
  let fixture: ComponentFixture<FoodandnutritionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodandnutritionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodandnutritionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
