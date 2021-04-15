/*
   @raphabiz
*/

import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})

export class PieceComponent implements OnInit {
  public piece;
  public modele;
  constructor(private http: HttpClient, private route: ActivatedRoute, private location: Location) { }

  ngOnInit() {
    const ide = this.route.snapshot.paramMap.get('id2');
    this.getPieceById(ide);

  }
  getPieceById(id2) {
    this.http.get('http://localhost:5500/piece/' + id2).subscribe(
      data => { this.piece = data },
      err => console.error(err),
      () => console.log('done loading modele')
    );
  }
  backClicked() {
    this.location.back();
  }



}
