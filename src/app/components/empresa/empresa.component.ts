import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empresa',
  templateUrl: './empresa.component.html',
  styleUrls: ['./empresa.component.css']
})
export class EmpresaComponent implements OnInit {
  
  titulotela = 'EMPRESAS';
  subtitulotela ='Apresentação do organograma da empresa';
  caminho = 'Mural / EMPRESAS';
  
  user =      '/assets/imgs/user.png';
  workflow =  '/assets/imgs/workflow1.png';
  seta =      '/assets/imgs/fluxo/seta.png';
  colorbar = '/assets/imgs/colorbar.png';
  
  
  // ORGANOGRAMA
  nodes: any = [
    { name: 'Nível 1', cssClass: 'ngx-org-head', image: 'fa fa-user fa-2x', title: 'título 1', childs: [
      
      { name: 'Nível 2', cssClass: 'ngx-org-ceo', image: './assets/imgs/user.png', title: 'Título 2', childs: [ 
          
          { name: 'Nível 3', cssClass: 'ngx-org-head', image: './assets/imgs/user.png', title: 'título 3', childs: [] },
          { name: 'Nível 3', cssClass: 'ngx-org-vp', image: './assets/imgs/user.png', title: 'titulo 4', childs: [] },
          // { name: 'Nível 3', cssClass: 'ngx-org-vp', image: './assets/imgs/user.png', title: 'titulo 5', childs: [] }
        ]
      },
      
      { name: 'Nível 2', cssClass: 'ngx-org-ceo', image: './assets/imgs/user.png', title: 'Título 6', childs: [  
          
          { name: 'Nível 3', cssClass: 'ngx-org-head', image: './assets/imgs/user.png', title: 'título 7', childs: [] },
          { name: 'Nível 3', cssClass: 'ngx-org-vp', image: './assets/imgs/user.png', title: 'titulo 8', childs: [
              { name: 'Nível 4', cssClass: 'ngx-org-head', image: './assets/imgs/user.png', title: 'título 9', childs: [] },
              { name: 'Nível 4', cssClass: 'ngx-org-vp', image: './assets/imgs/user.png', title: 'titulo 10', childs: [] },
            ] },
          { name: 'Nível 3', cssClass: 'ngx-org-vp', image: './assets/imgs/user.png', title: 'titulo 11', childs: [] }
          ]
        },
        
        {
          name: 'Nível 2', cssClass: 'ngx-org-ceo', image: './assets/imgs/user.png', title: 'Título 12', childs: [ 
            
            { name: 'Nível 3', cssClass: 'ngx-org-head', image: './assets/imgs/user.png', title: 'título 13', childs: [] },
            { name: 'Nível 3', cssClass: 'ngx-org-vp', image: './assets/imgs/user.png', title: 'titulo 14', childs: [
              { name: 'Nível 4', cssClass: 'ngx-org-head', image: './assets/imgs/user.png', title: 'título 15', childs: [
                  { name: 'Nível 5', cssClass: 'ngx-org-head', image: './assets/imgs/user.png', title: 'título 23', childs: [] },
                  { name: 'Nível 5', cssClass: 'ngx-org-head', image: './assets/imgs/user.png', title: 'título 24', childs: [] },
              ] },
              { name: 'Nível 4', cssClass: 'ngx-org-vp', image: './assets/imgs/user.png', title: 'titulo 16', childs: [
                    { name: 'Nível 5', cssClass: 'ngx-org-head', image: './assets/imgs/user.png', title: 'título 17', childs: [] },
                    { name: 'Nível 5', cssClass: 'ngx-org-vp', image: './assets/imgs/user.png', title: 'titulo 18', childs: [
                        { name: 'Nível 6', cssClass: 'ngx-org-head', image: './assets/imgs/user.png', title: 'título 19', childs: [] },
                        { name: 'Nível 6', cssClass: 'ngx-org-vp', image: './assets/imgs/user.png', title: 'titulo 20', childs: [
                          { name: 'Nível 7', cssClass: 'ngx-org-head', image: './assets/imgs/user.png', title: 'título 21', childs: [] },
            ] },
            ] },
            ] },
            ] },
            { name: 'Nível 3', cssClass: 'ngx-org-vp', image: './assets/imgs/user.png', title: 'titulo 22', childs: [] }
          ] },
        ] },
        
        // { name: 'Nível 1', cssClass: 'ngx-org-ceo', image: this.user, title: 'título 9', childs: [
        //     { name: 'Nível 2', cssClass: 'ngx-org-ceo', image: this.user, title: 'título 10', },
        //     { name: 'Nível 2', cssClass: 'ngx-org-ceo', image: this.user, title: 'título 11', childs: [
        //         // { name: 'Nível 3', cssClass: 'ngx-org-head', image: this.user, title: 'título 12', childs: [] },
        //         // { name: 'Nível 3', cssClass: 'ngx-org-vp', image: this.user, title: 'título 13', childs: [] },
        //         // { name: 'Nível 3', cssClass: 'ngx-org-vp', image: this.user, title: 'título 14', childs: [] }
        //       ] },
        //     { name: 'Nível 2', cssClass: 'ngx-org-head', image: this.user, title: 'título 15', childs: [
        //         { name: 'Nível 3', cssClass: 'ngx-org-ceo', image: this.user, title: 'título 16' , childs: [] }
        //       ] }
        //   ]
        //   },
        
        // { name: 'Nível 1', cssClass: 'ngx-org-ceo', image: this.user, title: 'título 17', childs: [
        //   { name: 'Nível 2', cssClass: 'ngx-org-ceo', image: this.user, title: 'título 18', },
        //   { name: 'Nível 2', cssClass: 'ngx-org-ceo', image: this.user, title: 'título 19', childs: [
        //         { name: 'Nível 3', cssClass: 'ngx-org-head', image: this.user, title: 'título 20', childs: [] },
        //         { name: 'Nível 3', cssClass: 'ngx-org-vp', image: this.user, title: 'título 21', childs: [] },
        //         { name: 'Nível 3', cssClass: 'ngx-org-vp', image: this.user, title: 'título 22', childs: [] }
        //       ] },
        //   { name: 'Nível 2', cssClass: 'ngx-org-head', image: this.user, title: 'título 23', childs: [
        //         { name: 'Nível 3', cssClass: 'ngx-org-ceo', image: this.user, title: 'título 24', childs: [] }
        //       ] }
        //   ] }
      ];
      // mode: any = 'horizontal';
      // ORGANOGRAMA
      
      constructor() { }
      
      ngOnInit(): void {
        
      }
      
      
    }
    