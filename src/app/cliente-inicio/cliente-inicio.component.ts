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
  nombreCliente: string = "NombrePrueba";
  codigoCliente: string = "codigoPrueba";

  constructor(private authService: AuthService) {}
  cerrarSesion() {
    this.authService.logout();
  }
}
