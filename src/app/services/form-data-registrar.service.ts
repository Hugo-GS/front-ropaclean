import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

export interface FormDataRegistrarCliente {
  nombre: string;
  apellidoPaterno: string;
  apellidoMaterno: string;
  ci: string;
  telefono: string;
  long: number;
  lat: number;
}

@Injectable({
  providedIn: 'root'
})
export class FormDataRegistrarService {

  private formDataRegistrarCliente: FormDataRegistrarCliente = { 
    nombre: '', apellidoPaterno: '', apellidoMaterno: '', ci: '', telefono: '', long: 0, lat: 0 };

  setFormData(data: any) {
    this.formDataRegistrarCliente = { ...this.formDataRegistrarCliente, ...data };
  }

  getFormData() {
    return this.formDataRegistrarCliente;
  }

  clearFormData() {
    this.formDataRegistrarCliente = { 
      nombre: '', apellidoPaterno: '', apellidoMaterno: '', ci: '', telefono: '', long: 0, lat: 0 };
  }
  
  postRegistrarCliente(dataRegistrarCliente: any
  ) {
    const urlRequest = "http://localhost:3000/clientes/registrar";
      return fetch(urlRequest, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataRegistrarCliente),
      })
        .then((response) => response.json())
        .then((data) => {
          return data;
        });
    }
}