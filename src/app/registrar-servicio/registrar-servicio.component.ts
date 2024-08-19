import { Component } from '@angular/core';
import { RegistrarServicioService, Client, Service } from '../services/registrar-servicio.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-registrar-servicio',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar-servicio.component.html',
  styleUrl: './registrar-servicio.component.css'
})

export class RegistrarServicioComponent {
  clientCode: string = '';
  serviceCode: string = '';
  clientData: Client[] = [];
  serviceData: Service[] = [];
  carrito: any[] = [];
  constructor(private registrarServicioService: RegistrarServicioService) {
    this.cargarServicios();
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

registrarVenta() {
    // Lógica para registrar la venta
    console.log('Venta registrada:', this.carrito);
}

quitarDelCarrito(index: number) {
  this.carrito.splice(index, 1);
}
}
