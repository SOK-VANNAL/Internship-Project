import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';
import { ViewModalComponent } from './view-modal.component';

describe('ViewModalComponent', () => {
  let component: ViewModalComponent;
  let fixture: ComponentFixture<ViewModalComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewModalComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ViewModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
