import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-fecha-hora-component',
  imports: [CommonModule],
  templateUrl: './fecha-hora-component.html',
  styleUrl: './fecha-hora-component.css',
})
export class FechaHoraComponent {
  fechaHora: Date = new Date();
  private intervaloId: any;

  ngOnInit(): void {
    this.intervaloId = setInterval(() => {
      this.fechaHora = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
    }
  }
}
