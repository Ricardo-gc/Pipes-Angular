import { Component } from '@angular/core';
import { Color, Heroe } from '../../interfaces/ventas.interfaces';

@Component({
  selector: 'app-ordenar',
  templateUrl: './ordenar.component.html',
  styles: [
  ]
})
export class OrdenarComponent{
  
  enMayusculas: boolean = false;
  ordenarPor : string = '';
  heroes: Heroe[] = [
    {
      nombre: 'Super-Man',
      vuela: true,
      color: Color.azul
    },
    {
      nombre: 'Bat-Man',
      vuela: false,
      color: Color.negro
    },
    {
      nombre: 'Robbin',
      vuela: false,
      color: Color.verde
    },
    {
      nombre: 'Dare devil',
      vuela: false,
      color: Color.rojo
    },
    {
      nombre: 'Linterna Verde',
      vuela: true,
      color: Color.verde
    },

  ]
  cambiarCapitalizacion(){
    this.enMayusculas = !this.enMayusculas;
  }

  cambiarOrden(valor: string){
    this.ordenarPor = valor;
  }
}
