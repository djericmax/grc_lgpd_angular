import { Component, OnInit, TemplateRef } from '@angular/core';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-riscos-avaliacao',
  templateUrl: './riscos-avaliacao.component.html',
  styleUrls: ['./riscos-avaliacao.component.css']
})
export class RiscosAvaliacaoComponent implements OnInit {
  
  modalRef?: BsModalRef;
  items: any[];
  
  
  
  titulotela = 'RISCOS';
  subtitulotela ='Perfil de Análise | Avaliações | Controles | Processos';
  caminho = 'Mural / RISCOS';
  
  user =      '/assets/imgs/user.png';
  workflow =  '/assets/imgs/workflow1.png';
  seta =      '/assets/imgs/fluxo/seta.png';
  colorbar = '/assets/imgs/colorbar.png';
  
  empresaSelect;
  nivelProcess;
  processoId;
  
  empresaNome;
  processoCaminho;
  processoProcesso;
  processoResponsavel;
  
  totalLengthApont: any;
  pageApont: number = 1;
  
  parametrizacao = [
    {id:1, float:'left',  rota: '', titulo:'PERFIL EXYON', date:'',           img:'icoPerfilEx.png', cor:'#f00', rodape:'Bowtie', result:'Inerente - Residual'},
    {id:2, float:'right', rota: '', titulo:'ÍNDICE EXYON', date:'10/09/2021', img:'icoIndiceEx.png', cor:'#f00', rodape:'...',    result:'R$250.000,00'},
  ];
  
  fluxos = [
    {id: 1, camada:'Riscos Relacionados',  fundo:'#8E4311', cor:'#fff', seta:true},
    {id: 2, camada:'Controles',            fundo:'#D26317', cor:'#fff', seta:true},
    {id: 3, camada:'Categorias',           fundo:'#FB8738', cor:'#fff', seta:true},
    {id: 4, camada:'Processos',            fundo:'#FFBD8D', cor:'#333', seta:true},
    {id: 5, camada:'Causas',               fundo:'#FFD8B9', cor:'#333', seta:true},
    {id: 6, camada:'Incidentes',           fundo:'#FFF3E3', cor:'#333', seta:false},
    {id: 7, camada:'Planos de Ação',       fundo:'#FFF3E3', cor:'#333', seta:false},
    {id: 8, camada:'Probabilidade',        fundo:'#FFF3E3', cor:'#333', seta:false},
    {id: 9, camada:'Impactos',             fundo:'#FFF3E3', cor:'#333', seta:false},
  ];
  
  empresas = [
    {
      id:1, nivel:0, empresa:'E-xyon',
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
      {id:15, nivel:4, nomeProcesso:'Orçamento Rio de Janeiro',},
    ]
  }
]
}
]
},
]
},
{
  id:2, nivel:0, empresa:'GRC Team',
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
  id:3, nivel:0, empresa:'Bradesco',
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
}
];

tabsRiscosRel = [
  {id: 1, tab: 'tab1', for:'t1', title:'Riscos Relacionados',
  thTabela: [
    // {id:1, campo:'',width:'90%'},
    // {id:2, campo:'Categoria',     width:'35%'},
    // {id:3, campo:'Coletado',      width:'15%'},
  ],
  tdDados: [
    {id:1, Risco:'Risco de não atendimento regulatório	'},
  ]
}
];

tabsControles = [
  {
    id: 1, tab: 'tab2', for:'t2', title:'Controles',
    thTabela: [
      {id:1, campo:'Controles',       width:'22%'},
      {id:2, campo:'Categoria',       width:'10%'},
      {id:3, campo:'Objetivo',        width:'10%'},
      {id:4, campo:'Tipo',            width:'11%'},
      {id:5, campo:'Frequência',      width:'11%'},
      {id:6, campo:'Último teste',    width:'11%'},
      {id:6, campo:'Teste operação',  width:'11%'},
      {id:6, campo:'Teste desenho',   width:'11%'},
    ],
    tdDados: [
      {id:1, Controles:'ÁREA01 - C1 - Conciliação	', Categoria:'Preventivo', Objetivo:'Conformidade', Tipo:'Key Control', Frequencia:'Quinzenal',  ultimoteste:'15/05/2021', operacao:'Melhoria', desenho:'Divergência'},
      {id:2, Controles:'ÁREA01 - C2 - Normatização', Categoria:'Preventivo', Objetivo:'Conformidade', Tipo:'ELC',         Frequencia:'Contínuo',   ultimoteste:'01/09/2021', operacao:'Ok',       desenho:'Ok'},
      {id:3, Controles:'ÁREA01 - C3 - Alçadas	',     Categoria:'Preventivo', Objetivo:'Operacional',  Tipo:'Key Control', Frequencia:'Contínuo',   ultimoteste:'',           operacao:'',         desenho:''},
      {id:4, Controles:'ÁREA01 - C4 - Monitoramento',Categoria:'Detectivo',  Objetivo:'Conformidade', Tipo:'Key Control', Frequencia:'Mensal',     ultimoteste:'18/10/2021', operacao:'Ok',       desenho:'Ok'},
    ]
  }
];

