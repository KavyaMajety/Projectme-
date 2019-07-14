import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FoodandnutritionuserComponent } from './foodandnutritionuser.component';

describe('FoodandnutritionuserComponent', () => {
  let component: FoodandnutritionuserComponent;
  let fixture: ComponentFixture<FoodandnutritionuserComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FoodandnutritionuserComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FoodandnutritionuserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
