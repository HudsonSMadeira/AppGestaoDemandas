import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'inicio',
    loadChildren: () => import('./paginas/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./paginas/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'recuperar-senha',
    loadChildren: () => import('./paginas/recuperar-senha/recuperar-senha.module').then( m => m.RecuperarSenhaPageModule)
  },
  {
    path: 'carga-horaria',
    loadChildren: () => import('./paginas/carga-horaria/carga-horaria.module').then( m => m.CargaHorariaPageModule)
  },
  {
    path: 'demandas',
    loadChildren: () => import('./paginas/demandas/demandas.module').then( m => m.DemandasPageModule)
  },
  {
    path: 'cadastros',
    loadChildren: () => import('./paginas/cadastros/cadastros.module').then( m => m.CadastrosPageModule)
  },
  {
    path: 'turmas-cursos',
    loadChildren: () => import('./paginas/turmas-cursos/turmas-cursos.module').then( m => m.TurmasCursosPageModule)
  },
  {
    path: 'disciplinas',
    loadChildren: () => import('./paginas/disciplinas/disciplinas.module').then( m => m.DisciplinasPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
