import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarServicioComponent } from './registrar-servicio.component';

describe('RegistrarServicioComponent', () => {
  let component: RegistrarServicioComponent;
  let fixture: ComponentFixture<RegistrarServicioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarServicioComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarServicioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
