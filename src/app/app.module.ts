import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeleComponent } from './modele/modele.component';
import { HttpClientModule } from '@angular/common/http';
import { PieceComponent } from './piece/piece.component';

const appRoutes:Routes =[
  {path: 'modele', component : ModeleComponent},
  {path: 'piece', component : PieceComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ModeleComponent,
    PieceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
