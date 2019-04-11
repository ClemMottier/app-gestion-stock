import { Component, OnInit } from '@angular/core';
import {Produit,tab} from './model';
import {ProduitService} from '../produit.service';
import {ProduitPipe} from './produit.pipe';

@Component({
  selector: 'app-produit',
  templateUrl: './produit.component.html',
  styleUrls: ['./produit.component.css']
})
export class ProduitComponent implements OnInit {

  produits : Array<Produit> = tab;
  produitInfo:Produit;

  constructor(private serviceProduit:ProduitService){ 

  }

   afficherProduit(produit:Produit)
  {
  	 this.produitInfo = produit;
  }

  ngOnInit():void{
  	this.produits = this.serviceProduit.list();
  }

}
