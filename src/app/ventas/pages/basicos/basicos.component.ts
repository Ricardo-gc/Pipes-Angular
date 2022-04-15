import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-basicos',
  templateUrl: './basicos.component.html',
  styles: [
  ]
})
export class BasicosComponent {
  nombreLower: string = "Ricardo";
  nombreUpper: string = "RICARDO";
  nombreCompleto: string = "RicArdO GaRCía"

  fecha: Date = new Date(); //El día de hoy
}
