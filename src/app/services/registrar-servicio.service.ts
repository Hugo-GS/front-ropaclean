import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';


export interface Client {
  cod_cliente: number;
  nombre: string;
  apellido_paterno: string;
  apellido_materno: string;
  telefono: string;
  lat: number;
  lng: number;
  ci: string;
}

export interface Service {
  id: number;
  nombre: string;
  valor: number;
}

@Injectable({
  providedIn: 'root',
})
export class RegistrarServicioService {
  constructor() {}

  buscarClientByCode(codigoCliente: string): Promise<Client> {
    const urlRequest = `http://localhost:3000/clientes/${codigoCliente}`;

    return fetch(urlRequest, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          if ('cliente' in data) {
            return data.cliente;
          } else {
            return { nombre: null, apellido_paterno: null };
          }
        } else {
          return { nombre: null, apellido_paterno: null };
        }
      });
  }

  getServices(): Promise<Service[]> {
    const urlRequest = 'http://localhost:3000/servicios';
    return fetch(urlRequest, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    })
      .then((response) => response.json())
      .then((data) => {
        if (data) {
          return data;
        } else {
          return {};
        }
      });
  }

  postRegistrarServicio(dataRegistrarServicio: any
) {
    const urlRequest = 'http://localhost:3000/ventas/registrar';
    return fetch(urlRequest, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataRegistrarServicio),
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });
  }
}
