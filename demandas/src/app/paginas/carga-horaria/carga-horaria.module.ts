import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CargaHorariaPageRoutingModule } from './carga-horaria-routing.module';

import { CargaHorariaPage } from './carga-horaria.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CargaHorariaPageRoutingModule,

  ],
  declarations: [CargaHorariaPage]
})
export class CargaHorariaPageModule {}
