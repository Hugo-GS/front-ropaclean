import { Component, Output, EventEmitter, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-modal-registro-cliente-confirmacion',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './modal-registro-cliente-confirmacion.component.html',
  styleUrls: ['./modal-registro-cliente-confirmacion.component.css']
})
export class ModalRegistroClienteConfirmacionComponent {
  password: string = '';
  isOpen: boolean = false;
  @Input() nombreUsuarioFinal: string = '';
  @Output() onConfirm = new EventEmitter<string>();
  @Output() onCancel = new EventEmitter<void>();

  confirmar() {
    this.onConfirm.emit(this.password);
  }
  close() {
    this.isOpen = false;
  }
  cancelar() {
    this.onCancel.emit(); 
  }
}
