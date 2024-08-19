import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EncargadoInicioComponent } from './encargado-inicio.component';

describe('EncargadoInicioComponent', () => {
  let component: EncargadoInicioComponent;
  let fixture: ComponentFixture<EncargadoInicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EncargadoInicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EncargadoInicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
