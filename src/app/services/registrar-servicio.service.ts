import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Client {
  code: string;
  name: string;
  email: string;
}

export interface Service {
  code: string;
  description: string;
  price: number;
}

@Injectable({
  providedIn: 'root'
})
export class RegistrarServicioService {
  private clients: Client[] = [
    { code: 'C001', name: 'Juan Pérez', email: 'juan@example.com' },
    { code: 'C002', name: 'Ana López', email: 'ana@example.com' },
    { code: 'C003', name: 'Luis García', email: 'luis@example.com' }
  ];

  private services: Service[] = [
    { code: 'S001', description: 'Servicio A', price: 100 },
    { code: 'S002', description: 'Servicio B', price: 200 },
    { code: 'S003', description: 'Servicio C', price: 150 }
  ];

  constructor() {}

  buscarClientByCode(codigoCliente: string): Observable<Client[]> {
    const result = this.clients.filter(client => client.code === codigoCliente);
    return of(result); // Devuelve un observable
  }

  getServices(): Observable<Service[]> {
    return of(this.services); // Devuelve todos los servicios como un observable
  }
}