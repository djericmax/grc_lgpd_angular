import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {

  CodeApi = 0;
    Hub:    any;

    QtdMessageMail  = '';
    QtdMessageAlert = '';
    ListCarrieMessageMail: any[];
    ListCarrieMessageAlert: any[];
    Usuario: any;
    Bandeira = 'pt';

    GetMessage = false;

    user = '/assets/imgs/user.png';
    found = '/assets/imgs/cabs.png';
    colorbar = '/assets/imgs/colorbar.png';
    bandeira = '/assets/imgs/bandeira.png';
    email = '/assets/imgs/email.png';
    mural = '/assets/imgs/mural.png';
    options = '/assets/imgs/options.png';
    voz = '/assets/imgs/voz.png';

  constructor() { }

  ngOnInit(): void {
  }

}
