export class DestinoViaje {
private selected:boolean;
	public servicios: string[];
	constructor(public nom: string, public img: string){
	this.servicios=['pileta','desayuno'];
	}
	isSelected():boolean{
	return this.selected;
	}
	setSelected(s: boolean){
	this.selected=s;
	}
}

