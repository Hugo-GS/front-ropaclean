import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card-servicio',
  standalone: true,
  imports: [],
  templateUrl: './card-servicio.component.html',
  styleUrl: './card-servicio.component.css'
})
export class CardServicioComponent {
  @Input() title: string = '';
  @Input() description: string = '';
  @Input() imageUrl: string = '';

  
}
