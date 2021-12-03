import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluxodados',
  templateUrl: './fluxodados.component.html',
  styleUrls: ['./fluxodados.component.css']
})
export class FluxodadosComponent implements OnInit {

  empresaSelect = 1;
  nivelProcess = 4;
  titulotela = 'FLUXO DE DADOS';
  subtitulotela ='Mapeamento dos Fluxos de dados';
  caminho = 'Processos / LGPD / Fluxo de Dados';

  user = '/assets/imgs/user.png';
  seta = '/assets/imgs/fluxo/seta.png';

  totalLengthApont: any;
  pageApont: number = 1;

  tabsApontamentos = [
    {
      id: 1, tab: 'tab7', for:'t7', title:'Apontamentos',
      thTabela: [
        {id:1, campo:'Apontamento',   width:'70%'},
        {id:2, campo:'Classificação', width:'25%'},
      ],
      tdDados: [
        {id:1, apontamento:'Perda de Acessos',          classif:'Médio'},
        {id:2, apontamento:'Máquinas paradas',          classif:'Baixo'},
        {id:3, apontamento:'Sem rede de acesso',        classif:'Médio'},
        {id:4, apontamento:'Funcionários dispensados',  classif:'Alto'},
        {id:5, apontamento:'Coleta de dados errada',    classif:'Médio'},
        {id:6, apontamento:'Armazenamento em nuvem',    classif:'Alto'},
        {id:7, apontamento:'Análise incompleta',        classif:'Baixo'},
        {id:8, apontamento:'Relacionamento de dados',   classif:'Médio'},
      ]
    }
  ];

  fluxos = [
    {id: 1, camada:'Coleta de dados pessoais',                            fundo:'#8E4311', cor:'#fff', seta:true},
    {id: 2, camada:'Armazenamento dos dados',                             fundo:'#D26317', cor:'#fff', seta:true},
    {id: 3, camada:'Processamento e compartilhamento',                    fundo:'#FB8738', cor:'#fff', seta:true},
    {id: 4, camada:'Análise e aplicação dos dados',                       fundo:'#FFBD8D', cor:'#333', seta:true},
    {id: 5, camada:'Comunicação e Relacionamento com o Titular de Dados', fundo:'#FFD8B9', cor:'#333', seta:true},
    {id: 6, camada:'Exclusão dos Dados',                                  fundo:'#FFF3E3', cor:'#333', seta:false},
  ];

