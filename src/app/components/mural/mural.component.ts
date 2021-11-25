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
    {id: 1, rota: '', titulo: 'Empresas',          img: 'icoEmpresas.png',   cor:'#4682B4',  rodape: 'Linhas de Negócio | Acionistas | Órgãos Reguladores | Riscos'},
    {id: 2, rota: '', titulo: 'Processos',         img: 'icoProcessos.png',  cor:'#FF1493',  rodape: 'Niveis de Processo | Contas Contábeis | Unidades Organizacionais'},
    {id: 3, rota: '', titulo: 'Riscos',            img: 'icoRiscos.png',     cor:'#DAA520',  rodape: 'Perfil de Análise | Avaliações | Controles | Processos'},
    {id: 4, rota: '', titulo: 'Perfis de Análise', img: 'icoPerfis.png',     cor:'#D2691E',  rodape: 'Matriz | Índices Financeiros'},
    {id: 5, rota: '', titulo: 'Controles',         img: 'icoControles.png',  cor:'#8B008B',  rodape: 'Afirmações | Demonstrações Financeiras | Objetivos | Testes'},
    {id: 6, rota: '', titulo: 'Testes',            img: 'icoTestes.png',     cor:'#4169E1',  rodape: 'Apontamentos | Fluxo de Aprovação | Procedimentos'},
    {id: 7, rota: '', titulo: 'Incidentes',        img: 'icoIncidentes.png', cor:'#808000',  rodape: 'Categorias | Perda Financeira | Ocorrências'},
    {id: 8, rota: '', titulo: 'Planos de Ação',    img: 'icoPlanos.png',     cor:'#00CED1',  rodape: 'Steps | Apontamentos | Controles'},
    {id: 9, rota: '', titulo: 'Compliance',        img: 'icoCompliance.png', cor:'#8B008B',  rodape: 'Normas | Leis | Políticas'},
    {id: 10, rota: 'mural_lgpd', titulo: 'LGPD',   img: 'icoLgpd.png',       cor:'#F023EB',  rodape: 'Normas | Leis | Políticas'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