tabsCategorias = [
  {
    id: 1, tab: 'tab3', for:'t3', title:'Categorias',
    thTabela: [
      // {id:1, campo:'Controles',   width:'18%'},
      // {id:2, campo:'Categoria',   width:'15%'},
      // {id:3, campo:'Objetivo',    width:'15%'},
      // {id:4, campo:'Tipo',        width:'16%'},
      // {id:5, campo:'Frequência',  width:'15%'},
      // {id:5, campo:'CustoCusto',  width:'16%'},
    ],
    tdDados: [
      {id:1, Categoria:'3.1 Risco Operacional'},
      {id:2, Categoria:'3.1.1 Fraude Interna'},
    ]
  }
];

tabsProcessos = [
  {
    id: 1, tab: 'tab4', for:'t4', title:'Processos',
    thTabela: [
      // {id:1, campo:'Controles',   width:'18%'},
      // {id:2, campo:'Categoria',   width:'15%'},
      // {id:3, campo:'Objetivo',    width:'15%'},
      // {id:4, campo:'Tipo',        width:'16%'},
      // {id:5, campo:'Frequência',  width:'15%'},
      // {id:5, campo:'CustoCusto',  width:'16%'},
    ],
    tdDados: [
      {id:1, Processo:'Processo Contábil'},
    ]
  }
];

tabsCausas = [
  {
    id: 1, tab: 'tab5', for:'t5', title:'Causas',
    thTabela: [
      // {id:1, campo:'Controles',   width:'18%'},
      // {id:2, campo:'Categoria',   width:'15%'},
      // {id:3, campo:'Objetivo',    width:'15%'},
      // {id:4, campo:'Tipo',        width:'16%'},
      // {id:5, campo:'Frequência',  width:'15%'},
      // {id:5, campo:'CustoCusto',  width:'16%'},
    ],
    tdDados: [
      {id:1, Causa:'Poucos colaboradores.'},
      {id:2, Causa:'Venda Inapropriada de Ativos para Clientes'},
      {id:3, Causa:'Fator Risco 001'},
    ]
  }
];

tabsIncidentes = [
  {
    id: 1, tab: 'tab6', for:'t6', title:'Incidentes',
    thTabela: [
      {id:1, campo:'Nome',              width:'25%'},
      {id:2, campo:'Categoria',         width:'15%'},
      {id:3, campo:'Perda Financeira',  width:'15%'},
      {id:4, campo:'Data da Ocorrência',width:'15%'},
      {id:5, campo:'Base de Origem',    width:'15%'},
      {id:5, campo:'Workflow',          width:'16%'},
    ],
    tdDados: [
      {id:1, Nome:'Incêndio',   Categoria:'Fraude Externa	', Perda:'R$22,222,222,222.00	', Data:'01/12/2021	', Base:'',  Workflow:'Recusado',},
    ]
  }
];

tabsPlanos = [
  {
    id: 1, tab: 'tab7', for:'t7', title:'Planos de Ação',
    thTabela: [
      {id:1, campo:'Nome',    width:'40%'},
      {id:2, campo:'Duração', width:'26%'},
      {id:3, campo:'',        width:'20%'},
      {id:4, campo:'',        width:'20%'},
    ],
    tdDados: [
      {id:1, Nome:'Plano teste',                                    Duracao:'08/09/2021 até ...', img:'/assets/imgs/level.png', status:'Aguardando',},
      {id:2, Nome:'b) Implementar proteções de ambiente físico. ',  Duracao:'15/10/2021 até ...', img:'/assets/imgs/level.png', status:'Aguardando',        },
    ]
  }
];

