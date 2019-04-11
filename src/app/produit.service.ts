import { Injectable } from '@angular/core';
import {Produit,tab} from './produit/model';

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  listeProduits: Array<Produit> = tab;

  constructor() { }

  list(){
  	return this.listeProduits;
  }

  add(produit:Produit){
  	this.listeProduits.push(produit);
  }
}
