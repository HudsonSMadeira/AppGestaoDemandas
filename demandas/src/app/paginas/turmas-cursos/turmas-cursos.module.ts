import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TurmasCursosPageRoutingModule } from './turmas-cursos-routing.module';

import { TurmasCursosPage } from './turmas-cursos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TurmasCursosPageRoutingModule
  ],
  declarations: [TurmasCursosPage]
})
export class TurmasCursosPageModule {}
