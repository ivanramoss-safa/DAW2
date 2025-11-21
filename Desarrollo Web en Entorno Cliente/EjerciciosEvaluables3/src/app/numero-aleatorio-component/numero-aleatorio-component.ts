import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-numero-aleatorio-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './numero-aleatorio-component.html',
  styleUrl: './numero-aleatorio-component.css',
})
export class NumeroAleatorioComponent {
  // Variable para indicar la cantidad de números a generar (por defecto 1)
  cantidad: number = 1;

  // Array para guardar la lista de números generados
  listaNumeros: number[] = [];

  generarNumeros() {
    // 1. Limpiamos la lista anterior
    this.listaNumeros = [];

    // 2. Creamos un bucle que se repita "cantidad" veces
    for (let i = 0; i < this.cantidad; i++) {
      const numero = this.generarAleatorio(1, 100);
      this.listaNumeros.push(numero);
    }
  }

  // Función auxiliar para la fórmula matemática
  private generarAleatorio(min: number, max: number): number {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
}
