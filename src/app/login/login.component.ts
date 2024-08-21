import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  param1: string = '';
  password: string = '';
  errorMessage: string = '';
  
  constructor(private router: Router, private authService: AuthService) {
    // Validamos si el usuario posee una sesion en el localstorage
    if (authService.isAuthenticated()) {
      const rol = this.authService.getUserRol();
      this.router.navigate([`/${rol}-inicio`]);
    }
  }
  
  async login() {
    try {
      const isLoggedIn = await this.authService.login(this.param1, this.password);
      
      if (isLoggedIn) {
        const rol = this.authService.getUserRol();
        this.router.navigate([`/${rol}-inicio`]);
      } else {
        this.errorMessage = 'Credenciales incorrectas.';
      }
    } catch (error) {
      console.error('Error during login:', error);
      this.errorMessage = 'Ocurrió un error durante el inicio de sesión.';
    }
  }


  navigateToRegister() {
    this.router.navigate(['/registrar']);
  }
}
