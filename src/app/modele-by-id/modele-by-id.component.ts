import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-modele-by-id',
  templateUrl: './modele-by-id.component.html',
  styleUrls: ['./modele-by-id.component.css']
})
export class ModeleByIdComponent implements OnInit {
  public modeles;
 // id1 : string;

  constructor(private http: HttpClient,private route: ActivatedRoute) {
    //this.id1 = this.route.snapshot.params['id1'];
   }
  ngOnInit(){
    const id = this.route.snapshot.paramMap.get('id1');
      this.getModeleById(id); 
  }
  getModeleById(id1) {
    this.http.get('http://localhost:5500/modele/'+id1).subscribe(
        data => { this.modeles = data},
        err => console.error(err),
     () => console.log('done loading modele')
   );
 }
}
