import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ReportesService {

  private baseUrl = 'http://localhost:3000/reportes';

  constructor(private http: HttpClient) {}

  generarReporteVentas(fechaInicio: string, fechaFin: string): Observable<any> {
    const url = `${this.baseUrl}/ventas?fechaInicio=${fechaInicio}&fechaFin=${fechaFin}`;
    return this.http.get(url);
  }
}
