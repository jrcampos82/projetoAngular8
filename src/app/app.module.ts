import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { UpdateComponent } from './filme/update/update.component';


import { ListarComponent } from './filme/listar/listar.component';
import {InserirComponent} from './filme/inserir/inserir.component';
import {RemoveComponent} from './filme/remove/remove.component';

import {FilmeService} from './filme/filme.service';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
    InserirComponent,
    UpdateComponent,
    RemoveComponent,
    ListarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [FilmeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
