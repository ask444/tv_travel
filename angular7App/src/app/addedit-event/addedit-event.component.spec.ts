import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddeditEventComponent } from './addedit-event.component';

describe('AddeditEventComponent', () => {
  let component: AddeditEventComponent;
  let fixture: ComponentFixture<AddeditEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AddeditEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AddeditEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