  empresas = [
    {id:1, nivel:0, empresa:'GRC Team', responsavel:[{id:1, nome:'Henrique Stablin', email:'henrique.stabelin@grcteam.com.br'},{id:2, nome:'Julio Oliveira', email:'julio.oliveira@gmail.com.br'},{id:3, nome:'Carlos Ligeiro', email:'carlos.ligeiro@e-xyon.com.br'}], processo:[
      {id:1, nivel: 1, nomeProcesso:'Rec. Humanos',   subProcessoN1:[{id:1, nivel:2, nomeSPN1:'Gestão de Pessoas', subProcessoN2: [{id:1, nivel:3, nomeSPN2:'Recrutamento', subProcessoN3: [{id:1, nivel:4, nomeSPN3:'Recrutamento Bahia', }, {id:2,nivel:4, nomeSPN3:'Recrutamento São Paulo',  }, {id:3,nivel:4, nomeSPN3:'Recrutamento Rio de Janeiro', }] }, {id:1, nivel:3, nomeSPN2:'Admissão',   subProcessoN3: [{id:1, nivel:4, nomeSPN3:'Admissão Bahia', }, {id:2, nivel:4, nomeSPN3:'Admissão São Paulo' }, {id:3, nivel:4, nomeSPN3:'Admissão Rio de Janeiro'},] },] },] },
      {id:2, nivel: 1, nomeProcesso:'Depto Pessoal',  subProcessoN1:[{id:1, nivel:2, nomeSPN1:'Contratos de Trab', subProcessoN2: [{id:1, nivel:3, nomeSPN2:'Contratação',  subProcessoN3: [{id:1, nivel:4, nomeSPN3:'Contratação Bahia',  }, {id:2,nivel:4, nomeSPN3:'Contratação São Paulo',   }, {id:3,nivel:4, nomeSPN3:'Contratação Rio de Janeiro',  }] }, {id:1, nivel:3, nomeSPN2:'Documentos', subProcessoN3: [{id:1, nivel:4, nomeSPN3:'Doctos Bahia',   }, {id:2, nivel:4, nomeSPN3:'Doctos São Paulo'   }, {id:3, nivel:4, nomeSPN3:'Doctos Rio de Janeiro'  },] },] },] },
      {id:3, nivel: 1, nomeProcesso:'Contabilidade',  subProcessoN1:[{id:1, nivel:2, nomeSPN1:'Contas à pagar',    subProcessoN2: [{id:1, nivel:3, nomeSPN2:'Orçamento',    subProcessoN3: [{id:1, nivel:4, nomeSPN3:'Orçamento Bahia',    }] }] }] },
    ]},
    {id:2, nivel:0, empresa:'E-xyon',  responsavel:[{id:1, nome:'Carlos Ligeiro', email:'carlos.ligeiro@e-xyon.com.br'},{id:2, nome:'Henrique Stablin', email:'henrique.stabelin@grcteam.com.br'},{id:3, nome:'Julio Oliveira', email:'julio.oliveira@gmail.com.br'}], processo:[
      {id:1, nivel: 1, nomeProcesso:'Depto Pessoal',  subProcessoN1:[{id:1, nivel:2, nomeSPN1:'RH',             subProcessoN2: [{id:1, nivel:3, nomeSPN2:'Recrutamento', subProcessoN3: [{id:1, nivel:4, nomeSPN3:'Recrutamento Bahia', }] }] }] },
      {id:2, nivel: 1, nomeProcesso:'Contabilidade',  subProcessoN1:[{id:1, nivel:2, nomeSPN1:'Contas à pagar', subProcessoN2: [{id:1, nivel:3, nomeSPN2:'Orçamento',    subProcessoN3: [{id:1, nivel:4, nomeSPN3:'Orçamento Bahia',    }] }] }] },
    ] },
    {id:3, nivel:0, empresa:'Bradesco', responsavel:[{id:1, nome:'Julio Oliveira', email:'julio.oliveira@gmail.com.br'},{id:2, nome:'Carlos Ligeiro', email:'carlos.ligeiro@e-xyon.com.br'}], processo:[
      {id:1, nivel: 1, nomeProcesso:'Depto Pessoal',  subProcessoN1:[{id:1, nivel:2, nomeSPN1:'RH',             subProcessoN2: [{id:1, nivel:3, nomeSPN2:'Recrutamento', subProcessoN3: [{id:1, nivel:4, nomeSPN3:'Recrutamento Bahia', }] }] }] },
      {id:2, nivel: 1, nomeProcesso:'Contabilidade',  subProcessoN1:[{id:1, nivel:2, nomeSPN1:'Contas à pagar', subProcessoN2: [{id:1, nivel:3, nomeSPN2:'Orçamento',    subProcessoN3: [{id:1, nivel:4, nomeSPN3:'Orçamento Bahia',    }] }] }] },
    ] }
  ] ;

