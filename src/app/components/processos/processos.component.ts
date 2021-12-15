import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-processos',
  templateUrl: './processos.component.html',
  styleUrls: ['./processos.component.css']
})
export class ProcessosComponent implements OnInit {

  titulotela = 'PROCESSOS';
  subtitulotela ='...';
  caminho = 'Parametrizações / Riscos / PROCESSOS';

  empresaSelect: number;
  nivelProcess;
  processoId;

  empresaNome;
  processoCaminho;
  processoProcesso;
  processoResponsavel;

  processoCarregado: any[];
  subProcesso1Carregado: any[];
  subProcesso2Carregado: any[];
  subProcesso3Carregado: any[];

  totalLengthApont: any;
  pageApont: number = 1;

  user = '/assets/imgs/user.png';
  seta = '/assets/imgs/fluxo/seta.png';

  processos = [
    {
      id:1, nivel:'Empresa', empresa:'E-xyon', doc:'33.333.333/3333-33',
      processo:
      [
        {
          id:1, nivel: 'Pr1 - 00 - Processo de Primeiro Nívelocesso', nomeProcesso:'Processo Contábil',
        },
        {
          id:2, nivel: '8 - 02 - Macro Processo', nomeProcesso:'Processo de Admissão',
        },
        {
          id:3, nivel: '7 - 01 - Atividade', nomeProcesso:'Seleção de Candidatos',
        },
        {
          id:4, nivel: '7 - 01 - Atividade', nomeProcesso:' Processo Teste 123',
        },
      ]
    },
    {
      id:2, nivel:'Empresa', empresa:'Google', doc:'00.000.000/0001-00',
      processo:
      [
        {
          id:1, nivel: '7 - 01 - Atividade	', nomeProcesso:'Processo 01',
        },
        {
          id:2, nivel: '1 - 00 - Processo de Primeiro Nível	', nomeProcesso:'Processo 02',
        },
        {
          id:3, nivel: '1 - 00 - Processo de Primeiro Nível	', nomeProcesso:'Processo 03',
        },
      ]
    },
    {
      id:3, nivel:'Empresa', empresa:'Tokyo Marine', doc:'00.000.000/0001-00',
      processo:
      [
        { id:1, nivel: '1 - 00 - Processo de Primeiro Nível', nomeProcesso:'Processo Contábil', },
      ]
    },
    {
      id:4, nivel:'Empresa', empresa:'Bradesco', doc:'00.000.000/0001-00',
      processo:
      [
        { id:2, nivel: '1 - 00 - Processo de Primeiro Nível', nomeProcesso:'Processo Bradesco', },
        { id:2, nivel: '1 - 00 - Processo de Primeiro Nível', nomeProcesso:'Bradesco 001', },
        { id:2, nivel: '1 - 00 - Processo de Primeiro Nível', nomeProcesso:'Processo Bradesco 02', },
        { id:2, nivel: '1 - 00 - Processo de Primeiro Nível', nomeProcesso:'Sistemas Operacionais', },
        { id:2, nivel: '1 - 00 - Processo de Primeiro Nível', nomeProcesso:'Sistemas de Atendimento', },
        { id:2, nivel: '1 - 00 - Processo de Primeiro Nível', nomeProcesso:'Sistemas Agências', },
        { id:2, nivel: '1 - 00 - Processo de Primeiro Nível', nomeProcesso:'Atendimento ao cliente', },
        { id:2, nivel: '1 - 00 - Processo de Primeiro Nível', nomeProcesso:'Atendimento CNPJ', },
      ]
    },
  ];

  constructor(private router: Router) { }

  ngOnInit(): void {
    console.log(this.processos);
  }

  mostraProcessos(id: number){
    this.processoCarregado = undefined;
    this.subProcesso1Carregado = undefined;
    this.subProcesso2Carregado = undefined;
    this.subProcesso3Carregado = undefined;
    this.processos.forEach((nos) => {
      if (nos.id === id) {
        this.processoCarregado = nos.processo;
        this.empresaSelect = nos.id;
      }
    });
  }

  mostraSubProcesso1(id: number){
    this.subProcesso1Carregado = undefined;
    this.subProcesso2Carregado = undefined;
    this.subProcesso3Carregado = undefined;
    this.processoCarregado.forEach((nos) => {
      if (nos.id === id) {
        this.subProcesso1Carregado = nos.subProcessoN1;
        this.nivelProcess = nos.nivel;
        this.processoId = nos.id;
      }
    });
  }

  mostraSubProcesso2(id: number){
    this.subProcesso2Carregado = undefined;
    this.subProcesso3Carregado = undefined;
    this.subProcesso1Carregado.forEach((nos) => {
      if (nos.id === id) {
        this.subProcesso2Carregado = nos.subProcessoN2;
        this.nivelProcess = nos.nivel;
        this.processoId = nos.id;
      }
    });
  }

  mostraSubProcesso3(id: number){
    this.subProcesso2Carregado.forEach((nos) => {
      if (nos.id === id) {
        this.subProcesso3Carregado = nos.subProcessoN3;
        this.nivelProcess = nos.nivel;
        this.processoId = nos.id;
      }
    });
  }

  abrirfluxo(nivel: number, id: number){
    this.router.navigate(['/fluxo_dados', this.empresaSelect, nivel, id])
  }

}
