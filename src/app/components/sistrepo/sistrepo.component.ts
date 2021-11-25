import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-sistrepo',
  templateUrl: './sistrepo.component.html',
  styleUrls: ['./sistrepo.component.css']
})

export class SistrepoComponent implements AfterViewInit {
  displayedColumns: string[] = [
    'id',
    'subProcesso',
    'nomeGestor',
    'sistema',
    'armazenamento',
    'integracao',
    'ondeEsta',
    'rFornecer',
    'rAdministrar',
    'envolvidos',
    'aproximadas'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  titulotela = 'REPOSITÓRIOS';
  subtitulotela ='Mapa de Sistemas e Repositório';
  caminho = 'LGPD / Inventário / Repositórios';

  @ViewChild(MatPaginator) paginator: MatPaginator;

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }
}

export interface PeriodicElement {
  id: number;
  subProcesso: string;
  nomeGestor: string;
  sistema: string;
  armazenamento: string;
  integracao: string;
  ondeEsta: string;
  rFornecer: string;
  rAdministrar: string;
  envolvidos: string;
  aproximadas: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, subProcesso:'Faturamento',    nomeGestor:'',  sistema:'VBS(Cadastro)',  armazenamento:'Digital', integracao:'WT', ondeEsta:'WT', rFornecer:'WT', rAdministrar:'WT', envolvidos:'WT', aproximadas:'?'},
  {id: 2, subProcesso:'Faturamento',    nomeGestor:'',  sistema:'SGB',            armazenamento:'Digital', integracao:'B/e', ondeEsta:'B/e', rFornecer:'B/e', rAdministrar:'B/e', envolvidos:'n/a', aproximadas:'?'},
  {id: 3, subProcesso:'Contas a Pagar', nomeGestor:'',  sistema:'Linkana - Cadastro Fornecedor e Veiculo (Sistema da WT) - para contato com o fornecedor, upload dos doctos', armazenamento:'Digital', integracao:'', ondeEsta:'', rFornecer:'', rAdministrar:'', envolvidos:'', aproximadas:''},
  {id: 4, subProcesso:'Contas a Pagar', nomeGestor:'',  sistema:'Fornecedor Genival - Uso de Whatsapp', armazenamento:'Digital', integracao:'', ondeEsta:'', rFornecer:'', rAdministrar:'', envolvidos:'', aproximadas:''},
  {id: 5, subProcesso:'',               nomeGestor:'',  sistema:'',               armazenamento:'', integracao:'', ondeEsta:'', rFornecer:'', rAdministrar:'', envolvidos:'', aproximadas:''},
  {id: 6, subProcesso:'',               nomeGestor:'',  sistema:'',               armazenamento:'', integracao:'', ondeEsta:'', rFornecer:'', rAdministrar:'', envolvidos:'', aproximadas:''},
];