tabsProbabilidade = [
  {
    id: 1, tab: 'tab10', title:'Probabilidade',
    thTabela: [
      // {id:1, campo:'Nome da Causa',   width:'18%'},
    ],
    tdDados: [
      {id:1, Causa:'Histórico de Eventos',  title:'Probabilidade',
      porcents: [
        {id:1, valor:'100%', prob:'Extremo',       check:false},
        {id:2, valor:'80%',  prob:'Significativo', check:false},
        {id:3, valor:'60%',  prob:'Moderado',      check:true},
        {id:4, valor:'40%',  prob:'Pequeno',       check:false},
        {id:5, valor:'20%',  prob:'Minímo',        check:false},
        {id:6, valor:'0%',   prob:'Não Aplicável', check:false},
      ], descricao:'Aqui vai a descrição da ação tomada a cima, apresentando o porquê de ter sido escolhido tal percentual, '+
      'Podendo até aparecer um conteúdo maior como descrição, onde a quantidade de caracteres não será pouca e poderá ser ajustada '+
      'de acordo com o texto que foi escrito na descrição.',
      controles: [
        {
          id: 1,
          thTab: [
            {id:1, campo:'Controles',       width:'22%'},
            {id:2, campo:'Categoria',       width:'10%'},
            {id:3, campo:'Objetivo',        width:'10%'},
            {id:4, campo:'Tipo',            width:'11%'},
            {id:5, campo:'Frequência',      width:'11%'},
            {id:6, campo:'Último teste',    width:'11%'},
            {id:6, campo:'Teste operação',  width:'11%'},
            {id:6, campo:'Teste desenho',   width:'11%'},
          ],
          tdControles: [
            {id:1, Controles:'ÁREA01 - C1 - Conciliação	', Categoria:'Preventivo', Objetivo:'Conformidade', Tipo:'Key Control', Frequencia:'Quinzenal',  ultimoteste:'15/05/2021', operacao:'Melhoria', desenho:'Divergência'},
            {id:2, Controles:'ÁREA01 - C2 - Normatização', Categoria:'Preventivo', Objetivo:'Conformidade', Tipo:'ELC',         Frequencia:'Contínuo',   ultimoteste:'01/09/2021', operacao:'Ok',       desenho:'Ok'},
            {id:3, Controles:'ÁREA01 - C4 - Monitoramento',Categoria:'Detectivo',  Objetivo:'Conformidade', Tipo:'Key Control', Frequencia:'Mensal',     ultimoteste:'18/10/2021', operacao:'Ok',       desenho:'Ok'},
          ]
        }
      ],
    },
    {id:2, Causa:'Frequência do Processo',title:'Probabilidade',
    porcents: [
      {id:7, valor:'100%', prob:'Extremo',       check:false},
      {id:8, valor:'80%',  prob:'Significativo', check:false},
      {id:9, valor:'60%',  prob:'Moderado',      check:false},
      {id:10, valor:'40%',  prob:'Pequeno',       check:false},
      {id:11, valor:'20%',  prob:'Minímo',        check:true},
      {id:12, valor:'0%',   prob:'Não Aplicável', check:false},
    ], descricao:'',
    controles: [
      {
        id: 1,
        thTab: [
          {id:1, campo:'Controles',       width:'22%'},
          {id:2, campo:'Categoria',       width:'10%'},
          {id:3, campo:'Objetivo',        width:'10%'},
          {id:4, campo:'Tipo',            width:'11%'},
          {id:5, campo:'Frequência',      width:'11%'},
          {id:6, campo:'Último teste',    width:'11%'},
          {id:6, campo:'Teste operação',  width:'11%'},
          {id:6, campo:'Teste desenho',   width:'11%'},
        ],
        tdControles: [
          {id:1, Controles:'ÁREA01 - C4 - Monitoramento',Categoria:'Detectivo',  Objetivo:'Conformidade', Tipo:'Key Control', Frequencia:'Mensal',     ultimoteste:'18/10/2021', operacao:'Ok',       desenho:'Ok'},
        ]
      }
    ]
  },
],

}
];

