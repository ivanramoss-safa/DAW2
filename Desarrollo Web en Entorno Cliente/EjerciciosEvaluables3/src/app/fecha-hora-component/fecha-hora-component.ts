import { CommonModule } from '@angular/common';
import {Component, OnDestroy, OnInit} from '@angular/core';

@Component({
  selector: 'app-fecha-hora-component',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './fecha-hora-component.html',
  styleUrl: './fecha-hora-component.css',
})
export class FechaHoraComponent implements OnInit, OnDestroy {
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
