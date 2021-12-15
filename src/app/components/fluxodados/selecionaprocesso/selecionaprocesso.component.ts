import { Component, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-selecionaprocesso',
  templateUrl: './selecionaprocesso.component.html',
  styleUrls: ['./selecionaprocesso.component.scss']
})
export class SelecionaprocessoComponent implements OnInit {

  titulotela = 'FLUXO DE DADOS';
  subtitulotela ='Processos para Fluxos de dados';
  caminho = 'Processos / LGPD / Fluxo de Dados';

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

  empresas = [
    {
      id:1, nivel:0, define:'Empresa', empresa:'E-xyon', doc:'00.000.000/0001-00',
      responsavel:[{id:1, nome:'Henrique Stablin', email:'henrique.stabelin@grcteam.com.br'},{id:2, nome:'Julio Oliveira', email:'julio.oliveira@gmail.com.br'},{id:3, nome:'Carlos Ligeiro', email:'carlos.ligeiro@e-xyon.com.br'}],
      processo:
      [
        {id:1, nivel: 1, define:'Processo', nomeProcesso:'Rec. Humanos',   subProcessoN1:
        [
          {id:1, nivel:2, define:'Sub-Processo', nomeProcesso:'Gestão de Pessoas', subProcessoN2:
          [
            {id:1, nivel:3, define:'Sub-Processo', nomeProcesso:'Recrutamento', subProcessoN3:
            [
              {id:1, nivel:4, define:'Sub-Processo', nomeProcesso:'Recrutamento Bahia',},
              {id:2, nivel:4, define:'Sub-Processo', nomeProcesso:'Recrutamento São Paulo',},
              {id:3, nivel:4, define:'Sub-Processo', nomeProcesso:'Recrutamento Rio de Janeiro',},
            ]
          },
          {id:2, nivel:3, define:'Sub-Processo', nomeProcesso:'Admissão',   subProcessoN3:
          [
            {id:4, nivel:4, define:'Sub-Processo', nomeProcesso:'Admissão Bahia',},
            {id:5, nivel:4, define:'Sub-Processo', nomeProcesso:'Admissão São Paulo'},
            {id:6, nivel:4, define:'Sub-Processo', nomeProcesso:'Admissão Rio de Janeiro'},
          ]
        },
      ]
    },
  ]
},

{id:2, nivel: 1, define:'Processo', nomeProcesso:'Depto Pessoal',  subProcessoN1:
[
  {id:2, nivel:2, define:'Sub-Processo', nomeProcesso:'Contratos de Trab', subProcessoN2:
  [
    {id:3, nivel:3, define:'Sub-Processo', nomeProcesso:'Contratação',  subProcessoN3:
    [
      {id:7, nivel:4, define:'Sub-Processo', nomeProcesso:'Contratação Bahia',},
      {id:8, nivel:4, define:'Sub-Processo', nomeProcesso:'Contratação São Paulo',},
      {id:9, nivel:4, define:'Sub-Processo', nomeProcesso:'Contratação Rio de Janeiro',}
    ]
  },
  {id:4, nivel:3, define:'Sub-Processo', nomeProcesso:'Documentos', subProcessoN3:
  [
    {id:10, nivel:4, define:'Sub-Processo', nomeProcesso:'Doctos Bahia',},
    {id:11, nivel:4, define:'Sub-Processo', nomeProcesso:'Doctos São Paulo'},
    {id:12, nivel:4, define:'Sub-Processo', nomeProcesso:'Doctos Rio de Janeiro'},
  ]
},
]
},
]
},

{id:3, nivel: 1, define:'Processo', nomeProcesso:'Contabilidade',  subProcessoN1:
[
  {id:3, nivel:2, define:'Sub-Processo', nomeProcesso:'Contas à pagar',    subProcessoN2:
  [
    {id:5, nivel:3, define:'Sub-Processo', nomeProcesso:'Orçamento',    subProcessoN3:
    [
      {id:13, nivel:4, define:'Sub-Processo', nomeProcesso:'Orçamento Bahia',},
      {id:14, nivel:4, define:'Sub-Processo', nomeProcesso:'Orçamento São Paulo',},
      {id:15, nivel:4, define:'Sub-Processo', nomeProcesso:'Orçamento Rio de Janeiro',},
    ]
  }
]
}
]
},
]
},
{
  id:2, nivel:0, define:'Empresa', empresa:'GRC Team', doc:'00.000.000/0001-00',
  responsavel:[{id:1, nome:'Henrique Stablin', email:'henrique.stabelin@grcteam.com.br'},],
  processo:
  [
    {id:1, nivel: 1, define:'Processo', nomeProcesso:'Depto Pessoal',  subProcessoN1:
    [
      {
        id:1, nivel:2, define:'Sub-Processo', nomeProcesso:'RH',             subProcessoN2:
        [
          {
            id:1, nivel:3, define:'Sub-Processo', nomeProcesso:'Recrutamento', subProcessoN3:
            [
              {id:1, nivel:4, define:'Sub-Processo', nomeProcesso:'Recrutamento Bahia',}
            ]
          }
        ]
      }
    ]
  },
  {id:2, nivel: 1, define:'Processo', nomeProcesso:'Contabilidade',  subProcessoN1:
  [
    {
      id:2, nivel:2, define:'Sub-Processo', nomeProcesso:'Contas à pagar', subProcessoN2:
      [
        {
          id:1, nivel:3, define:'Sub-Processo', nomeProcesso:'Orçamento',    subProcessoN3:
          [
            {id:2, nivel:4, define:'Sub-Processo', nomeProcesso:'Orçamento Bahia',}
          ]
        }
      ]
    }
  ]
},
]
},
{
  id:3, nivel:0, define:'Empresa', empresa:'Bradesco', doc:'00.000.000/0001-00',
  responsavel: [ { id:1, nome:'Julio Oliveira', email:'julio.oliveira@gmail.com.br'},{ id:2, nome:'Carlos Ligeiro', email:'carlos.ligeiro@e-xyon.com.br'} ],
  processo:
  [
    {id:1, nivel: 1, define:'Processo', nomeProcesso:'Depto Pessoal',  subProcessoN1:
    [
      {
        id:1, nivel:2, define:'Sub-Processo', nomeProcesso:'RH',             subProcessoN2:
        [
          {
            id:1, nivel:3, define:'Sub-Processo', nomeProcesso:'Recrutamento', subProcessoN3:
            [
              {
                id:1, nivel:4, define:'Sub-Processo', nomeProcesso:'Recrutamento Bahia',
              }
            ]
          }
        ]
      }
    ]
  },
  {id:2, nivel: 1, define:'Processo', nomeProcesso:'Contabilidade',  subProcessoN1:
  [
    {
      id:2, nivel:2, define:'Sub-Processo', nomeProcesso:'Contas à pagar', subProcessoN2:
      [
        {
          id:1, nivel:3, define:'Sub-Processo', nomeProcesso:'Orçamento',    subProcessoN3:
          [
            {
              id:2, nivel:4, define:'Sub-Processo', nomeProcesso:'Orçamento Bahia',
            }
          ]
        }
      ]
    }
  ]
},
]
},
{
  id:4, nivel:0, define:'Processo', empresa:'Tokyo Marine', doc:'00.000.000/0001-00',
  responsavel: [ { id:1, nome:'Julio Oliveira', email:'julio.oliveira@gmail.com.br'} ],
  processo:
  [
    {id:1, nivel: 1, define:'Processo', nomeProcesso:'Depto Pessoal',  subProcessoN1:
    [
      {
        id:1, nivel:2, define:'Sub-Processo', nomeProcesso:'RH',             subProcessoN2:
        [
          {
            id:1, nivel:3, define:'Sub-Processo', nomeProcesso:'Recrutamento', subProcessoN3:
            [
              {
                id:1, nivel:4, define:'Sub-Processo', nomeProcesso:'Recrutamento Bahia',
              }
            ]
          }
        ]
      }
    ]
  },
  {id:2, nivel: 1, define:'Processo', nomeProcesso:'Contabilidade',  subProcessoN1:
  [
    {
      id:2, nivel:2, define:'Sub-Processo', nomeProcesso:'Contas à pagar', subProcessoN2:
      [
        {
          id:1, nivel:3, define:'Sub-Processo', nomeProcesso:'Orçamento',    subProcessoN3:
          [
            {
              id:2, nivel:4, define:'Sub-Processo', nomeProcesso:'Orçamento Bahia',
            }
          ]
        }
      ]
    }
  ]
},
]
}
];

constructor(private router: Router) { }

ngOnInit() {
}

mostraProcessos(id: number){
  this.processoCarregado = undefined;
  this.subProcesso1Carregado = undefined;
  this.subProcesso2Carregado = undefined;
  this.subProcesso3Carregado = undefined;
  this.empresas.forEach((nos) => {
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
