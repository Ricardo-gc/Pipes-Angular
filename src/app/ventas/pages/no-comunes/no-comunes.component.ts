import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent {
  //i18nSelect
  nombre: string = "Ricardo";
  genero: string = "masculino";
  invitacionMap = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

  //i18nPlural
  clientes: string[] = ['Maria', 'Pedro', 'Juan'];
  clientesMap = {
    '=0': 'No tenemos ningún cliente esperando',
    '=1':  'Tenemos 1 cliente esperando',
    '=2': `Tenemos 2 clientes esperando`,
    'other': `Tenemos # clientes esperando`
  }

  cambiarCliente(){
    if(this.nombre === "Ricardo"){
      this.nombre = "Camila";
      this.genero = "femenino"
    }else{
      this.nombre = "Ricardo";
      this.genero = "masculino"
    }
  }

  aumentarCliente(){
    this.clientes.push("Sebastian");
  }
  disminuirCliente(){
    this.clientes.pop();
  }

  //KeyValue Pipe
  persona = {
    nombre: 'Ricardo',
    edad: 23,
    direccion: 'Azucenas 8 Amozoc'
  }

  //Jeson PIpe
  heroes = [
    {
      nombre: 'Super-man',
      vuela: true
    },
    {
      nombre: 'Spider-man',
      vuela: false
    }
  ]

  //Async PIpe
  miObservable = interval(3000);
  valorPromesa = new Promise( (resolve, reject) => {
    setTimeout(()=>{
      resolve ( 'Tenemos data de promesa');
      reject ( 'No hay data' );
    }, 3000)
  })
}
