import { Component, OnInit } from '@angular/core';
import { ApiService } from './../../service/api.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})

export class UsuariosComponent implements
  OnInit{
  Usuario:any = [];

  constructor(private apiService: ApiService)
  {
    this.readUsuario();
  }

  ngOnInit() {}

  readUsuario(){
    this.apiService.getUsuarios().subscribe((data => {
      this.Usuario = data;
    }))
  }

  addBlacklist(usuario, index) {
    if(window.confirm('Deseja bloquear este usuário?')) {
      this.apiService.addBlacklist(usuario._id).subscribe((data) => {
        this.Usuario.splice(index, 1);
      })
    }
  }

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
