import { Component, OnInit } from '@angular/core';
import {PersonasService} from '../../../services/personas.service';
import {PagosService} from '../../../services/pagos.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {



  constructor(private _personasService:PersonasService,
  private _pagosService:PagosService) { }

  ngOnInit() {

    this._personasService.cliente().subscribe();
    this._pagosService.GetpagosService().subscribe();
  }

}
