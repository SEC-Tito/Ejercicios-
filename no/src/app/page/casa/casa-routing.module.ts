import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CasaPage } from './casa.page';

const routes: Routes = [
  {
    path: '',
    component: CasaPage,
    children:[
      {
        path: 'ejercicio1',
        loadChildren: () => import('./../../page/ejercicio1/ejercicio1.module').then( m => m.Ejercicio1PageModule)
      },
      {
        path: 'ejercicio2',
        loadChildren: () => import('./../../page/ejercicio2/ejercicio2.module').then( m => m.Ejercicio2PageModule)
      },
      {
        path: 'ejercicio3',
        loadChildren: () => import('./../../page/ejercicio3/ejercicio3.module').then( m => m.Ejercicio3PageModule)
      },
      {
        path: 'ejercicio4',
        loadChildren: () => import('./../../page/ejercicio4/ejercicio4.module').then( m => m.Ejercicio4PageModule)
      },
      {
        path: 'ejercicio5',
        loadChildren: () => import('./../../page/ejercicio5/ejercicio5.module').then( m => m.Ejercicio5PageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CasaPageRoutingModule {}
