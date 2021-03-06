import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { MenuComponent } from './components/menu/menu.component';
import { CabecalhoComponent } from './components/cabecalho/cabecalho.component';
import { RodapeComponent } from './components/rodape/rodape.component';
import { InventarioComponent } from './components/inventario/inventario.component';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatMenuModule } from '@angular/material/menu';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MuralComponent } from './components/mural/mural.component';
import { CadinventarioComponent } from './components/cadinventario/cadinventario.component';
import { DadoinventarioComponent } from './components/dadoinventario/dadoinventario.component';
import { SistrepoComponent } from './components/sistrepo/sistrepo.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FluxodadosComponent } from './components/fluxodados/fluxodados.component';
import { MatTabsModule } from '@angular/material/tabs';
import {NgxPaginationModule} from 'ngx-pagination';
import { MatTreeModule } from '@angular/material/tree';
import { SelecionaprocessoComponent } from './components/fluxodados/selecionaprocesso/selecionaprocesso.component';
import { MatDividerModule } from '@angular/material/divider';
import { TabsModule } from 'ngx-bootstrap/tabs';
import { ProcessosComponent } from './components/processos/processos.component';
import { RiscosAvaliacaoComponent } from './components/riscos-avaliacao/riscos-avaliacao.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { AccordionModule } from 'ngx-bootstrap/accordion';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { DiagramOrgComponent } from './components/empresa/diagramOrg/diagramOrg.component';
import { CommonModule } from '@angular/common';
import { NgxOrgChartModule } from 'ngx-org-chart';
import { InspectorOrgComponent } from './components/empresa/inspectorOrg/inspectorOrg.component';
import { FormsModule } from '@angular/forms';
import { ControlesComponent } from './components/controles/controles.component';



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    MenuComponent,
    CabecalhoComponent,
    RodapeComponent,
    InventarioComponent,
    SidebarComponent,
    MuralComponent,
    CadinventarioComponent,
    DadoinventarioComponent,
    SistrepoComponent,
    FluxodadosComponent,
    SelecionaprocessoComponent,
    ProcessosComponent,
    RiscosAvaliacaoComponent,
    EmpresaComponent,
    ControlesComponent,
    DiagramOrgComponent,
    InspectorOrgComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatFormFieldModule,
    MatSelectModule,
    MatButtonModule,
    MatInputModule,
    MatTableModule,
    MatPaginatorModule,
    MatMenuModule,
    MatDialogModule,
    MatTabsModule,
    NgxPaginationModule,
    MatTreeModule,
    MatDividerModule,
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    AccordionModule.forRoot(),
    CommonModule,
    NgxOrgChartModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
