import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-piece',
  templateUrl: './piece.component.html',
  styleUrls: ['./piece.component.css']
})
export class PieceComponent implements OnInit {
  public piece;
  public modele;
  constructor(private http: HttpClient) { }

  ngOnInit(){
    this.getPiece();
    this.getModele();
  }
  getPiece() {
      this.http.get('http://localhost:5500/piece/').subscribe(
          data => { this.piece = data},
          err => console.error(err),
       () => console.log('done loading modele')
     );
     
     
   }
   getModele() {
    this.http.get('http://localhost:5500/modele/').subscribe(
        data => { this.modele = data},
        err => console.error(err),
     () => console.log('done loading modele')
   );
 }


}
