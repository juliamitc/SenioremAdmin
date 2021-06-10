import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { PagesComponent } from './pages/pages.component';
import { SidebarComponent } from './pages/sidebar/sidebar.component';
import { HomeComponent } from './pages/home/home.component';
import { BlacklistComponent } from './pages/blacklist/blacklist.component';
import { UsuariosComponent } from './pages/usuarios/usuarios.component';
import { DenunciasComponent } from './pages/denuncias/denuncias.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SharedModule } from './pages/shared/shared.module';
import { HttpClientModule } from '@angular/common/http'
import { ApiService } from './service/api.service';
@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    PagesComponent,
    SidebarComponent,
    HomeComponent,
    BlacklistComponent,
    UsuariosComponent,
    DenunciasComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedModule,
    HttpClientModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
