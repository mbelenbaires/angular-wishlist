import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { DestinoViaje } from './../models/destino-viaje.model';
import { DestinosApiClient } from './../models/destinos-api-client.model';

//redux

@Component({
  selector: 'app-lista-destinos',
  templateUrl: './lista-destinos.component.html',
  styleUrls: ['./lista-destinos.component.css'],
  providers: [DestinosApiClient]
})
export class ListaDestinosComponent implements OnInit {

  @Output() onItemAdded: EventEmitter<DestinoViaje>;
  updates: string[];
  all;

  //destinos: DestinoViaje[];
  constructor(
    public destinosApiClient: DestinosApiClient)
  {
    //this.destinos = [];
    this.onItemAdded = new EventEmitter();
    this.updates = [];
    this.destinosApiClient.subscribeOnChange((d: DestinoViaje) => {
      if (d != null) {
        this.updates.push('Se ha elegido a ' + d.nom);
      }
    });
  }

  ngOnInit(): void {


  }

  agregado(d: DestinoViaje) {
    //this.destinos.push(d);
    this.destinosApiClient.add(d);
    this.onItemAdded.emit(d);

  }

  getAll() {

  }

  elegido (e: DestinoViaje) {
    this.destinosApiClient.elegir(e);
  }

 


}
