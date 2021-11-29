import { Component, OnInit } from '@angular/core';
import {MatDialog} from '@angular/material/dialog';


@Component({
  selector: 'app-dialoginvent',
  templateUrl: './dialoginvent.component.html',
  styleUrls: ['./dialoginvent.component.css']
})
export class DialoginventComponent implements OnInit {

  titulotela =  'Cadastrar Campos do Inventário';
  constructor() { }

  ngOnInit() {
    console.log('abriu a correta agora');
  }

}
