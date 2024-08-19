import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface Client {
  code: string;
  name: string;
  tel: string;
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
    { code: 'C001', name: 'Juan Pérez', tel: '1234567' },
    { code: 'C002', name: 'Ana López', tel: '7654321' },
    { code: 'C003', name: 'Luis García', tel: '7531246' }
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