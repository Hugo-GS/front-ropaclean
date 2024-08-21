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
  clientData: Client = {nombre:"", apellido_paterno:"", apellido_materno:"", cod_cliente:0, telefono: "", ci:"", lat:0, lng:0};
  serviceData: Service[] = [];
  carrito: any[] = [];
  ubicacionURLMaps = '';
  servicioFiltrado: Service[] = [];
  allServices: any[] = [];

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

  async buscarCliente(clientCode: string) {
    try {
      
      if(!clientCode || clientCode==""){
        this.showModalSucces('Debe introducir un código cliente');
        return;
      }
      this.clientData = await this.registrarServicioService.buscarClientByCode(clientCode);
      this.ubicacionURLMaps = `https://www.google.com/maps/search/${this.clientData.lat },+${this.clientData.lng}?coh=219816&entry=tts&g_ep=EgoyMDI0MDgxOS4wKgBIAVAD`;
      
      if(this.clientData.nombre==null || typeof this.clientData.nombre == 'undefined') {
        this.showModalSucces('Cliente no existente');
      }
      console.log(this.clientData);
    } catch (error) {
      console.error('Cliente no existente');
    }
  }

  async cargarServicios() {
    try{
      this.allServices = await this.registrarServicioService.getServices();
      this.serviceData = this.allServices;
    }catch(error){
      console.error('Error no se puedieron cargar los servicios');
     this.showModalSucces('Error no se puedieron cargar los servicios');
    }
  }


  agregarAlCarrito(service: any) {
    const existencia = this.carrito.some(item => item.id === service.id);
    if (!existencia) {
      this.carrito.push(service);
    } else {
      this.showModalSucces('El servicio ya está en el carrito.')
    }
  }
  showModalSucces(message: string) {
    this.modalAlert.open('Sistema', message);
  }

  registrarVenta() {
    if (this.carrito.length === 0) {
      this.showModalError("No hay servicios agregados");
      return;
    }
    
    if(this.clientData.nombre==null || typeof this.clientData.nombre == 'undefined' || this.clientData.nombre == ''){
      this.showModalError("No hay un cliente cargado");
      return;
    }

    this.showModalConfirm('¿Estás seguro de registrar la venta?', () => {
      const dataRegistrarServicio = {
        codCliente: this.clientData.cod_cliente,
        servicios: this.carrito.map(servicio => ({idServicio: servicio.id, cantidad: 1}) )
      };
      
      this.registrarServicioService.postRegistrarServicio(dataRegistrarServicio);
      this.showModalSucces('Servicio realizado con exito');
      
      location.reload();
    });
  }

  filtrarServicios() {
    this.serviceData = this.allServices.filter(service =>
      service.id.toString().includes(this.serviceCode) || 
      service.nombre.toLowerCase().includes(this.serviceCode.toLowerCase())
    );
  }

  quitarDelCarrito(index: number) {
    this.carrito.splice(index, 1);
  }
}
