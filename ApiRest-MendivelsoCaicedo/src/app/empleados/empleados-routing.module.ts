import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContenidoComponent } from './components/contenido/contenido.component';
import { ListaComponent } from './components/lista/lista.component';


const routes: Routes = [
  {path:'',children:[
    {path:'listar',component: ListaComponent},
    {path:'agregar',component: ContenidoComponent},
  ]},

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EmpleadosRoutingModule { }
