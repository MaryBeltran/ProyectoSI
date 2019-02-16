import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { B1AdminComponent } from './b1-admin.component';

describe('B1AdminComponent', () => {
  let component: B1AdminComponent;
  let fixture: ComponentFixture<B1AdminComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ B1AdminComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(B1AdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
