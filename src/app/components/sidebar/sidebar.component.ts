import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  user = '/assets/imgs/user.png';
  barsdown = '/assets/imgs/barsdown.png';
  news = '/assets/imgs/news.png';

  links =[
    {id:1, nome:'Fluxos de Dados',        rota:'/fluxo_dados',         ico:'line_style'},
    {id:2, nome:'Cadastrar Ativo',        rota:'/inventario',          ico:'launch'},
    {id:3, nome:'Dados do Inventário',    rota:'/dados_inventario',    ico:'data_usage'},
    {id:4, nome:'Sistemas e Repositórios',rota:'/sistema_repositorio', ico:'merge_type'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
