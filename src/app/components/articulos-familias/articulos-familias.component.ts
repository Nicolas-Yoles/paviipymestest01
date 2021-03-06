import { Component, OnInit } from '@angular/core';
import {ArticuloFamilia, ArticulosFamilias} from "src/app/models/articulo-familia"
import { MockArticulosFamiliasService } from 'src/app/services/mock-articulos-familias.service';
import { ArticulosFamiliasService } from 'src/app/services/articulos-familias.service';

@Component({
  selector: 'app-articulos-familias',
  templateUrl: './articulos-familias.component.html',
  styleUrls: ['./articulos-familias.component.css']
})
export class ArticulosFamiliasComponent implements OnInit {

  Items = ArticulosFamilias;
  Titulo = "Articulo Familia"

  constructor(
    // private articulosFamiliasService: MockArticulosFamiliasService
    private articulosFamiliasService: ArticulosFamiliasService
  ) { }

  ngOnInit(): void {
    this.GetFamiliasArticulos();
  }

  GetFamiliasArticulos(){
    this.articulosFamiliasService.get()
    .subscribe((res:ArticuloFamilia[])=>{
      this.Items=res;
    })
  }
}
