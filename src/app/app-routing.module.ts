import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuralComponent } from './components/mural/mural.component';
import { MenuComponent } from './components/menu/menu.component';
import { CadinventarioComponent } from './components/cadinventario/cadinventario.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { DadoinventarioComponent } from './components/dadoinventario/dadoinventario.component';
import { SistrepoComponent } from './components/sistrepo/sistrepo.component';


const routes: Routes = [
  {path: '', redirectTo: 'mural_lgpd', pathMatch: 'full'},
  {path: 'mural',               component: MuralComponent},
  {path: 'mural_lgpd',          component: MenuComponent},
  {path: 'inventario',          component: InventarioComponent},
  {path: 'dados_inventario',    component: DadoinventarioComponent},
  {path: 'cadastro_inventario', component: CadinventarioComponent},
  {path: 'sistema_repositorio', component: SistrepoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }