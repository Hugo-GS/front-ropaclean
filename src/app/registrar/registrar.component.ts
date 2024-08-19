import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { FormDataRegistrarService } from '../services/form-data-registrar.service';

@Component({
  selector: 'app-registrar',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './registrar.component.html',
  styleUrl: './registrar.component.css'
})
export class RegistrarComponent {
  // Atributos del componente para el formulario
  nombre: string = '';
  apellidoPaterno: string = '';
  apellidoMaterno: string = '';
  ci: string = '';
  telefono: string = '';


  constructor(private router: Router, private formDataRegistrarService: FormDataRegistrarService) {}

  ngOnInit(): void {
    const navigation = this.router.getCurrentNavigation();
    // Verifica si hay estado y asigna los datos
    if (navigation?.extras.state) {
      const datos = navigation.extras.state['preserveData'];
      if (datos) {
        this.nombre = datos.nombre || '';
        this.apellidoPaterno = datos.apellidoPaterno || '';
        this.apellidoMaterno = datos.apellidoMaterno || '';
        this.ci = datos.ci || '';
        this.telefono = datos.telefono || '';
      }
    } else {
      // Cargar datos desde el servicio si no se pasa estado
      const datos = this.formDataRegistrarService.getFormData();
      this.nombre = datos.nombre || '';
      this.apellidoPaterno = datos.apellidoPaterno || '';
      this.apellidoMaterno = datos.apellidoMaterno || '';
      this.ci = datos.ci || '';
      this.telefono = datos.telefono || '';
    }
  }

  volverIngreso() {
    this.router.navigate(['/login']);
  }

  goRegistrarUbicacion() {
    // Validación adicional no es necesaria ya que el botón se desactiva si el formulario no es válido
    if (this.nombre && this.apellidoPaterno && this.apellidoMaterno && this.ci && this.telefono) {
      this.formDataRegistrarService.setFormData({
        nombre: this.nombre,
        apellidoPaterno: this.apellidoPaterno,
        apellidoMaterno: this.apellidoMaterno,
        ci: this.ci,
        telefono: this.telefono,
      });
  
      this.router.navigate(['/registrar-ubicacion']);
    } else {
      //alert('Por favor, completa todos los campos antes de continuar.'); 
    }
  }
}
