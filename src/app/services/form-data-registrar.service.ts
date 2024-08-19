import { Injectable } from '@angular/core';

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
}