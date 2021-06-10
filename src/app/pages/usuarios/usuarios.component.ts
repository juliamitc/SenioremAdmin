import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent {
  displayedColumns: string[] = ['email', 'num_denuncia', 'ativo'];
  dataSource = ELEMENT_DATA;
}


export interface PeriodicElement {
  email: string;
  num_denuncia: number;
  tipo_login: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {
   email: 'usuario@teste.com',
    num_denuncia: 3,
    tipo_login: 'facebook'
  },
  {
   email: 'julia@teste.com',
    num_denuncia: 9,
    tipo_login: 'google'
  },
  {
   email: 'gabriel@teste.com',
    num_denuncia: 5,
    tipo_login: 'google'
  },
  {
   email: 'lucas@teste.com',
    num_denuncia: 3,
    tipo_login: 'google'
  },  {
   email: 'thiago@teste.com',
    num_denuncia: 7,
    tipo_login: 'facebook'
  },
  {
   email: 'maria@teste.com',
    num_denuncia: 2,
    tipo_login: 'google'
  },  {
   email: 'testeadm@teste.com',
    num_denuncia: 0,
    tipo_login: 'facebook'
  },
  {
   email: 'seniorem@teste.com',
    num_denuncia: 0,
    tipo_login: 'facebook'
  },
];
