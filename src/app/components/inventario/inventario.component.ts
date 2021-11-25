import { Component, OnInit } from '@angular/core';
import {DataSource} from '@angular/cdk/collections';
import {Observable, ReplaySubject} from 'rxjs';

export interface PeriodicElement {
  id: number;
  nome: string;
  tipo: string;
  area: string;
  nomeCli:string;
  data:string;
  ondeESta:string;
  tiControla:string;
  risco:string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, nome:'Banco Marketing',   tipo:'SQL Server',      area:'Marketing',     nomeCli:'Fulano',   data:'16/11/2021', ondeESta:'Servidor AWS',   tiControla:'Não', risco:'Alto'},
  {id: 2, nome:'Planilha Compras',  tipo:'Planilha Excel',  area:'Compras',       nomeCli:'Siclano',  data:'15/11/2021', ondeESta:'Diretório Y:',   tiControla:'Sim', risco:'Médio'},
  {id: 3, nome:'Banco Vendas',      tipo:'SQL Server',      area:'Vendas',        nomeCli:'Beltrano', data:'17/11/2021', ondeESta:'Disco Local J:', tiControla:'Sim', risco:'Baixo'},
  {id: 4, nome:'Doc do Sistema',    tipo:'Documento Word',  area:'Administrativo',nomeCli:'Siclana',  data:'17/11/2021', ondeESta:'Disco Local C:', tiControla:'Não', risco:'Médio'},
];

@Component({
  selector: 'app-inventario',
  templateUrl: './inventario.component.html',
  styleUrls: ['./inventario.component.css']
})
export class InventarioComponent implements OnInit {

  titulotela = 'CADASTRAR ATIVO';
  subtitulotela ='Cadastrar dados de Inventário Ativo';
  caminho = 'LGPD / Inventário / Inventário Ativo';

  displayedColumns: string[] = ['id', 'nome', 'tipo', 'area', 'data', 'ondeESta', 'tiControla', 'risco'];
  dataToDisplay = [...ELEMENT_DATA];

  dataSource = new ExampleDataSource(this.dataToDisplay);

  constructor() { }

  ngOnInit(): void {
  }

  addData() {
    const randomElementIndex = Math.floor(Math.random() * ELEMENT_DATA.length);
    this.dataToDisplay = [...this.dataToDisplay, ELEMENT_DATA[randomElementIndex]];
    this.dataSource.setData(this.dataToDisplay);
  }

  removeData() {
    this.dataToDisplay = this.dataToDisplay.slice(0, -1);
    this.dataSource.setData(this.dataToDisplay);
  }
}

class ExampleDataSource extends DataSource<PeriodicElement> {
  private _dataStream = new ReplaySubject<PeriodicElement[]>();

  constructor(initialData: PeriodicElement[]) {
    super();
    this.setData(initialData);
  }

  connect(): Observable<PeriodicElement[]> {
    return this._dataStream;
  }

  disconnect() {}

  setData(data: PeriodicElement[]) {
    this._dataStream.next(data);
  }

}
