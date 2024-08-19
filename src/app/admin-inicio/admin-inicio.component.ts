import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { SidebarComponent } from '../shared/sidebar/sidebar.component';

interface MenuItem {
  title: string;
  icon: string;
  submenu?: MenuItem[];
  path: string;
}

@Component({
  selector: 'app-admin-inicio',
  standalone: true,
  imports: [SidebarComponent, RouterModule],
  templateUrl: './admin-inicio.component.html',
  styleUrl: './admin-inicio.component.css'
})
export class AdminInicioComponent {
  sidebarTitle = 'Sistema RopaClean';
  menuItems: MenuItem[] = [
    { title: 'Inicio', icon: '🏠', path: 'wad' },
    {
      title: 'Servicios ',
      icon: '📑',
      submenu: [
        { title: 'Vender servicio', icon: '', path: 'registrar-servicio' },
        { title: 'Administrar servicios', icon: '', path: '' }
      ],
      path: ''
    },
    {
      title: 'Gestor recursos ',
      icon: '👥',
      submenu: [
        { title: 'Administrar motocicleas', icon: '🏍️', path: '' },
        { title: 'Administrar conductores', icon: '👤', path: '' }
      ],
      path: ''
    },
    {
      title: 'Reportes ',
      icon: '📊',
      submenu: [
        { title: 'Reportes de ventas', icon: '', path: '' },
        { title: 'Reportes de entregas', icon: '', path: '' }
      ], path: ''
    },
  ];

}
