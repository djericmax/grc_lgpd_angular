import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fluxodados',
  templateUrl: './fluxodados.component.html',
  styleUrls: ['./fluxodados.component.css']
})
export class FluxodadosComponent implements OnInit {

  titulotela = 'FLUXO DE DADOS';
  subtitulotela ='Mapeamento dos Fluxos de dados';
  caminho = 'Processos / LGPD / Fluxo de Dados';

  user = '/assets/imgs/user.png';

  processos=[
    [ {id:1, nome:'Departamento Pessoal',
    subProcessoN1:[
          {id:1, nomeSPN1:'Recursos Humanos',
          subProcessoN2:[
            {id:1, nomeSPN2:'Recrutamento',
            subProcessoN3: [
              {id:1, nomeSPN3:'Recrutamento Bahia',}
            ] } ]
          },
          {id:2, nomeSPN1:'Contabilidade',
          subProcessoN2:[
            {id:1, nomeSPN2:'Contas à pagar',
            subProcessoN3:[
              {id:1, nomeSPN3:'Orçamento Bahia',}
            ] } ]
          },
        ] } ],
    {id:2, nome:'Produção'},
    {id:3, nome:'Vendas'},
  ];




  tabs = [
    { id: 1, for:'t1', title:'Coleta de dados',
      descricao: [
        {id:1, pergunta:'Dados pessoais faltantes?'},
        {id:2, pergunta:'Documentação estrangeira?'},
        {id:3, pergunta:'Aprovado para Seleção?'},
      ]     },
    { id: 2, for:'t2', title:"Armazenamento",
      descricao: 'Armazenamento teria que ser calculada de alguma forma para que tivesse uma boa aparência, mas isso parece funcionar bem. Não acho que posso alterar o css no conteúdo do iframe dinamicamente, pois há implicações de segurança. Eu adoraria se você pudesse adicionar algo à solicitação para permitir que um fator de escala fosse passado para o visualizador do relatório. Anexei uma captura de tela do relatório ampliado no Firefox. Obrigado Chris.'     },
    { id: 3, for:'t3', title: "Processamento",
      descricao :  'Processamento está funcionando :) Isso é o que eu fiz. Crie um arquivo css com seus estilos nele. use JQuery para obter o conteúdo do iframe do reportviewer - isso está OK, pois não é entre domínios e, portanto, não há problemas de segurança (pelo menos no FireFox). Anexe um novo link css à seção head do conteúdo do iframe. Anexe a classe de zoom ao corpo do conteúdo do iframe.'      },
     { id: 4, for:'t4', title: "Análise e Aplicação",
      descricao :  'Análise e Aplicação cookies para personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Alguns desses cookies também ajudam a melhorar a experiência do usuário em nossos sites, auxiliam na navegação e na capacidade de fornecer feedback e auxiliam em nossos esforços promocionais e de marketing. Leia nossa Política de Cookies para uma descrição mais detalhada e clique no botão de configurações para personalizar como o site usa cookies para você.'      },
     { id: 5, for:'t5', title: "Relacionamento",
      descricao :  'Relacionamento cookies para personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Alguns desses cookies também ajudam a melhorar a experiência do usuário em nossos sites, auxiliam na navegação e na capacidade de fornecer feedback e auxiliam em nossos esforços promocionais e de marketing. Leia nossa Política de Cookies para uma descrição mais detalhada e clique no botão de configurações para personalizar como o site usa cookies para você.'      },
     { id: 6, for:'t6', title: "Exclusão",
      descricao :  'Exclusão cookies para personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Alguns desses cookies também ajudam a melhorar a experiência do usuário em nossos sites, auxiliam na navegação e na capacidade de fornecer feedback e auxiliam em nossos esforços promocionais e de marketing. Leia nossa Política de Cookies para uma descrição mais detalhada e clique no botão de configurações para personalizar como o site usa cookies para você.'      },
     { id: 7, for:'t7', title: "Incidentes",
      descricao :  'Incidentes cookies para personalizar conteúdo e anúncios, fornecer recursos de mídia social e analisar nosso tráfego. Alguns desses cookies também ajudam a melhorar a experiência do usuário em nossos sites, auxiliam na navegação e na capacidade de fornecer feedback e auxiliam em nossos esforços promocionais e de marketing. Leia nossa Política de Cookies para uma descrição mais detalhada e clique no botão de configurações para personalizar como o site usa cookies para você.'      }
  ];



  constructor() { }

  ngOnInit() {
    console.log(this.tabs);
  }

  PrintElem(div: any){
    let array = this.tabs;

    var mywindow = window.open('', 'PRINT', 'height=720,width=1000');

    mywindow.document.write('<html><head><title>' + document.title  + '</title>');
    mywindow.document.write('</head><body >');

    array.forEach((nos) => {
      mywindow.document.write(nos.title);

      mywindow.document.write('<p style="text-align: justify;">'+nos.desc+'</p><hr>');
    });





    // mywindow.document.write(document.getElementById(div).innerHTML);
    mywindow.document.write('</body></html>');
    mywindow.document.close();

    mywindow.focus();
    mywindow.print();
    // mywindow.close();

    return true;
  }
}
