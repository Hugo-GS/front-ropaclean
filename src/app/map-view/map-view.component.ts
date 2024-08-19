import { Component, ElementRef, Renderer2, AfterViewInit } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MapInfoWindow, MapMarker } from '@angular/google-maps';
import { Loader } from '@googlemaps/js-api-loader';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-map-view',
  standalone: true,
  imports: [GoogleMapsModule, MapInfoWindow, MapMarker, CommonModule],
  templateUrl: './map-view.component.html',
  styleUrls: ['./map-view.component.css']
})
export class MapViewComponent implements AfterViewInit {
  center: google.maps.LatLngLiteral = { lat: -17.783111, lng: -63.180977 }; // Coordenadas iniciales
  zoom = 10;
  selectedLocation: google.maps.LatLngLiteral = { ...this.center };
  map!: google.maps.Map;
  marker!: google.maps.Marker;

  constructor(private el: ElementRef, private renderer: Renderer2) {
  
  }

  ngAfterViewInit() {
    const mapContainer = this.el.nativeElement.querySelector('.map-container');
    if (mapContainer) {
      this.renderer.setStyle(mapContainer, 'width', '100%');
      this.renderer.setStyle(mapContainer, 'height', '500px');
    }

    // Cargar Google Maps
    const loader = new Loader({
      apiKey: 'AIzaSyA9o1cZqtsqMvtCU3Jn_klbsgrqG_mgI9M',
      version: 'weekly',
    });

    loader.load().then(() => {
      this.map = new google.maps.Map(mapContainer, {
        center: this.center,
        zoom: this.zoom,
      });

      // Manejar clics en el mapa para agregar marcadores
      this.map.addListener('click', (event: google.maps.MapMouseEvent) => {
        if (event.latLng) {
          this.moverMarker(event.latLng);
        }
      });
      
      // Agregar botón de ubicación
      const locationButton = document.createElement('button');
      locationButton.textContent = 'Marcar Ubicación Actual';
      locationButton.classList.add('custom-map-control-button');
      locationButton.style.backgroundColor = 'white';
      locationButton.style.border = '2px solid #fff';
      locationButton.style.borderRadius = '5px';
      locationButton.style.boxShadow = '0 2px 6px rgba(0, 0, 0, 0.3)';
      locationButton.style.cursor = 'pointer';
      locationButton.style.margin = '10px';
      locationButton.style.padding = '8px 12px';
      locationButton.style.fontSize = '16px';
      locationButton.style.transition = 'background-color 0.3s';
      // Manejo del hover
      locationButton.onmouseover = () => {
        locationButton.style.backgroundColor = '#f0f0f0';
      };
      locationButton.onmouseout = () => {
        locationButton.style.backgroundColor = 'white';
      };

      locationButton.addEventListener('click', () => {
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(
            (position) => {
              const pos = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);

              this.map.setCenter(pos);
              // Añadir un marcador si se desea
              /*new google.maps.Marker({
                position: pos,
                map: map,
              });*/
              this.map.setZoom(14);
              this.moverMarker(pos);
            },
            () => {
              alert('Error al obtener la ubicación.');
            }
          );
        } else {
          alert('La geolocalización no es soportada por este navegador.');
        }
      });

      // Añadir el botón al mapa
      this.map.controls[google.maps.ControlPosition.TOP_CENTER].push(locationButton);
    });
  }

  moverMarker(position: google.maps.LatLng) {
    this.selectedLocation = {
      lat: position.lat(),
      lng: position.lng()
    };
    if (!this.marker) {
      this.marker = new google.maps.Marker({
        position: this.selectedLocation,
        map: this.map,
        draggable: true
      });
    }
    this.marker.setPosition(position);
  
    console.log('Coordenadas seleccionadas:', this.selectedLocation);
  }
  
  

  getLocation(): google.maps.LatLngLiteral {
    return this.selectedLocation;
  }

}
