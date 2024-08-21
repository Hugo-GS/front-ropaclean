import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalRegistroClienteConfirmacionComponent } from './modal-registro-cliente-confirmacion.component';

describe('ModalRegistroClienteConfirmacionComponent', () => {
  let component: ModalRegistroClienteConfirmacionComponent;
  let fixture: ComponentFixture<ModalRegistroClienteConfirmacionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ModalRegistroClienteConfirmacionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ModalRegistroClienteConfirmacionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