  tabsColeta = [
    {
      id: 1, tab: 'tab1', for:'t1', title:'Coleta de dados',
      perguntas:[
        {id:1,
          perg:'Qual é o objetivo da LGPD e a quem ela se destina?',
          resp:'A LGPD reúne aspectos discutidos há algum tempo aqui no Brasil e que estavam fragmentados em legislações diversas – como o Marco Civil da Internet – e foi criada com o objetivo de proporcionar ao cidadão brasileiro um controle maior sobre o tratamento de seus dados pessoais. Para isso, ela coloca regras que devem ser seguidas tanto por empresas privadas quanto públicas. Ou seja: vale para qualquer negócio.'
        },
        {id:2,
          perg:'Mas o que se entende por “dados pessoais”?',
          resp:'De acordo com a lei, um dado pessoal é todo aquele que pode vir a identificar uma pessoa física, como número do CPF, data de nascimento, endereço residencial ou e-mail. Mas a LGPD também traz o conceito de dado pessoal sensível, e aprofunda as restrições em relação a seu uso, por se tratarem de dados com maior potencial discriminatório. São eles: origem racial ou étnica; convicção religiosa; opinião política; filiação a sindicato ou a organização de caráter religioso, filosófico ou político; saúde; vida sexual; genético ou biométrico.'
        },
        {id:3,
          perg:'O que compreende o tratamento destes dados?',
          resp:'O tratamento de dados é um conceito abrangente, que inclui qualquer tipo de manipulação realizada com informações pessoais. Processos comuns a diversos tipos de empresas incluem, geralmente, a coleta, a reprodução, o acesso, o armazenamento e a distribuição de dados pessoais. Um exemplo simples? A criação de uma lista de e-mails para sua newsletter.'
        },
        {id:4,
          perg:'Em quais casos de tratamento de dados pessoais a lei é aplicada?',
          resp:'A lei se aplica a qualquer operação que envolve o tratamento de dados pessoais e que seja realizada em território brasileiro. Mas e se a empresa for sediada no exterior? Caso ela ofereça bens ou serviços para pessoas localizadas no Brasil e, para isso, coletar dados de usuários, a LGPD também se aplica!'
        },
        {id:5,
          perg:'Quais são as principais diretrizes da LGPD?',
          resp:'A LGPD traz alguns princípios que devem ser respeitados no tratamento de dados pessoais, como: finalidade, necessidade, não discriminação e segurança. Isto significa que a empresa precisa seguir algumas determinações. Em resumo, os dados pessoais só podem ser coletados com o consentimento do titular, que precisa ser informado da finalidade da coleta. É do titular o direito de acesso aos dados coletados, assim como a solicitação de correção de informações, de exclusão, de portabilidade ou de revogação do consentimento.'
        },
        {id:6,
          perg:'E o que a lei entende por “consentimento”?',
          resp:'O consentimento do titular é a permissão dada por meio de uma declaração para que a empresa possa coletar e utilizar dados específicos para uma finalidade previamente determinada e esclarecida. Ou seja, é preciso ser sempre claro quando se explica como os dados serão utilizados e também se ater à finalidade prevista.'
        },
        {id:7,
          perg:'E quando a finalidade muda? O que a empresa deve fazer?',
          resp:'Se a sua empresa precisa de um dado pessoal já coletado com o consentimento do titular para outra finalidade de uso, é necessário informar à pessoa sobre este novo intuito. Mas somente informar não basta: em casos assim, você deve atualizar o consentimento do titular.'
        },
        {id:8,
          perg:'Quem fiscaliza o cumprimento da lei?',
          resp:'O controle da LGPD será feito pela Autoridade Nacional de Proteção de Dados (ANPD). Este órgão será criado para fiscalizar o cumprimento da lei, zelar pela proteção de dados pessoais, elaborar diretrizes e também aplicar as sanções em casos de irregularidade.'
        },
      ],
      thTabela: [
        {id:1, campo:'Dados Pessoais',width:'50%'},
        {id:2, campo:'Categoria',     width:'35%'},
        {id:3, campo:'Coletado',      width:'15%'},
      ],
      tdDados: [
        {id:1, dadosPessoais:'CPF',                         categoria:'Dados Comuns', coletado:true, },
        {id:2, dadosPessoais:'RG',                          categoria:'Dados Comuns', coletado:true, },
        {id:3, dadosPessoais:'RNE (estrangeiros)',          categoria:'Dados Comuns', coletado:false,},
        {id:4, dadosPessoais:'Passaporte (estrangeiros)',   categoria:'Dados Comuns', coletado:false,},
        {id:5, dadosPessoais:'Tipo de visto (estrangeiros)',categoria:'Dados Comuns', coletado:false,},
      ]
    }
  ];

