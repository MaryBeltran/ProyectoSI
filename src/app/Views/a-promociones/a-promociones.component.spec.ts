import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { APromocionesComponent } from './a-promociones.component';

describe('APromocionesComponent', () => {
  let component: APromocionesComponent;
  let fixture: ComponentFixture<APromocionesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ APromocionesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(APromocionesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
