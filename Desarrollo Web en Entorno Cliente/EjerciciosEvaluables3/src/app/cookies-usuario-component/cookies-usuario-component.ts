import {Component, OnInit} from '@angular/core';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-cookies-usuario-component',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cookies-usuario-component.html',
  styleUrl: './cookies-usuario-component.css',
})
export class CookiesUsuarioComponent implements OnInit {
  // Variable para almacenar el nombre recuperado
  nombreUsuario: string | null = null;

  // Variable para el input del formulario
  nuevoNombre: string = '';

  // Nombre clave de la cookie
  private readonly COOKIE_KEY = 'nombre_usuario_angular';

  ngOnInit(): void {
    // Al cargar el componente, intentamos leer la cookie
    this.leerCookie();
  }

  // 1. Guardar Cookie (Duración 1 día)
  guardarNombre() {
    if (this.nuevoNombre.trim() === '') return;

    const d = new Date();
    // Sumamos 1 día (24 horas * 60 min * 60 seg * 1000 ms)
    d.setTime(d.getTime() + (1 * 24 * 60 * 60 * 1000));

    // Formato obligatorio: expires=FECHA_UTC
    const expires = "expires=" + d.toUTCString();

    // Escribimos la cookie en el navegador
    // 'path=/' asegura que la cookie esté disponible en toda la web
    document.cookie = `${this.COOKIE_KEY}=${this.nuevoNombre};${expires};path=/`;

    // Actualizamos la vista
    this.nombreUsuario = this.nuevoNombre;
  }

  // 2. Borrar Cookie
  borrarCookie() {
    // Para borrar, simplemente la seteamos con una fecha pasada (ej: año 1970)
    document.cookie = `${this.COOKIE_KEY}=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;`;

    // Reseteamos las variables
    this.nombreUsuario = null;
    this.nuevoNombre = '';
  }

  // 3. Función auxiliar para buscar una cookie específica
  private leerCookie() {
    const nombreBusqueda = this.COOKIE_KEY + "=";
    // document.cookie devuelve un string largo tipo "clave1=valor1; clave2=valor2"
    const decodedCookie = decodeURIComponent(document.cookie);
    const arrayCookies = decodedCookie.split(';');

    for(let i = 0; i < arrayCookies.length; i++) {
      let c = arrayCookies[i];

      // Quitamos espacios en blanco al inicio si los hay
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }

      // Si encontramos la clave, extraemos el valor
      if (c.indexOf(nombreBusqueda) == 0) {
        this.nombreUsuario = c.substring(nombreBusqueda.length, c.length);
        return;
      }
    }
    // Si no se encuentra, nombreUsuario se queda en null
    this.nombreUsuario = null;
  }
}
