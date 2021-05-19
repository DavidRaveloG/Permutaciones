import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AplicativoComponent } from './aplicativo/aplicativo.component';
import { BodyComponent } from './index/body.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';

const routes: Routes = [
  {path: '' , redirectTo: 'index',pathMatch: 'full'},
  {path: 'index' , component: BodyComponent},
  {path: 'ejemplo' , component: EjemploComponent},
  {path: 'aplicativo' , component: AplicativoComponent},
  {path: '**' , redirectTo: 'index',pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
