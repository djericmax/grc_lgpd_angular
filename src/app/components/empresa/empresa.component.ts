import { Component, OnInit } from '@angular/core';

import * as go from 'gojs';


@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  
  titulotela = 'EMPRESAS';
  subtitulotela ='Apresentação do organograma da empresa';
  caminho = 'Mural / EMPRESAS';
  
  user =      '/assets/imgs/user.png';
  workflow =  '/assets/imgs/workflow1.png';
  seta =      '/assets/imgs/fluxo/seta.png';
  colorbar = '/assets/imgs/colorbar.png';  
  
  constructor() { }
  
  ngOnInit(): void {
    
  }
  
  
  public selectedNode = null;
  
  public model: go.TreeModel = new go.TreeModel(
    [
      { key: 0, name: 'Presidência',         title: '',                                                         },
      { key: 1, name: 'Gerência Região Sul', title: '',                         parent: 10,  isAssistant: false },
      { key: 2, name: 'Rio G. do Sul',       title: 'Gerência',                 parent: 1 ,  isAssistant: false },
      { key: 3, name: 'Paraná',              title: 'Gerência',                 parent: 1 ,  isAssistant: false },
      { key: 4, name: 'Sta Catarina',        title: 'Gerência',                 parent: 1 ,  isAssistant: false },
      { key: 5, name: 'Contabilidade',       title: '',                         parent: 20,  isAssistant: false },
      { key: 6, name: 'Consolidação',        title: '',                         parent: 5 ,  isAssistant: false },
      { key: 7, name: 'Tesouraria',          title: '',                         parent: 20,  isAssistant: false },
      { key: 8, name: 'Contas à pagar',      title: '',                         parent: 7 ,  isAssistant: false },
      { key: 9, name: 'T.I',                 title: '',                         parent: 30,  isAssistant: false },
      { key: 11, name: 'Transporte',         title: '',                         parent: 30,  isAssistant: false },
      { key: 12, name: 'Pedro Villafuerte',  title: 'Tester',                   parent: 9 ,  isAssistant: false },
      { key: 13, name: 'Eric Figueiredo',    title: 'Desenvolvedor Pleno',      parent: 9 ,  isAssistant: false },
      { key: 14, name: 'Mauro Pereira',      title: 'Db Admnistrator',          parent: 9 ,  isAssistant: false },
      { key: 15, name: 'Renan Medeiros',     title: 'Manager',                  parent: 3 ,  isAssistant: false },
      { key: 16, name: 'Luiza Borges',       title: 'Auxiliar Administrativo',  parent: 11,  isAssistant: false },
      { key: 17, name: 'Carla Albertina',    title: 'Auxiliar Administrativo',  parent: 4 ,  isAssistant: false },
      { key: 18, name: 'Victória Ramineli',  title: 'Auxiliar Administrativo',  parent: 2 ,  isAssistant: false },
      { key: 10, name: 'Dir. Comercial',     title: '',                         parent: 0 ,  isAssistant: false },
      { key: 20, name: 'Dir. Financeira',    title: '',                         parent: 0 ,  isAssistant: false },
      { key: 30, name: 'Dir. Operacional',   title: '',                         parent: 0 ,  isAssistant: false },
      { key: 40, name: 'Assessoria',         title: 'Comitê de Risco',          parent: 0,   isAssistant: true },
      {"key":19, "name":"Hannah Twomey",      "title":"Engineering Assistant", "parent":10, "isAssistant": true}
    ]
    );
    
    
    
    
    
    public setSelectedNode(node) {
      this.selectedNode = node;
    }
    
    
    
    
    
  }
  