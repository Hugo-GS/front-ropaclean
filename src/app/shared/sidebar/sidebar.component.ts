import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { Router, RouterLink } from '@angular/router';

interface MenuItem {
  title: string;
  icon: string;
  submenu?: MenuItem[];
  path: string;
}

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.css'
})
export class SidebarComponent {
  @Input() title: string = "";
  @Input() menuItems: MenuItem[] = [];

  constructor(private authService: AuthService, private router: Router) {}

  cerrarSesion() {
    this.authService.logout();
  }
}
