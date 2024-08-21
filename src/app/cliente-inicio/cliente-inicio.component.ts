import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../services/auth.service';


@Component({
  selector: 'app-cliente-inicio',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './cliente-inicio.component.html',
  styleUrl: './cliente-inicio.component.css'
})
export class ClienteInicioComponent {
  nombreCliente: string | null = "NombrePrueba";
  codigoCliente: string = "codigoPrueba";

  constructor(private authService: AuthService) {
    this.nombreCliente = this.authService.getUserNombreCompleto();
    this.getCodCliente();
  }
  cerrarSesion() {
    this.authService.logout();
  }
  async getCodCliente() {
    const url = `http://localhost:3000/clientes/nombre/${this.nombreCliente}`;
    
    try {
      const response = await fetch(url);
      
      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }
      
      const data = await response.json();
      this.codigoCliente = data.cliente.cod_cliente;
    } catch (error) {
      console.error('Error al obtener el código del cliente:', error);
    }
  }

}
