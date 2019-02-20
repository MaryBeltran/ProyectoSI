import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ARecomendadosComponent } from './a-recomendados.component';

describe('ARecomendadosComponent', () => {
  let component: ARecomendadosComponent;
  let fixture: ComponentFixture<ARecomendadosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ARecomendadosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ARecomendadosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
