export class Produit {

	nom : string;
	fournisseur : string;
	emailFournisseur : string;
	listeIngredients : Array<string>;
	description : string;
	age : number;
	conditionConservation : String;
	prix : number;

	constructor(nom : string, fournisseur : string, emailFournisseur : string, listeIngredients : Array<string>, description : string, age : number,
	 conditionConservation : string, prix : number)
	{
		this.nom = nom;
		this.fournisseur = fournisseur;
		this.emailFournisseur = emailFournisseur;
		this.listeIngredients = listeIngredients;
		this.description = description;
		this.age = age;
		this.conditionConservation = conditionConservation;
		this.prix = prix;
	}
}
export const tab : Array<Produit> =  
[
		new Produit(" Frites surgelés "," Picard ","picard@RPZlastreet.com",["Pommes de terre","Huile de colza"]," Pas cher ",1,"Au frais",10),
		new Produit(" Haricots surgelés "," Bonduelle ","bonduelle@RPZlacampagne.com",["Harricots verts","Huile d'olive"]," Pas bons ",2,"Au frais",5),
		new Produit(" Glâces "," Miko ","miko@RPZlepôlenord.com",["Glâce Vanille,Amandes,Sucre"]," La vie ",3,"Au fond de l'estomac",7.50),
		new Produit(" Plats surgelés "," Picard ","carrouf@RPZlesbabos.com",["Choucroute","Saucisses","Lard","Sel"]," ça dépanne ",1.5," ouai ",9.99),
		new Produit(" Poissons panés "," Croustibat ","croustibat@rpztamer.com",["Poissons","Panure"]," Croustibat qui peut te casser la gueule ",0.5,"Dans l'eau",20)
];
