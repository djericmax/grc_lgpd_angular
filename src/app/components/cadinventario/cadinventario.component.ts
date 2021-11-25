import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadinventario',
  templateUrl: './cadinventario.component.html',
  styleUrls: ['./cadinventario.component.css']
})
export class CadinventarioComponent implements OnInit {

  titulotela = 'CADASTRAR INVENTÁRIO';
  subtitulotela ='Mapeamento e Inventário dos dados';
  caminho = 'LGPD / Inventário / Cadastrar Inventário';

  botoes = [
    {id: 1, btA:'Nome do Ativo',    btB:'Banco Marketing',  tipo:'Campo Digitação'},
    {id: 2, btA:'Tipo do Ativo',    btB:'SQL Server',       tipo:'Combo Box'},
    {id: 3, btA:'Área Responsável', btB:'Marketing',        tipo:'Campo Digitação'},
    {id: 4, btA:'Nome Responsável', btB:'Fulano',           tipo:'Campo Digitação'},
    {id: 5, btA:'Data de entrada',  btB:'16/11/2021',       tipo:'Campo Digitação'},
    {id: 6, btA:'Onde está',        btB:'Servidor AWS',     tipo:'Campo Digitação'},
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
