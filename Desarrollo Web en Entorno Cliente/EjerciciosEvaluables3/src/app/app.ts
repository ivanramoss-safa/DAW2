import { Component, signal } from '@angular/core';
import { FechaHoraComponent } from "./fecha-hora-component/fecha-hora-component";
import {NumeroAleatorioComponent} from './numero-aleatorio-component/numero-aleatorio-component';
import {HistorialNavegacionComponent} from './historial-navegacion-component/historial-navegacion-component';
import {VentanaHijaComponent} from './ventana-hija-component/ventana-hija-component';
import {CookiesUsuarioComponent} from './cookies-usuario-component/cookies-usuario-component';

@Component({
  selector: 'app-root',
  imports: [FechaHoraComponent, NumeroAleatorioComponent, HistorialNavegacionComponent, VentanaHijaComponent, CookiesUsuarioComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('prueba');
}
