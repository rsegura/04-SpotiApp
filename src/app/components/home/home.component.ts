import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];


  constructor( private spotify: SpotifyService) {
    this.spotify.getNewReleases()
    .subscribe((datosNuevosLanzamientos: any) => {
      console.log(datosNuevosLanzamientos);
      this.nuevasCanciones = datosNuevosLanzamientos;

    });
  }

  ngOnInit() {
  }

}
