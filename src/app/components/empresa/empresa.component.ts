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
      {
        "key": 1, "name": "Mauro Sampaio", "title":"Presidente - CEO",
        "comments": "Embora o termo CEO seja frequentemente utilizado, hoje em dia, pelas startups e até mesmo empresas multinacionais, ainda existem muitas dúvidas sobre o que significa, qual a real função, entre outros questionamentos. E são essas dúvidas que iremos solucionar hoje, ao longo de cada tópico listado abaixo. Vamos lá? O que é o CEO de uma empresa? CEO é uma sigla inglesa, cujo significado é Chief Executive Officer , e, em português, é conhecido como Presidente ou Diretor Executivo, apesar de Presidente e CEO terem funções diferentes, como veremos em um tópico mais adiante. O cargo de CEO é o mais alto ocupado por um executivo de uma empresa, logo, é o cargo com maior autoridade."
      },
      {"key":2, "name":"Carlos Ligeiro", "title":"Gerente T.I.", "parent":1, "comments":""},
      {"key":3, "name":"Andréa Brandão", "title":"Gerente R.H.", "parent":1, "comments":""},
      {"key":4, "name":"Renata Melo", "title":"Gerente Infra", "parent":1, "comments":""},
      {"key":5, "name":"Luiz Lima", "title": "Sup. de Projetos", "parent": 2, "comments": "" },
      {"key":6, "name":"Ana Correa", "title":"Project Manager", "parent":23, "comments":""},
      {"key":7, "name":"Julio Oliveira", "title":"Desenv. Sênior", "parent":6, "comments":""},
      {"key":8, "name":"Eric Figueiredo", "title":"Desenv. Pleno", "parent":6, "comments":""},
      {"key":9, "name":"Pedro VillaFuerte", "title":"Estagiário", "parent":6, "comments":""},
      {"key":10, "name":"Thiago Izahias", "title":"Sup. de Projetos", "parent":2, "comments":""},
      {"key":11, "name":"Lidia Rocha", "title":"Assistente R.H.", "parent":3, "comments":""},
      {"key":12, "name":"Alex Vieira", "title":"Técnico Infra", "parent":22, "comments":""},
      {"key":13, "name":"Eduardo Marinho", "title":"Operador", "parent":5, "comments":""},
      {"key":14, "name":"Carlos Oyola", "title":"Sócio investidor", "parent":1, "isAssistant":true, "comments":""},
      {"key":15, "name":"Marcelo Ricobom", "title":"Operador", "parent":10, "comments":""},
      {"key":16, "name":"Victor Rizzo", "title":"Sócio LGPD", "parent":1, "isAssistant":true, "comments":""},
      {"key":17, "name":"Mauro Pereira", "title":"DBA", "parent":10, "comments":""},
      {"key":18, "name":"Bruna Picollo", "title":"Analista de B.I.", "parent":5, "comments":""},
      {"key":19, "name":"Marcelo Fernandes", "title":"Aux. Administrativo", "parent":3, "comments":""},
      {"key":20, "name":"Renan Amaral", "title":"Aux. Infra", "parent":22, "comments":""},
      {"key":21, "name":"Luiz Andreata", "title":"Técnico Infra", "parent":22, "comments":""},
      {"key":22, "name":"Jair Silva", "title":"Sup. Infra", "parent":4, "comments":""},
      {"key":23, "name":"Henrique Stabelin", "title":"Representante GRC", "parent":2, "isAssistant":true, "comments":""},
    ]
    );
    
    
    
    
    
    public setSelectedNode(node) {
      this.selectedNode = node;
    }
    
    
    
    
    
  }
  