tabsImpactos = [
  {
    id: 1, tab: 'tab11', title:'Impactos',
    thTabela: [
      // {id:1, campo:'Nome do Impacto',   width:'18%'},
    ],
    tdDados: [
      {id:1, Impacto:'Reputacional',      title:'Impacto',
      porcents: [
        {id:1, valor:'0%',   prob:'Não Aplicável', check:false},
        {id:2, valor:'20%',  prob:'Muito',         check:true},
        {id:3, valor:'40%',  prob:'Remota',        check:false},
        {id:4, valor:'60%',  prob:'Possível',      check:false},
        {id:5, valor:'80%',  prob:'Provável',      check:false},
        {id:6, valor:'100%', prob:'Muito Provável',check:false},
      ], descricao:'Apresentando o porquê de ter sido escolhido o % de Reputacional',
      controles: [
        {
          id: 1,
          thTab: [
            {id:1, campo:'Controles',       width:'22%'},
            {id:2, campo:'Categoria',       width:'10%'},
            {id:3, campo:'Objetivo',        width:'10%'},
            {id:4, campo:'Tipo',            width:'11%'},
            {id:5, campo:'Frequência',      width:'11%'},
            {id:6, campo:'Último teste',    width:'11%'},
            {id:7, campo:'Teste operação',  width:'11%'},
            {id:8, campo:'Teste desenho',   width:'11%'},
          ],
          tdControles: [
            {id:1, Controles:'ÁREA01 - C1 - Conciliação	', Categoria:'Preventivo', Objetivo:'Conformidade', Tipo:'Key Control', Frequencia:'Quinzenal',  ultimoteste:'15/05/2021', operacao:'Melhoria', desenho:'Divergência'},
            {id:2, Controles:'ÁREA01 - C4 - Monitoramento',Categoria:'Detectivo',  Objetivo:'Conformidade', Tipo:'Key Control', Frequencia:'Mensal',     ultimoteste:'18/10/2021', operacao:'Ok',       desenho:'Ok'},
          ]
        }
      ],
    },
    {id:2, Impacto:'Legal Regulatório',     title:'Impacto',
    porcents: [
      {id:7, valor:'0%',   prob:'Não Aplicável', check:false},
      {id:8, valor:'20%',  prob:'Muito',         check:false},
      {id:9, valor:'40%',  prob:'Remota',        check:false},
      {id:10, valor:'60%',  prob:'Possível',      check:true},
      {id:11, valor:'80%',  prob:'Provável',      check:false},
      {id:12, valor:'100%', prob:'Muito Provável',check:false},
    ], descricao:'',
    controles: [
      {
        id: 1,
        thTab: [
          {id:1, campo:'Controles',       width:'22%'},
          {id:2, campo:'Categoria',       width:'10%'},
          {id:3, campo:'Objetivo',        width:'10%'},
          {id:4, campo:'Tipo',            width:'11%'},
          {id:5, campo:'Frequência',      width:'11%'},
          {id:6, campo:'Último teste',    width:'11%'},
          {id:7, campo:'Teste operação',  width:'11%'},
          {id:8, campo:'Teste desenho',   width:'11%'},
        ],
        tdControles: [
          {id:1, Controles:'ÁREA01 - C2 - Normatização', Categoria:'Preventivo', Objetivo:'Conformidade', Tipo:'ELC',         Frequencia:'Contínuo',   ultimoteste:'01/09/2021', operacao:'Ok',       desenho:'Ok'},
        ]
      }
    ],
  },
  {id:3, Impacto:'Continuidade Operacional',      title:'Impacto',
  porcents: [
    {id:13, valor:'0%',   prob:'Não Aplicável', check:false},
    {id:14, valor:'20%',  prob:'Muito',         check:false},
    {id:15, valor:'40%',  prob:'Remota',        check:true},
    {id:16, valor:'60%',  prob:'Possível',      check:false},
    {id:17, valor:'80%',  prob:'Provável',      check:false},
    {id:18, valor:'100%', prob:'Muito Provável',check:false},
  ], descricao:'Eis o porquê de ter sido escolhido o % de Continuidade Operacional',
  controles: [
    {
      id: 1,
      thTab: [
        {id:1, campo:'Controles',       width:'22%'},
        {id:2, campo:'Categoria',       width:'10%'},
        {id:3, campo:'Objetivo',        width:'10%'},
        {id:4, campo:'Tipo',            width:'11%'},
        {id:5, campo:'Frequência',      width:'11%'},
        {id:6, campo:'Último teste',    width:'11%'},
        {id:7, campo:'Teste operação',  width:'11%'},
        {id:8, campo:'Teste desenho',   width:'11%'},
      ],
      tdControles: [
        {id:1, Controles:'ÁREA01 - C2 - Normatização', Categoria:'Preventivo', Objetivo:'Conformidade', Tipo:'ELC',         Frequencia:'Contínuo',   ultimoteste:'01/09/2021', operacao:'Ok',       desenho:'Ok'},
        {id:2, Controles:'ÁREA01 - C4 - Monitoramento',Categoria:'Detectivo',  Objetivo:'Conformidade', Tipo:'Key Control', Frequencia:'Mensal',     ultimoteste:'18/10/2021', operacao:'Ok',       desenho:'Ok'},
      ]
    }
  ],
},
{id:4, Impacto:'Prestação de Serviços a Clientes e Corretores',     title:'Impacto',
porcents: [
  {id:19, valor:'0%',   prob:'Não Aplicável', check:true},
  {id:20, valor:'20%',  prob:'Muito',         check:false},
  {id:21, valor:'40%',  prob:'Remota',        check:false},
  {id:22, valor:'60%',  prob:'Possível',      check:false},
  {id:23, valor:'80%',  prob:'Provável',      check:false},
  {id:24, valor:'100%', prob:'Muito Provável',check:false},
], descricao:'',
controles: [
  {
    id: 1,
    thTab: [
      {id:1, campo:'Controles',       width:'22%'},
      {id:2, campo:'Categoria',       width:'10%'},
      {id:3, campo:'Objetivo',        width:'10%'},
      {id:4, campo:'Tipo',            width:'11%'},
      {id:5, campo:'Frequência',      width:'11%'},
      {id:6, campo:'Último teste',    width:'11%'},
      {id:7, campo:'Teste operação',  width:'11%'},
      {id:8, campo:'Teste desenho',   width:'11%'},
    ],
    tdControles: [
      {id:1, Controles:'ÁREA01 - C1 - Conciliação	', Categoria:'Preventivo', Objetivo:'Conformidade', Tipo:'Key Control', Frequencia:'Quinzenal',  ultimoteste:'15/05/2021', operacao:'Melhoria', desenho:'Divergência'},
      {id:2, Controles:'ÁREA01 - C2 - Normatização', Categoria:'Preventivo', Objetivo:'Conformidade', Tipo:'ELC',         Frequencia:'Contínuo',   ultimoteste:'01/09/2021', operacao:'Ok',       desenho:'Ok'},
      {id:3, Controles:'ÁREA01 - C3 - Alçadas	',     Categoria:'Preventivo', Objetivo:'Operacional',  Tipo:'Key Control', Frequencia:'Contínuo',   ultimoteste:'',           operacao:'',         desenho:''},
      {id:4, Controles:'ÁREA01 - C4 - Monitoramento',Categoria:'Detectivo',  Objetivo:'Conformidade', Tipo:'Key Control', Frequencia:'Mensal',     ultimoteste:'18/10/2021', operacao:'Ok',       desenho:'Ok'},
    ]
  }
],
},
]
}
];


