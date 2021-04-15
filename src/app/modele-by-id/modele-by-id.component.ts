/*
   @raphabiz
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-modele-by-id',
  templateUrl: './modele-by-id.component.html',
  styleUrls: ['./modele-by-id.component.css']
})
export class ModeleByIdComponent implements OnInit {
  public modeles;
  public tab;

  constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location) {
  }
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id1');
    this.getModeleById(id);
  }
  getModeleById(id1) {
    this.http.get('http://localhost:5500/modele/' + id1).subscribe(
      data => {
        this.modeles = data
        let arr = [];
        arr.push(this.modeles.idPiece);
        this.tab = arr;
        console.log(this.tab);
      },
      err => console.error(err),
      () => console.log('done loading modele')
    );
  }
  backClicked() {
    this.location.back();
  }
}
