import { Component, OnInit } from '@angular/core';
import {Filme} from '../../filme';
import {FilmeService} from '../filme.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-inserir',
  templateUrl: './inserir.component.html',
  styleUrls: ['./inserir.component.css']
})
export class InserirComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
}
