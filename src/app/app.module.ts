/*
   @raphabiz
*/

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModeleComponent } from './modele/modele.component';
import { HttpClientModule } from '@angular/common/http';
import { PieceComponent } from './piece/piece.component';
import { ModeleByIdComponent } from './modele-by-id/modele-by-id.component';

const appRoutes:Routes =[
  {path: 'modele', component : ModeleComponent},
  {path: 'modele/:id1', component : ModeleByIdComponent},
  {path: 'modele/:id1/piece/:id2', component : PieceComponent}
];
@NgModule({
  declarations: [
    AppComponent,
    ModeleComponent,
    PieceComponent,
    ModeleByIdComponent
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
