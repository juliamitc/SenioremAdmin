import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BlacklistComponent } from './pages/blacklist/blacklist.component';
import { DenunciasComponent } from './pages/denuncias/denuncias.component';
import { PagesComponent } from './pages/pages.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';


const routes: Routes = [
  {
    //canActivate: [AuthGuard],
    path: '',
    component: PagesComponent,
    children: [
      { path: 'usuarios', component: UsuariosComponent  },
      { path: 'denuncias', component: DenunciasComponent },
      { path: 'blacklist', component: BlacklistComponent },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