tratamento=[
  {id:1, nome:'Evitar',       check:false},
  {id:2, nome:'Mitigar',      check:true},
  {id:3, nome:'Compartilhar', check:false},
  {id:4, nome:'Aceitar',      check:false},
  ];
  
  tabDesenhoProb = [
  {
    id: 1, tab: 'tab15', for:'t15', title:'Probabilidade',
    thTabela: [
      {id:1, campo:'Desenho do Controle',   width:'32%'},
      {id:2, campo:'Operação do Controle',  width:'32%'},
      {id:3, campo:'Rating',                width:'32%'},
    ],
    tdDesenho: [
      {id:1, Desenho:'Excelente',    valDesenho:10,  selected:false,   },
      {id:2, Desenho:'Bom',          valDesenho:8,   selected:false,  },
      {id:3, Desenho:'Razoável',     valDesenho:6,   selected:true,   },
      {id:4, Desenho:'Insuficiente', valDesenho:4,   selected:false,  },
      {id:5, Desenho:'Inexistente',  valDesenho:2,   selected:false,  },
      ],
    tdOperacao: [
      {id:1, Operacao:'Totalmente Efetivo',   valOperacao:5, selected:false,  },
      {id:2, Operacao:'Efetivo',              valOperacao:4,  selected:false, },
      {id:3, Operacao:'Parcialmente Efetivo', valOperacao:3,  selected:true,  },
      {id:4, Operacao:'Inefetivo',            valOperacao:2,  selected:false, },
      {id:5, Operacao:'Inexistente',          valOperacao:1,  selected:false, },
    ]
  }
];

  tabDesenhoImpac = [
  {
    id: 1, tab: 'tab15', for:'t15', title:'Impacto',
    thTabela: [
      {id:1, campo:'Desenho do Controle',   width:'32%'},
      {id:2, campo:'Operação do Controle',  width:'32%'},
      {id:3, campo:'Rating',                width:'32%'},
    ],
    tdDesenho: [
      {id:1, Desenho:'Excelente',    valDesenho:10,  selected:false,   },
      {id:2, Desenho:'Bom',          valDesenho:8,   selected:false,  },
      {id:3, Desenho:'Razoável',     valDesenho:6,   selected:false,  },
      {id:4, Desenho:'Insuficiente', valDesenho:4,   selected:true,   },
      {id:5, Desenho:'Inexistente',  valDesenho:2,   selected:false,  },
      ],
    tdOperacao: [
      {id:1, Operacao:'Totalmente Efetivo',   valOperacao:5, selected:false,  },
      {id:2, Operacao:'Efetivo',              valOperacao:4,  selected:false  },
      {id:3, Operacao:'Parcialmente Efetivo', valOperacao:3,  selected:false, },
      {id:4, Operacao:'Inefetivo',            valOperacao:2,  selected:true   },
      {id:5, Operacao:'Inexistente',          valOperacao:1,  selected:false  },
    ]
  }
  ];
  


