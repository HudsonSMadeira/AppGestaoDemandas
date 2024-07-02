import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CadatrosPageRoutingModule } from './cadastros-routing.module';

import { CadastrosPage } from './cadastros.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CadatrosPageRoutingModule
  ],
  declarations: [CadastrosPage]
})
export class CadastrosPageModule {}
