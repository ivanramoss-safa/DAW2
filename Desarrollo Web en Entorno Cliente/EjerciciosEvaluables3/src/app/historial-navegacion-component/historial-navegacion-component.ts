import { Component } from '@angular/core';
import { Location} from '@angular/common';

@Component({
  selector: 'app-historial-navegacion-component',
  standalone: true,
  imports: [],
  templateUrl: './historial-navegacion-component.html',
  styleUrl: './historial-navegacion-component.css',
})
export class HistorialNavegacionComponent {
  // Inyectamos el servicio en el constructor
  constructor(private location: Location) {}

  // Método para ir atrás
  irAtras(): void {
    this.location.back();
  }

  // Método para ir adelante
  irAdelante(): void {
    this.location.forward();
  }

  // Método para recargar la página
  recargar(): void {
    // Para recargar usamos el objeto nativo window, es lo más directo
    window.location.reload();
  }
}
