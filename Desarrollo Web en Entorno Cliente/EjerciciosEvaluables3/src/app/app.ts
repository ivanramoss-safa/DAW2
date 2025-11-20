import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FechaHoraComponent} from './FechaHoraComponent/FechaHoraComponent';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, FechaHoraComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('EjerciciosEvaluables3');
}
