import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MapViewComponent } from '../map-view/map-view.component';
import { Router } from '@angular/router';
import { FormDataRegistrarService } from '../services/form-data-registrar.service';
import { ModalRegistroClienteConfirmacionComponent } from '../shared/modal-registro-cliente-confirmacion/modal-registro-cliente-confirmacion.component';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-registrar-ubicacion',
  standalone: true,
  imports: [CommonModule, MapViewComponent, ModalRegistroClienteConfirmacionComponent],
  templateUrl: './registrar-ubicacion.component.html',
  styleUrls: ['./registrar-ubicacion.component.css']
})
export class RegistrarUbicacionComponent {
  @ViewChild(MapViewComponent) mapView!: MapViewComponent;
  @ViewChild(ModalRegistroClienteConfirmacionComponent) modalConfirmacion!: ModalRegistroClienteConfirmacionComponent;
  formData: any;
  isModalOpen: boolean = false;
  clienteRegistrado: boolean = false;

  constructor(private router: Router, private formDataRegistrarService: FormDataRegistrarService, private authService: AuthService) {
    this.formData = this.formDataRegistrarService.getFormData();
  }

  volver() {
    this.router.navigate(['/registrar'], { state: { preserveData: this.formData } });
  }

  registrarUbicacion() {
    const location = this.mapView.getLocation();
    console.log('Ubicación registrada:', location);
    console.log('Datos del formulario anterior:', this.formData);

    this.isModalOpen = true;
    
  }

  onCancel() {
    this.isModalOpen = false;
  }

  async onConfirm(password: string) {
    const location = this.mapView.getLocation();
    const dataRegistrarCliente = {
      nombre: this.formData.nombre,
      apellidoPaterno: this.formData.apellidoPaterno,
      apellidoMaterno: this.formData.apellidoMaterno,
      ci: this.formData.ci,
      telefono: this.formData.telefono,
      lat: location.lat,
      long: location.lng,
      password: password
    };
    // Realiza la petición para registrar al cliente
    const data: {cliente: {codCliente: number, idPersona: number, username:string}, message: string} = await this.formDataRegistrarService.postRegistrarCliente(dataRegistrarCliente);
      
    try{
      const isLoggedIn = await this.authService.login(data.cliente.username, password);
      if (isLoggedIn) {
        const rol = this.authService.getUserRol();
        this.router.navigate([`/${rol}-inicio`]);
      } else {
        
      }
    } catch (error) {
      console.error('Error during login:', error);
      
    }

    this.isModalOpen = false;
  }
  
}
