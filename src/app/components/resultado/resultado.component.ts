import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { HeroesService } from "../../services/heroes.service";

@Component({
  selector: 'app-resultado',
  templateUrl: './resultado.component.html'

})
export class ResultadoComponent implements OnInit {
  heroes:any[] = []
  termino:string;
  showMe:boolean = true;
  constructor(private activatedRoute:ActivatedRoute,
              private _heroresService: HeroesService) { 
  
  }

  ngOnInit() {
     this.activatedRoute.params.subscribe(params =>{
      this.termino = params['termino']

      console.log(params['termino'].length + " es");
      
      this.heroes = this._heroresService.buscarHeroes(params['termino']);

      console.log(this.heroes.length);
      
      if(params['termino'].length == 0){
        this.showMe = false
      }else {
        this.showMe = true
      }
    })
  }
}