constructor(private modalService: BsModalService) {
  this.items = Array(2).fill(0);
}

ngOnInit(): void {
  
}

openModal(template: TemplateRef<any>) {
  this.modalRef = this.modalService.show(template,
    Object.assign({}, { class: 'gray modal-lg' }));
  }
  
  desenhoIner = 'Razoável';
  desenhoResid = 'Parcialmente Efetivo';
  operacaoIner = '';
  operacaoResid = '';
  ratingProb='A';
  ratingImpa='A';
  
  probDesenho(valor) {
    this.desenhoIner = valor;
    console.log('probDesenho: ' + this.desenhoIner);
    this.calcRatingProb();
  }
  probOperacao(valor) {
    this.operacaoIner = valor;
    console.log('probOperacao: '+this.operacaoIner);
    this.calcRatingProb();
  }
  impaDesenho(valor) {
    this.desenhoResid = valor;
    console.log('impaDesenho: '+this.desenhoResid);
    this.calcRatingImpa();
  }
  impaOperacao(valor) {
    this.operacaoResid = valor;
    console.log('impaOperacao: '+this.operacaoResid);
    this.calcRatingImpa();
  }

  calcRatingProb() {
    if (this.desenhoIner === 'Excelente' && this.operacaoIner === 'Totalmente Efetivo') {
      this.ratingProb = 'A+'

    }  
    if ((this.desenhoIner === 'Excelente' && this.operacaoIner === 'Efetivo') ||
      (this.desenhoIner === 'Bom' && this.operacaoIner === 'Efetivo') ||
      (this.desenhoIner === 'Bom' && this.operacaoIner === 'Totalmente Efetivo') ) {
      this.ratingProb = 'A'

    }  
    if ((this.desenhoIner === 'Razoável' && this.operacaoIner === 'Totalmente Efetivo') ||
      (this.desenhoIner === 'Razoável' && this.operacaoIner === 'Efetivo') ||
      (this.desenhoIner === 'Excelente' && this.operacaoIner === 'Parcialmente Efetivo') ||
      (this.desenhoIner === 'Bom' && this.operacaoIner === 'Parcialmente Efetivo') ) {
      this.ratingProb = 'B'

    }  
    if ((this.desenhoIner === 'Excelente' && this.operacaoIner === 'Inefetivo') ||
      (this.desenhoIner === 'Bom' && this.operacaoIner === 'Inefetivo') ||
      (this.desenhoIner === 'Razoável' && this.operacaoIner === 'Parcialmente Efetivo') ||
      (this.desenhoIner === 'Insuficiente' && this.operacaoIner === 'Totalmente Efetivo') ||
      (this.desenhoIner === 'Insuficiente' && this.operacaoIner === 'Efetivo') ||
      (this.desenhoIner === 'Insuficiente' && this.operacaoIner === 'Parcialmente Efetivo') ||
      (this.desenhoIner === 'Razoável' && this.operacaoIner === 'Inefetivo') ) {
      this.ratingProb = 'C'
    }  
    if ((this.desenhoIner === 'Excelente' && this.operacaoIner === 'Inexistente') ||
      (this.desenhoIner === 'Bom' && this.operacaoIner === 'Inexistente') ||
      (this.desenhoIner === 'Razoável' && this.operacaoIner === 'Inexistente') ||
      (this.desenhoIner === 'Insuficiente' && this.operacaoIner === 'Inefetivo') ||
      (this.desenhoIner === 'Inexistente' && this.operacaoIner === 'Totalmente Efetivo') ||
      (this.desenhoIner === 'Insuficiente' && this.operacaoIner === 'Inexistente') ||
      (this.desenhoIner === 'Inexistente' && this.operacaoIner === 'Parcialmente Efetivo') ||
      (this.desenhoIner === 'Inexistente' && this.operacaoIner === 'Inefetivo') ||
      (this.desenhoIner === 'Inexistente' && this.operacaoIner === 'Inexistente') ||
      (this.desenhoIner === 'Inexistente' && this.operacaoIner === 'Efetivo') ) {
      this.ratingProb = 'D'
    }
  }

  calcRatingImpa() {
    if (this.desenhoResid === 'Excelente' && this.operacaoResid === 'Totalmente Efetivo') {
      this.ratingImpa = 'A+'

    }  
    if ((this.desenhoResid === 'Excelente' && this.operacaoResid === 'Efetivo') ||
      (this.desenhoResid === 'Bom' && this.operacaoResid === 'Efetivo') ||
      (this.desenhoResid === 'Bom' && this.operacaoResid === 'Totalmente Efetivo') ) {
      this.ratingImpa = 'A'

    }  
    if ((this.desenhoResid === 'Razoável' && this.operacaoResid === 'Totalmente Efetivo') ||
      (this.desenhoResid === 'Razoável' && this.operacaoResid === 'Efetivo') ||
      (this.desenhoResid === 'Excelente' && this.operacaoResid === 'Parcialmente Efetivo') ||
      (this.desenhoResid === 'Bom' && this.operacaoResid === 'Parcialmente Efetivo') ) {
      this.ratingImpa = 'B'

    }  
    if ((this.desenhoResid === 'Excelente' && this.operacaoResid === 'Inefetivo') ||
      (this.desenhoResid === 'Bom' && this.operacaoResid === 'Inefetivo') ||
      (this.desenhoResid === 'Razoável' && this.operacaoResid === 'Parcialmente Efetivo') ||
      (this.desenhoResid === 'Insuficiente' && this.operacaoResid === 'Totalmente Efetivo') ||
      (this.desenhoResid === 'Insuficiente' && this.operacaoResid === 'Efetivo') ||
      (this.desenhoResid === 'Insuficiente' && this.operacaoResid === 'Parcialmente Efetivo') ||
      (this.desenhoResid === 'Razoável' && this.operacaoResid === 'Inefetivo') ) {
      this.ratingImpa = 'C'
    }  
    if ((this.desenhoResid === 'Excelente' && this.operacaoResid === 'Inexistente') ||
      (this.desenhoResid === 'Bom' && this.operacaoResid === 'Inexistente') ||
      (this.desenhoResid === 'Razoável' && this.operacaoResid === 'Inexistente') ||
      (this.desenhoResid === 'Insuficiente' && this.operacaoResid === 'Inefetivo') ||
      (this.desenhoResid === 'Inexistente' && this.operacaoResid === 'Totalmente Efetivo') ||
      (this.desenhoResid === 'Insuficiente' && this.operacaoResid === 'Inexistente') ||
      (this.desenhoResid === 'Inexistente' && this.operacaoResid === 'Parcialmente Efetivo') ||
      (this.desenhoResid === 'Inexistente' && this.operacaoResid === 'Inefetivo') ||
      (this.desenhoResid === 'Inexistente' && this.operacaoResid === 'Inexistente') ||
      (this.desenhoResid === 'Inexistente' && this.operacaoResid === 'Efetivo') ) {
      this.ratingImpa = 'D'
    }
  }

  
  
}
