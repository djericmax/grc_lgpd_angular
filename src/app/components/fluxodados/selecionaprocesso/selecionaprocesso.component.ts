import { Component, OnInit } from '@angular/core';
import {FlatTreeControl} from '@angular/cdk/tree';
import {MatTreeFlatDataSource, MatTreeFlattener} from '@angular/material/tree';

/**
 * Food data with nested structure.
 * Each node has a name and an optional list of children.
 */
interface FoodNode {
  id: number;
  name: string;
  children?: FoodNode[];
  nivel: number;
}

const TREE_DATA: FoodNode[] = [
  {
    id:1 ,name: 'E-xyon', nivel: 0,
    children: [
      {
        id: 1, name: 'Rec. Humanos', nivel: 1,
        children: [
          {id: 1, name: 'Gestão de Pessoas', nivel: 2,
          children: [
            {id: 1, name: 'Recrutamento', nivel:3,
            children: [
              {id: 1, name: 'Recrutamento Bahia', nivel: 4},
              {id: 2, name: 'Recrutamento São Paulo', nivel:4},
              {id: 3, name: 'Recrutamento Rio de Janeiro', nivel:4}
            ]},
            {id: 2, name: 'Admissão', nivel:3,
            children: [
              {id: 4, name: 'Admissão Bahia', nivel: 4},
              {id: 5, name: 'Admissão São Paulo', nivel:4},
              {id: 6, name: 'Admissão Rio de Janeiro', nivel:4}
            ]},
          ]},
        ],
      },
      {
        id: 2, name: 'Depto Pessoal', nivel: 1,
        children: [
          {id: 2, name: 'Contratos de Trabalho', nivel: 2,
          children: [
            {id: 3, name: 'Contratação', nivel:3,
            children: [
              {id: 7, name: 'Contratação Bahia', nivel: 4},
              {id: 8, name: 'Contratação São Paulo', nivel:4},
              {id: 9, name: 'Contratação Rio de Janeiro', nivel:4}
            ]},
            {id: 4, name: 'Documentação', nivel:3,
            children: [
              {id: 10, name: 'Documentos Bahia', nivel: 4},
              {id: 11, name: 'Documentos São Paulo', nivel:4},
              {id: 12, name: 'Documentos Rio de Janeiro', nivel:4}
            ]},
          ]},
        ],
      },
      {
        id: 3, name: 'Contabilidade', nivel: 1,
        children: [
          {id: 3, name: 'Contas à pagar', nivel: 2,
          children: [
            {id: 5, name: 'Orçamento', nivel:3,
            children: [
              {id: 13, name: 'Orçamento Bahia', nivel: 4},
              {id: 14, name: 'Orçamento São Paulo', nivel:4},
              {id: 15, name: 'Orçamento Rio de Janeiro', nivel:4}
            ]},
          ]},
        ],
      },
    ],
  },

  {
    id:1 ,name: 'GRC Team', nivel: 0,
    children: [
      {
        id: 1, name: 'Depto Pessoal', nivel: 1,
        children: [
          {id: 1, name: 'RH', nivel: 2,
          children: [
            {id: 1, name: 'Recrutamento', nivel:3,
            children: [
              {id: 1, name: 'Recrutamento Bahia', nivel: 4},
            ]},
            {id: 2, name: 'Admissão', nivel:3,
            children: [
              {id: 4, name: 'Admissão Bahia', nivel: 4},
              {id: 5, name: 'Admissão São Paulo', nivel:4},
            ]},
          ]},
        ],
      },
      {
        id: 2, name: 'Contabilidade', nivel: 1,
        children: [
          {id: 2, name: 'Contas à pagar', nivel: 2,
          children: [
            {id: 3, name: 'Orçamento', nivel:3,
            children: [
              {id: 7, name: 'Orçamento MS', nivel: 4},
              {id: 8, name: 'Orçamento SP', nivel:4},
              {id: 9, name: 'Orçamento RJ', nivel:4}
            ]},
          ]},
        ],
      },
    ],
  },

  {
    id:1 ,name: 'Bradesco', nivel: 0,
    children: [
      {
        id: 1, name: 'Depto Pessoal', nivel: 1,
        children: [
          {id: 1, name: 'RH', nivel: 2,
          children: [
            {id: 1, name: 'Recrutamento', nivel:3,
            children: [
              {id: 1, name: 'Recrutamento Bahia', nivel: 4},
            ]},
          ]},
        ],
      },
      {
        id: 2, name: 'Contabilidade', nivel: 1,
        children: [
          {id: 2, name: 'Contas à pagar', nivel: 2,
          children: [
            {id: 3, name: 'Orçamento', nivel:3,
            children: [
              {id: 7, name: 'Contratação Bahia', nivel: 4},
              {id: 8, name: 'Contratação São Paulo', nivel:4},
              {id: 9, name: 'Contratação Rio de Janeiro', nivel:4}
            ]},
            {id: 4, name: 'Documentação', nivel:3,
            children: [
              {id: 10, name: 'Orçamento Bahia', nivel: 4},
            ]},
          ]},
        ],
      },
    ],
  },

];

