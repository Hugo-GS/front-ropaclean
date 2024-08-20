import { Component } from '@angular/core';
import { CardServicioComponent } from '../shared/card-servicio/card-servicio.component';
import { CommonModule } from '@angular/common';

interface Servicio {
  title: string;
  descripcion: string;
  imageUrl: string;
}

@Component({
  selector: 'app-servicios-disponibles',
  standalone: true,
  imports: [CommonModule, CardServicioComponent],
  templateUrl: './servicios-disponibles.component.html',
  styleUrl: './servicios-disponibles.component.css'
})
export class ServiciosDisponiblesComponent {
  servicios: Servicio[] = [
    { title: "Lavado con normal", descripcion: "Nuestro servicio de lavado normal es perfecto para el uso diario de tus prendas. Utilizamos agua y detergentes de alta calidad para asegurar una limpieza profunda y efectiva. Este método es ideal para ropa casual, ropa de cama, toallas y cualquier prenda que necesite una limpieza regular. Garantizamos que tus prendas saldrán frescas, limpias y listas para usar." , imageUrl:"assets/img/img-s1.webp"},
    { title: "Lavado en seco", descripcion: "Nuestro servicio de lavado en seco es ideal para prendas delicadas y de alta calidad que requieren un cuidado especial. Utilizamos solventes especializados en lugar de agua para limpiar profundamente tus prendas sin dañarlas. Este método es perfecto para trajes, vestidos de gala, abrigos y cualquier prenda que necesite mantener su forma y textura original. Confía en nosotros para devolverle a tus prendas su frescura y elegancia." , imageUrl:"assets/img/img-s2.jpg"},
    
  ]
}
