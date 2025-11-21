import { Component } from '@angular/core';

@Component({
  selector: 'app-ventana-hija-component',
  imports: [],
  templateUrl: './ventana-hija-component.html',
  styleUrl: './ventana-hija-component.css',
})
export class VentanaHijaComponent {
  // Variable para guardar la referencia de la ventana abierta
  // Puede ser un objeto Window o null si no está abierta
  private ventanaRef: Window | null = null;

  // Método para abrir la ventana
  abrirVentana() {
    // Si ya hay una ventana abierta y no se ha cerrado manualmente, no abrimos otra
    if (this.ventanaRef && !this.ventanaRef.closed) {
      alert('La ventana ya está abierta.');
      return;
    }

    // window.open(url, nombre, características)
    // Dejamos la URL vacía como pide el ejercicio.
    this.ventanaRef = window.open(
      '',
      'VentanaHija',
      'width=400,height=400'
    );

    if (!this.ventanaRef) {
      alert('El navegador bloqueó la ventana emergente. Por favor permítela.');
    }
  }

  // Método para mover la ventana. Recibe X e Y.
  moverVentana(x: number, y: number) {
    // Verificamos que la ventana exista y no haya sido cerrada por el usuario
    if (this.ventanaRef && !this.ventanaRef.closed) {

      // moveBy desplaza la ventana RELATIVAMENTE a su posición actual
      this.ventanaRef.moveBy(x, y);

      // Ponemos el foco en la ventana para ver el efecto
      this.ventanaRef.focus();
    } else {
      alert('La ventana no está abierta.');
    }
  }

  // Método para cerrar
  cerrarVentana() {
    if (this.ventanaRef) {
      this.ventanaRef.close();
      this.ventanaRef = null; // Limpiamos la referencia
    }
  }
}