/** Flat node with expandable and level information */
interface ExampleFlatNode {
  expandable: boolean;
  name: string;
  level: number;
}

@Component({
  selector: 'app-selecionaprocesso',
  templateUrl: './selecionaprocesso.component.html',
  styleUrls: ['./selecionaprocesso.component.scss']
})
export class SelecionaprocessoComponent implements OnInit {

  empresaSelect = 1;
  nivelProcess = 4;
  processoId = 13;

  empresaNome;
  processoCaminho;
  processoProcesso;
  processoResponsavel;

  processoCarregado: any;

  totalLengthApont: any;
  pageApont: number = 1;

  titulotela = 'FLUXO DE DADOS';
  subtitulotela ='Processos para Fluxos de dados';
  caminho = 'Processos / LGPD / Fluxo de Dados';

  user = '/assets/imgs/user.png';
  seta = '/assets/imgs/fluxo/seta.png';

  tabsApontamentos = [
    {
      id: 1, title:'Apontamentos',
      tdDados: [
        {id:1, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:2, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:3, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:4, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:5, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:6, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:7, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:8, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:9, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:10, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:11, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:12, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},
        {id:13, apontamento:'E-xyon',          doc:'00.000.000/0001-00'},

      ]
    }
  ];

  empresas = [
    {
      id:1, nivel:0, empresa:'E-xyon', doc:'00.000.000/0001-00',
      responsavel:[{id:1, nome:'Henrique Stablin', email:'henrique.stabelin@grcteam.com.br'},{id:2, nome:'Julio Oliveira', email:'julio.oliveira@gmail.com.br'},{id:3, nome:'Carlos Ligeiro', email:'carlos.ligeiro@e-xyon.com.br'}],
      processo:
      [
        {id:1, nivel: 1, nomeProcesso:'Rec. Humanos',   subProcessoN1:
          [
            {id:1, nivel:2, nomeProcesso:'Gestão de Pessoas', subProcessoN2:
              [
                {id:1, nivel:3, nomeProcesso:'Recrutamento', subProcessoN3:
                  [
                    {id:1, nivel:4, nomeProcesso:'Recrutamento Bahia',},
                    {id:2, nivel:4, nomeProcesso:'Recrutamento São Paulo',},
                    {id:3, nivel:4, nomeProcesso:'Recrutamento Rio de Janeiro',},
                  ]
                },
                {id:2, nivel:3, nomeProcesso:'Admissão',   subProcessoN3:
                  [
                    {id:4, nivel:4, nomeProcesso:'Admissão Bahia',},
                    {id:5, nivel:4, nomeProcesso:'Admissão São Paulo'},
                    {id:6, nivel:4, nomeProcesso:'Admissão Rio de Janeiro'},
                  ]
                },
              ]
            },
          ]
        },

        {id:2, nivel: 1, nomeProcesso:'Depto Pessoal',  subProcessoN1:
          [
            {id:2, nivel:2, nomeProcesso:'Contratos de Trab', subProcessoN2:
              [
                {id:3, nivel:3, nomeProcesso:'Contratação',  subProcessoN3:
                  [
                    {id:7, nivel:4, nomeProcesso:'Contratação Bahia',},
                    {id:8, nivel:4, nomeProcesso:'Contratação São Paulo',},
                    {id:9, nivel:4, nomeProcesso:'Contratação Rio de Janeiro',}
                  ]
                },
                {id:4, nivel:3, nomeProcesso:'Documentos', subProcessoN3:
                  [
                    {id:10, nivel:4, nomeProcesso:'Doctos Bahia',},
                    {id:11, nivel:4, nomeProcesso:'Doctos São Paulo'},
                    {id:12, nivel:4, nomeProcesso:'Doctos Rio de Janeiro'},
                  ]
                },
              ]
            },
          ]
        },

        {id:3, nivel: 1, nomeProcesso:'Contabilidade',  subProcessoN1:
          [
            {id:3, nivel:2, nomeProcesso:'Contas à pagar',    subProcessoN2:
              [
                {id:5, nivel:3, nomeProcesso:'Orçamento',    subProcessoN3:
                  [
                    {id:13, nivel:4, nomeProcesso:'Orçamento Bahia',},
                    {id:14, nivel:4, nomeProcesso:'Orçamento São Paulo',},
                    {id:14, nivel:4, nomeProcesso:'Orçamento Rio de Janeiro',},
                  ]
                }
              ]
            }
          ]
        },
      ]
    },
    {
      id:2, nivel:0, empresa:'GRC Team', doc:'00.000.000/0001-00',
      responsavel:[{id:1, nome:'Henrique Stablin', email:'henrique.stabelin@grcteam.com.br'},],
      processo:
      [
        {id:1, nivel: 1, nomeProcesso:'Depto Pessoal',  subProcessoN1:
          [
            {
              id:1, nivel:2, nomeProcesso:'RH',             subProcessoN2:
              [
                {
                  id:1, nivel:3, nomeProcesso:'Recrutamento', subProcessoN3:
                  [
                    {id:1, nivel:4, nomeProcesso:'Recrutamento Bahia',}
                  ]
                }
              ]
            }
          ]
        },
        {id:2, nivel: 1, nomeProcesso:'Contabilidade',  subProcessoN1:
          [
            {
              id:2, nivel:2, nomeProcesso:'Contas à pagar', subProcessoN2:
              [
                {
                  id:1, nivel:3, nomeProcesso:'Orçamento',    subProcessoN3:
                  [
                    {id:2, nivel:4, nomeProcesso:'Orçamento Bahia',}
                  ]
                }
              ]
            }
          ]
        },
      ]
    },
    {
      id:3, nivel:0, empresa:'Bradesco', doc:'00.000.000/0001-00',
      responsavel: [ { id:1, nome:'Julio Oliveira', email:'julio.oliveira@gmail.com.br'},{ id:2, nome:'Carlos Ligeiro', email:'carlos.ligeiro@e-xyon.com.br'} ],
      processo:
      [
        {id:1, nivel: 1, nomeProcesso:'Depto Pessoal',  subProcessoN1:
          [
            {
              id:1, nivel:2, nomeProcesso:'RH',             subProcessoN2:
              [
                {
                  id:1, nivel:3, nomeProcesso:'Recrutamento', subProcessoN3:
                  [
                    {
                      id:1, nivel:4, nomeProcesso:'Recrutamento Bahia',
                    }
                  ]
                }
              ]
            }
          ]
        },
        {id:2, nivel: 1, nomeProcesso:'Contabilidade',  subProcessoN1:
          [
            {
              id:2, nivel:2, nomeProcesso:'Contas à pagar', subProcessoN2:
              [
                {
                  id:1, nivel:3, nomeProcesso:'Orçamento',    subProcessoN3:
                  [
                    {
                      id:2, nivel:4, nomeProcesso:'Orçamento Bahia',
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
      id:4, nivel:0, empresa:'Tokyo Marine', doc:'00.000.000/0001-00',
      responsavel: [ { id:1, nome:'Julio Oliveira', email:'julio.oliveira@gmail.com.br'} ],
      processo:
      [
        {id:1, nivel: 1, nomeProcesso:'Depto Pessoal',  subProcessoN1:
          [
            {
              id:1, nivel:2, nomeProcesso:'RH',             subProcessoN2:
              [
                {
                  id:1, nivel:3, nomeProcesso:'Recrutamento', subProcessoN3:
                  [
                    {
                      id:1, nivel:4, nomeProcesso:'Recrutamento Bahia',
                    }
                  ]
                }
              ]
            }
          ]
        },
        {id:2, nivel: 1, nomeProcesso:'Contabilidade',  subProcessoN1:
          [
            {
              id:2, nivel:2, nomeProcesso:'Contas à pagar', subProcessoN2:
              [
                {
                  id:1, nivel:3, nomeProcesso:'Orçamento',    subProcessoN3:
                  [
                    {
                      id:2, nivel:4, nomeProcesso:'Orçamento Bahia',
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


  private _transformer = (node: FoodNode, level: number) => {
    return {
      expandable: !!node.children && node.children.length > 0,
      name: node.name,
      level: level,
    };
  };

  treeControl = new FlatTreeControl<ExampleFlatNode>(
    node => node.level,
    node => node.expandable,
  );

  treeFlattener = new MatTreeFlattener(
    this._transformer,
    node => node.level,
    node => node.expandable,
    node => node.children,
  );

  dataSource = new MatTreeFlatDataSource(this.treeControl, this.treeFlattener);

  constructor() {
    this.dataSource.data = TREE_DATA;
  }

  hasChild = (_: number, node: ExampleFlatNode) => node.expandable;


  ngOnInit() {
  }

  mostraProcessos(id: number){
    this.empresas.forEach((nos) => {
      if (nos.id === id) {

        // nos.subProcessoN1.forEach((mos) => {
        //   processoCarregado = ;

        // });

          console.log('empresa'+id);

      }
    });
  }

}