  tabsArmazenamento = [
    {
      id: 1, tab: 'tab2', for:'t2', title:'Armazenamento',
      perguntas:[
        {id:1, perg:'Possui senha fraca?',  checked:true},
        {id:2, perg:'Armazenamento em nuvem?',  checked:false},
        {id:3, perg:'Base de dados compartilhada?',     checked:false},
      ],
      thTabela: [
        {id:1, campo:'Sub-Processo',                width:'10%'},
        {id:2, campo:'Nome do Gestor',              width:'15%'},
        {id:3, campo:'Sistema / BD / Cloud / etc',  width:'25%'},
        {id:4, campo:'Armazenamento',               width:'7%'},
        {id:5, campo:'Formas de Integração',        width:'7%'},
        {id:5, campo:'Onde Está Hospedado?',        width:'6%'},
        {id:5, campo:'Quem Fornece?',               width:'6%'},
        {id:5, campo:'Quem Administra?',            width:'6%'},
        {id:5, campo:'Parceiros Envolvidos',        width:'6%'},
        {id:5, campo:'Registros Aproximados',       width:'6%'},
      ],
      tdDados: [
        {id:1, subprocesso:'Faturamento',   nomegestor:'Fernando Bravo', sistema:'VBS(Cadastro)', armazenamento:'Digital', integracao:'WT',   ondeesta:'WT',  fornece:'WT',   administra:'WT',  envolvidos:'WT',  registros:'?'},
        {id:2, subprocesso:'Faturamento',   nomegestor:'Fernando Bravo', sistema:'SGB',           armazenamento:'Digital', integracao:'B/e',  ondeesta:'B/e', fornece:'B/e',  administra:'B/e', envolvidos:'n/a', registros:'?'},
        {id:3, subprocesso:'Contas a Pagar',nomegestor:'Fernando Bravo', sistema:'Linkana - Cadastro Fornecedor e Veiculo (Sistema da WT) - para contato com o fornecedor, upload dos doctos', armazenamento:'Digital', integracao:'', ondeesta:'', fornece:'', administra:'', envolvidos:'', registros:''},
        {id:4, subprocesso:'Contas a Pagar',nomegestor:'Fernando Bravo', sistema:'Fornecedor Genival - Uso de Whatsapp',    armazenamento:'Digital', integracao:'', ondeesta:'', fornece:'', administra:'', envolvidos:'', registros:''},
        {id:5, subprocesso:'RH',            nomegestor:'Fernando Bravo', sistema:'Peoplesoft',    armazenamento:'', integracao:'', ondeesta:'', fornece:'', administra:'', envolvidos:'', registros:''},
        {id:6, subprocesso:'RH',            nomegestor:'Fernando Bravo', sistema:'Drive',         armazenamento:'', integracao:'', ondeesta:'', fornece:'', administra:'Ambev x PwC', envolvidos:'', registros:''},
        {id:7, subprocesso:'RH',            nomegestor:'Fernando Bravo', sistema:'Notebook (HD)', armazenamento:'', integracao:'', ondeesta:'', fornece:'', administra:'', envolvidos:'', registros:''},
        {id:8, subprocesso:'RH',            nomegestor:'Fernando Bravo', sistema:'Pasta na Rede', armazenamento:'', integracao:'', ondeesta:'', fornece:'', administra:'', envolvidos:'', registros:''},
      ]
    }
  ];

  tabsProcessamento = [
    {
      id: 1, tab: 'tab3', for:'t3', title:'Processamento / Compartilhamento',
      perguntas:[
        {id:1, perg:'Compartilhamento com Seguradora?',  checked:true},
        // {id:2, perg:'Documentação estrangeira?',  checked:false},
        // {id:3, perg:'Aprovado para Seleção?',     checked:false},
      ],
      thTabela: [
        // {id:1, campo:'',  width:'30%'},
      ],
      tdDados: [
        // {id:1, Dados:'',},
      ]
    }
  ];

  tabsAnalise = [
    {
      id: 1, tab: 'tab4', for:'t4', title:'Análise / Aplicação / Segmentação',
      perguntas:[
        {id:1, perg:'Segmentação de dados?',  checked:false},
        {id:2, perg:'Quais dados segmentados?',  checked:true},
        // {id:3, perg:'Aprovado para Seleção?',     checked:false},
      ],
      thTabela: [
        // {id:1, campo:'',  width:'30%'},
      ],
      tdDados: [
        // {id:1, Dados:'',},
      ]
    }
  ];

  tabsRelacionamento = [
    {
      id: 1, tab: 'tab0', for:'t0', title:'Relacionamento / Comunicação / Campanhas',
      perguntas:[
        {id:1, perg:'Campanhas ou msg para o funcionario ou candidato?',  checked:false},
        // {id:2, perg:'Quais dados segmentados?',  checked:true},
        // {id:3, perg:'Aprovado para Seleção?',     checked:false},
      ],
      thTabela: [
        // {id:1, campo:'',  width:'30%'},
      ],
      tdDados: [
        // {id:1, Dados:'',},
      ]
    }
  ];

  tabsExclusao = [
    {
      id: 1, tab: 'tab6', for:'t6', title:'Exclusão',
      perguntas:[
        {id:1, perg:'Dados de Candidatos: tempo de retenção?',  checked:false},
        // {id:2, perg:'Quais dados segmentados?',  checked:true},
        // {id:3, perg:'Aprovado para Seleção?',     checked:false},
      ],
      thTabela: [
        // {id:1, campo:'',  width:'30%'},
      ],
      tdDados: [
        // {id:1, Dados:'',},
      ]
    }
  ];

  constructor() { }

  ngOnInit() {
    console.log(this.tabsColeta);
    console.log(this.empresas);

    this.contaAponts();
    this.pegaNivel();

    // this.totalLengthApont = this.tabsApontamentos.tdDados.length;
  }

  contaAponts(){
    this.tabsApontamentos.forEach((data) => {
      this.totalLengthApont = data.tdDados.length;
    });
  }

  pegaNivel(){
    this.empresas.forEach((data) => {
      if (data.nivel === this.nivelProcess) {

      }
      console.log(data);
      // if (data.) {

      // }
    });
  }


}
