import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReportesService } from '../services/reportes.service';
import { Workbook } from 'exceljs';
import * as FileSaver from 'file-saver';

@Component({
  selector: 'app-reportes',
  standalone: true,
  templateUrl: './reportes.component.html',
  imports: [CommonModule, FormsModule],
  styleUrls: ['./reportes.component.css']
})
export class ReportesComponent {
  reportData: any[] = []; 

  parametros = {
    fechaInicio: '',
    fechaFin: '',
  };

  reporte: any;

  constructor(private reportesService: ReportesService) {}

  generarReporte() {
    this.reportesService.generarReporteVentas(this.parametros.fechaInicio, this.parametros.fechaFin)
      .subscribe({
        next: (data) => {
          this.reporte = data;
          this.reportData = data;
          console.log('Reporte de ventas:', data);
        },
        error: (error) => {
          console.error('Error al generar el reporte:', error);
        }
      });
  }


  exportToExcel() {
    const workbook = new Workbook();
    const worksheet = workbook.addWorksheet('Reporte de Ventas');

    worksheet.columns = [
      { header: 'Fecha', key: 'fecha', width: 15 },
      { header: 'Ingresos Totales', key: 'ingresos_totales', width: 20 },
      { header: 'Total Ventas', key: 'total_ventas', width: 15 },
    ];

    this.reportData.forEach((item) => {
      worksheet.addRow({
        fecha: new Date(item.fecha).toLocaleDateString(),
        ingresos_totales: item.ingresos_totales,
        total_ventas: item.total_ventas,
      });
    });

    workbook.xlsx.writeBuffer().then((data) => {
      const blob = new Blob([data], {
        type:
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
      });
      FileSaver.saveAs(blob, 'Reporte_de_Ventas.xlsx');
    });
  }

}
