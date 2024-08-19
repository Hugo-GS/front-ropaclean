import { Component, ViewChild } from '@angular/core';
import { RegistrarServicioService, Client, Service } from '../services/registrar-servicio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ModalAlertComponent } from '../shared/modal-alert/modal-alert.component';
import { ModalConfirmComponent } from '../shared/modal-confirm/modal-confirm.component';

@Component({
  selector: 'app-registrar-servicio',
  standalone: true,
  imports: [CommonModule, FormsModule, ModalAlertComponent, ModalConfirmComponent],
  templateUrl: './registrar-servicio.component.html',
  styleUrl: './registrar-servicio.component.css'
})

export class RegistrarServicioComponent {
  @ViewChild(ModalAlertComponent) modalAlert!: ModalAlertComponent;
  @ViewChild(ModalConfirmComponent) modalConfirm!: ModalConfirmComponent;

  clientCode: string = '';
  serviceCode: string = '';
  clientData: Client[] = [];
  serviceData: Service[] = [];
  carrito: any[] = [];


  constructor(private registrarServicioService: RegistrarServicioService) {
    this.cargarServicios();
  }
  showModalError(message: string) {
    this.modalAlert.open('Error', message);
  }
  showModalConfirm(message: string, onConfirm: () => void) {
    this.modalConfirm.open(message);
    this.modalConfirm.confirm.subscribe(onConfirm);
    this.modalConfirm.cancel.subscribe(() => {
      console.log('Operación cancelada');
    });
  }

  buscarCliente(clientCode: string) {
    this.registrarServicioService.buscarClientByCode(clientCode).subscribe(data => {
      this.clientData = data;
    });
  }
  cargarServicios() {
    // luego reemplazar el .service para hacer peticion al backend
    this.registrarServicioService.getServices().subscribe(data => {
      this.serviceData = data;
    });
  }
  buscarServicio(servicioCodigo: string) {

  }
  agregarAlCarrito(service: any) {
    this.carrito.push(service);
  }
  showModalSucces(message: string) {
    this.modalAlert.open('Sistema', message);
  }
  registrarVenta() {
    if (this.carrito.length === 0) {
      this.showModalError("No hay servicios agregados");
      return;
    }

    this.showModalConfirm('¿Estás seguro de registrar la venta?', () => {
      console.log('Venta registrada:', this.carrito);
      // lógica de registro de la venta
      this.showModalSucces('Servicio realizado con exito');
    });
  }


  quitarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
  }
}
