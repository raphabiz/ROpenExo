/*
   @raphabiz
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-modele',
  templateUrl: './modele.component.html',
  styleUrls: ['./modele.component.css']
})
export class ModeleComponent implements OnInit {
  public modeles;

  constructor(private http: HttpClient) { }
  ngOnInit(){
    this.getModele();
  
  }
  getModele() {
      this.http.get('http://localhost:5500/modele/').subscribe(
          data => { this.modeles = data;

          },
          err => console.error(err),
       () => console.log('done loading modele')
     );
   }
}
