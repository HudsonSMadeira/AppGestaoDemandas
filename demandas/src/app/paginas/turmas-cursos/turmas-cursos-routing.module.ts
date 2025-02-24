import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TurmasCursosPage } from './turmas-cursos.page';

const routes: Routes = [
  {
    path: '',
    component: TurmasCursosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TurmasCursosPageRoutingModule {}
