import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrudproductosComponent } from './crudproductos.component';

describe('CrudproductosComponent', () => {
  let component: CrudproductosComponent;
  let fixture: ComponentFixture<CrudproductosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrudproductosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrudproductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
