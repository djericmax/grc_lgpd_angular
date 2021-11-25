import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-dadoinventario',
  templateUrl: './dadoinventario.component.html',
  styleUrls: ['./dadoinventario.component.css']
})

export class DadoinventarioComponent implements AfterViewInit {
  displayedColumns: string[] = ['id', 'dadosPess', 'categoria', 'faturamento', 'cpagar', 'cadastro'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  titulotela = 'DADOS DO INVENTÁRIO';
  subtitulotela ='Inventário de dados Ativo';
  caminho = 'LGPD / Inventário / Dados do Inventário';

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
  dadosPess: string;
  categoria: string;
  faturamento: string;
  cpagar: string;
  cadastro: string
}

const ELEMENT_DATA: PeriodicElement[] = [
  {id: 1, dadosPess:'CPF',                                      categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 2, dadosPess:'RG',                                       categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 3, dadosPess:'RNE (estrangeiros)',                       categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 4, dadosPess:'Passaporte (estrangeiros)',                categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 5, dadosPess:'Tipo de visto (estrangeiros)',             categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 6, dadosPess:'Certificado de reservista (para homens)',  categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 7, dadosPess:'CTPS cópia',                               categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 8, dadosPess:'Currículo profissional',                   categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 9, dadosPess:'Comprovante de escolaridade',              categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 10, dadosPess:'Comprovante de residência',               categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 11, dadosPess:'Título de eleitor',                       categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
  {id: 12, dadosPess:'PIS',                                     categoria:'Dados Comuns',  faturamento:'Não', cpagar:'', cadastro:'',},
];
