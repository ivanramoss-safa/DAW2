import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-fecha-hora',
  imports: [CommonModule],
  templateUrl: './FechaHoraComponent.html',
  styleUrl: './FechaHoraComponent.css',
})
export class FechaHoraComponent implements OnInit, OnDestroy {

  fechaHora: Date = new Date();
  private intervaloId: any;

  ngOnInit(): void {
    this.intervaloId = setInterval(() => {
      this.fechaHora = new Date();
      console.log(this.fechaHora);
    }, 1000);
  }

  ngOnDestroy(): void {
    if (this.intervaloId) {
      clearInterval(this.intervaloId);
    }
  }
}
