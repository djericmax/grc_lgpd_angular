import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  parametrizacao = [
    // {id:1, rota: '', titulo:'MATRIZ',              img:'icoMatriz.png', cor:'#f00', rodape:'Probabilidades | Impactos'},
    // {id:2, rota: '', titulo:'CAUSAS',              img:'icoCausas.png', cor:'#f00', rodape:'Parametrizações'},
    // {id:2, rota: '', titulo:'CATEGORIAS DE RISCO', img:'icoCausas.png', cor:'#f00', rodape:'Parametrizações'},
  ];

  LinksMural = [
    {id: 1, rota: 'cadastro_inventario',  titulo: 'Inventário',           img: 'icoEmpresas.png',   cor:'#4682B4',  rodape: 'Mapeamento e Inventário dos dados'},
    {id: 2, rota: 'dados_inventario',     titulo: 'Fluxo',                img: 'icoProcessos.png',  cor:'#FF1493',  rodape: 'Mapeamento dos Fluxo de dados'},
    {id: 3, rota: '',                     titulo: 'Relatórios',           img: 'icoRiscos.png',     cor:'#DAA520',  rodape: 'Relatórios e Dashboards'},
    {id: 4, rota: '',                     titulo: 'GRC para Privacidade', img: 'icoPerfis.png',     cor:'#D2691E',  rodape: 'Matriz de Riscos + Matriz de controles'},
    {id: 5, rota: '',                     titulo: 'Mapeamento',           img: 'icoControles.png',  cor:'#8B008B',  rodape: 'Mapeamento ISO27001'},
    {id: 6, rota: '',                     titulo: 'Direitos',             img: 'icoTestes.png',     cor:'#4169E1',  rodape: 'Direitos do Titular'},
    {id: 7, rota: '',                     titulo: 'Discovery',            img: 'icoIncidentes.png', cor:'#808000',  rodape: 'Data Discovery'},
    {id: 8, rota: '',                     titulo: 'Regulamentação',       img: 'icoPlanos.png',     cor:'#00CED1',  rodape: 'Cadastro de Regulamentações e Normas'}, //(LGPD, GDPR, ISO27001, Trabalhista, Marco Civil, IA)
    {id: 9, rota: '',                     titulo: 'Administração',        img: 'icoCompliance.png', cor:'#8B008B',  rodape: 'Módulo de Administração, Setup e Segurança'},
    // {id: 10, rota: '', titulo: 'LGPD',             img: 'icoLgpd.png',       cor:'#F023EB',  rodape: 'Normas | Leis | Políticas'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
