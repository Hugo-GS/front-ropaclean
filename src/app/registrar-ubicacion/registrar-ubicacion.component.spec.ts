import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarUbicacionComponent } from './registrar-ubicacion.component';

describe('RegistrarUbicacionComponent', () => {
  let component: RegistrarUbicacionComponent;
  let fixture: ComponentFixture<RegistrarUbicacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistrarUbicacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RegistrarUbicacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
