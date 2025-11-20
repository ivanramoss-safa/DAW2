import { Component, signal } from '@angular/core';
import { FechaHoraComponent } from "./fecha-hora-component/fecha-hora-component";

@Component({
  selector: 'app-root',
  imports: [FechaHoraComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba');
}
