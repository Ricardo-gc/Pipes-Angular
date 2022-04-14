import { NgModule } from '@angular/core';

//PrimeNG (Ordenarlo alfabeticamente)
import {ButtonModule} from 'primeng/button';
import {CardModule} from 'primeng/card';
import {MenubarModule} from 'primeng/menubar';
// import {MenuItem} from 'primeng/api';


@NgModule({
  declarations: [],
  exports: [
    ButtonModule,
    CardModule,
    MenubarModule
  ]
})
export class PrimeNgModule { }
