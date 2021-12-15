import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-mural',
  templateUrl: './mural.component.html',
  styleUrls: ['./mural.component.css']
})
export class MuralComponent implements OnInit {

  parametrizacao = [
    {id:1, rota: '', titulo:'MATRIZ',              img:'icoMatriz.png', cor:'#f00', rodape:'Probabilidades | Impactos'},
    {id:2, rota: '', titulo:'CAUSAS',              img:'icoCausas.png', cor:'#f00', rodape:'Parametrizações'},
    {id:2, rota: '', titulo:'CATEGORIAS DE RISCO', img:'icoCausas.png', cor:'#f00', rodape:'Parametrizações'},
  ];

  LinksMural = [
    {id: 1, rota: '', titulo: 'EMPRESAS',               img: 'icoEmpresas.png',   cor:'#4682B4',  rodape: 'Linhas de Negócio | Acionistas | Órgãos Reguladores | Riscos'},
    {id: 2, rota: '', titulo: 'PROCESSOS',              img: 'icoProcessos.png',  cor:'#FF1493',  rodape: 'Parametrizações'},
    {id: 3, rota: '/riscos_avaliacao', titulo: 'RISCOS',img: 'icoRiscos.png',     cor:'#DAA520',  rodape: 'Perfil de Análise | Avaliações | Controles | Processos'},
    {id: 4, rota: '', titulo: 'PERFÍS DE ANÁLISE',      img: 'icoPerfis.png',     cor:'#D2691E',  rodape: 'Matriz | Índices Financeiros'},
    {id: 5, rota: '', titulo: 'CONTROLES',              img: 'icoControles.png',  cor:'#8B008B',  rodape: 'Afirmações | Demonstrações Financeiras | Objetivos | Teste'},
    {id: 6, rota: '', titulo: 'TESTES',                 img: 'icoTestes.png',     cor:'#4169E1',  rodape: 'Apontamentos | Fluxo de Aprovação | Procedimentos'},
    {id: 7, rota: '', titulo: 'INCIDENTES',             img: 'icoIncidentes.png', cor:'#808000',  rodape: 'Categorias | Perda Financeira | Ocorrências'},
    {id: 8, rota: '', titulo: 'PLANOS DE AÇÃO',         img: 'icoPlanos.png',     cor:'#00CED1',  rodape: 'Steps | Apontamentos | Controles'},
    {id: 9, rota: '', titulo: 'COMPLIENCE REGULATÓRIO', img: 'icoCompliance.png', cor:'#8B008B',  rodape: 'Normas | Leis | Políticas'},
    {id: 10, rota: '/mural_lgpd', titulo: 'LGPD',       img: 'icoLgpd.png',       cor:'#F023EB',  rodape: 'Normas | Leis | Políticas'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
