import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UnitItemListComponent } from './unit-item-list.component';

describe('UnitItemListComponent', () => {
  let component: UnitItemListComponent;
  let fixture: ComponentFixture<UnitItemListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UnitItemListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UnitItemListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
