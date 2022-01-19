import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'test-alicorp',
    loadChildren: () => import('./modules/test-alicorp/test-alicorp.module').then(m => m.TestAlicorpModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/test-alicorp'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
