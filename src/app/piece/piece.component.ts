import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {
  
  public pieces;
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getPiece();
  }
  getPiece() {
      this.http.get('http://localhost:5500/piece/').subscribe(
          data => { this.pieces = data},
          err => console.error(err),
       () => console.log('done loading modele')
     );
   }

}
