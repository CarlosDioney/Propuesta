import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabInicialPage } from './tab-inicial.page';

const routes: Routes = [
  {
    path: '',
    component: TabInicialPage,
    children: [
      {
        path: 'folder/:id',
        loadChildren: () => import('./../folder/folder.module').then( m => m.FolderPageModule)
      },
      {
        path: 'home',
        loadChildren: () => import('./../home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'inicio',
        loadChildren: () => import('./../inicio/inicio.module').then( m => m.InicioPageModule)
      },
      {
        path: 'partidos',
        loadChildren: () => import('./../partidos/partidos.module').then( m => m.PartidosPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabInicialPageRoutingModule {}
