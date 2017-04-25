import { Component, OnInit } from '@angular/core';
import { HeroesService, Heroe } from "../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styles: []
})
export class HeroesComponent implements OnInit {

  heroes:Heroe[] = [];
  onChange(event) {
    var files = event.srcElement.files;
    console.log(files[0].name);
  }
  constructor(private _heroesServicies:HeroesService,
              private _router:Router) {


   }

  ngOnInit() {
    this.heroes = this._heroesServicies.getHerores();
    // console.log(this.heroes);
    

  }
  verHeroe( idx:number){
    this._router.navigate(['/heroe',idx])
    
  }

}
