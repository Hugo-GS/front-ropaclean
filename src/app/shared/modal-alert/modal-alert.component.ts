import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-modal-alert',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './modal-alert.component.html',
  styleUrls: ['./modal-alert.component.css']
})
export class ModalAlertComponent {
  @Input() title: string = '';
  @Input() message: string = '';
  @Output() confirmed = new EventEmitter<void>();

  isVisible = false;

  open(title: string, message: string) {
    this.title = title;
    this.message = message;
    this.isVisible = true;
  }

  close() {
    this.isVisible = false;
  }

  confirm() {
    this.confirmed.emit();
    this.close();
  }
}
