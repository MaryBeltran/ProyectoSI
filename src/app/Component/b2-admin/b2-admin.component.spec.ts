import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B2AdminComponent } from './b2-admin.component';

describe('B2AdminComponent', () => {
  let component: B2AdminComponent;
  let fixture: ComponentFixture<B2AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B2AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B2AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
