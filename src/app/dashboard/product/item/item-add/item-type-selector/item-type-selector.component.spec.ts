import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemTypeSelectorComponent } from './item-type-selector.component';

describe('ItemTypeSelectorComponent', () => {
  let component: ItemTypeSelectorComponent;
  let fixture: ComponentFixture<ItemTypeSelectorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemTypeSelectorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemTypeSelectorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
