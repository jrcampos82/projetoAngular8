import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Filme} from '../../filme';
import {FilmeService} from '../filme.service';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  filmes: Observable<Filme[]>;

  constructor(private filmeService: FilmeService) { }

  ngOnInit() {
    this.reloadData();
  }

  reloadData() {
    this.filmes = this.filmeService.getFilmesList();
  }


}
