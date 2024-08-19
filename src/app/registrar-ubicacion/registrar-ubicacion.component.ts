import { Component, ViewChild } from '@angular/core';
import { MapViewComponent } from '../map-view/map-view.component';
import { Router } from '@angular/router';
import { FormDataRegistrarService } from '../services/form-data-registrar.service';

@Component({
  selector: 'app-registrar-ubicacion',
  standalone: true,
  imports: [MapViewComponent],
  templateUrl: './registrar-ubicacion.component.html',
  styleUrl: './registrar-ubicacion.component.css'
})
export class RegistrarUbicacionComponent {
  @ViewChild(MapViewComponent) mapView!: MapViewComponent;
  formData: any;

  constructor (private router: Router, private formDataRegistrarServive: FormDataRegistrarService) {
    this.formData = this.formDataRegistrarServive.getFormData();
  }
  volver() {
    this.router.navigate(['/registrar'], { state: { preserveData: this.formData } });
  }
  registrarUbicacion() {
    const location = this.mapView.getLocation();
    console.log('Ubicación registrada:', location);
    console.log('Datos del formulario anterior:', this.formData);
  }
  
}
