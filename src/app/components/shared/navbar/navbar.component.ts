import { Component, OnInit } from '@angular/core';
// import { HeroesService, Heroe } from "../../../services/heroes.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html'
})
export class NavbarComponent implements OnInit {

  constructor(private _router:Router) { }

  ngOnInit() {
  }

  buscarHeroe(termino:string){
    //console.log(termino);
    this._router.navigate(['/resultado', termino])
    
  }

}
