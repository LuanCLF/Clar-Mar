import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListJewelryComponent } from './list-jewelry.component';

describe('ListJewelryComponent', () => {
  let component: ListJewelryComponent;
  let fixture: ComponentFixture<ListJewelryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListJewelryComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListJewelryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
