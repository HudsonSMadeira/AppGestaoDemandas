import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CargaHorariaPage } from './carga-horaria.page';

const routes: Routes = [
  {
    path: '',
    component: CargaHorariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CargaHorariaPageRoutingModule {}
