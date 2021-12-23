import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MuralComponent } from './components/mural/mural.component';
import { MenuComponent } from './components/menu/menu.component';
import { CadinventarioComponent } from './components/cadinventario/cadinventario.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { DadoinventarioComponent } from './components/dadoinventario/dadoinventario.component';
import { SistrepoComponent } from './components/sistrepo/sistrepo.component';
import { FluxodadosComponent } from './components/fluxodados/fluxodados.component';
import { SelecionaprocessoComponent } from './components/fluxodados/selecionaprocesso/selecionaprocesso.component';
import { ProcessosComponent } from './components/processos/processos.component';
import { RiscosAvaliacaoComponent } from './components/riscos-avaliacao/riscos-avaliacao.component';
import { EmpresaComponent } from './components/empresa/empresa.component';


const routes: Routes = [
  {path: '', redirectTo: 'mural_lgpd', pathMatch: 'full'},
  {path: 'mural',                           component: MuralComponent},
  {path: 'mural_lgpd',                      component: MenuComponent},
  {path: 'empresas',                        component: EmpresaComponent},
  {path: 'inventario',                      component: InventarioComponent},
  {path: 'cadastro_inventario',             component: CadinventarioComponent},
  {path: 'dados_inventario',                component: DadoinventarioComponent},
  {path: 'sistema_repositorio',             component: SistrepoComponent},
  {path: 'seleciona_processo',              component: SelecionaprocessoComponent},
  {path: 'processos',                       component: ProcessosComponent},
  {path: 'riscos_avaliacao',                component: RiscosAvaliacaoComponent},
  {path: 'fluxo_dados/:empresa/:nivel/:id', component: FluxodadosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
