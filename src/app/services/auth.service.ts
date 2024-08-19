import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  private users = [
    { username: 'cliente1', password: 'password1', role: 'cliente', telefono: '1111111' },
    { username: 'conductor1', password: 'password2', role: 'conductor', telefono: '2222222' },
    { username: 'admin1', password: 'password3', role: 'admin', telefono: '3333333' },
    { username: 'encargado1', password: 'password4', role: 'encargado', telefono: '4444444' },
  ];

  constructor(private router: Router) {}

  login(param1: string, password: string): boolean {
    const user = this.users.find(u => (u.username === param1 || u.telefono === param1) && u.password === password);
    if (user) {
      localStorage.setItem('currentUser', JSON.stringify(user));
      return true;
    }
    return false;
  }

  logout() {
    localStorage.removeItem('currentUser');
    this.router.navigate(['/login']);
  }

  isAuthenticated(): boolean {
    return localStorage.getItem('currentUser') !== null;
  }

  getUserRol(): string | null {
    const user = JSON.parse(localStorage.getItem('currentUser') || '{}');
    return user.role || null;
  }
}
