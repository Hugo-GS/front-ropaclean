import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private apiUrl = 'http://127.0.0.1:3000/auth/login';

  constructor(private router: Router, private http: HttpClient) {}

  login(param1: string, password: string): Promise<boolean> {
    const loginData = { username: param1, password };
  
    return fetch(this.apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginData)
    })
      .then(response => response.json())
      .then(data => {
        if (data.user) {
          const user = data.user;
          localStorage.setItem('currentUser', JSON.stringify(user));
          console.log(user);
          return true;
        }
        return false;
      })
      .catch(error => {
        console.error('Error during login:', error);
        return false;
      });
  }
  
  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getUserRol(): string {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    console.log(user);
    let tipo_usuario: string = "";
    switch(user.id_tipousuario){
      case 1:
        tipo_usuario = "cliente";
        break;
      case 2:
        tipo_usuario = "conductor";
        break;
      case 3:
        tipo_usuario = "admin";
        break;
    }
    
    return tipo_usuario;
  }

  getUserNombreCompleto(): string | null {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user.username || null;
  }
}
