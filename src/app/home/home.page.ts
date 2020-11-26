import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  personajes= [
    {
      nombre: 'negan',
      imagen: 'assets/recursos/negan.png',
      sonido: 'assets/recursos/sonidos/negan.mp3'
     

    },

    {
      nombre: 'rick',
      imagen: 'assets/recursos/rick.png',
      sonido: 'assets/recursos/sonidos/rick.mp3'
     

    },

    {
      nombre: 'daryl',
      imagen: 'assets/recursos/daryl.png',
      sonido: 'assets/recursos/sonidos/daryl.mp3'
     

    },

    {
      nombre: 'carol',
      imagen: 'assets/recursos/carol.png',
      sonido: 'assets/recursos/sonidos/carol.mp3'
     

    },

    {
      nombre: 'michone',
      imagen: 'assets/recursos/michone.png',
      sonido: 'assets/recursos/sonidos/michone.mp3'
     

    },

    {
      nombre: 'carl',
      imagen: 'assets/recursos/carl.jpg',
      sonido: 'assets/recursos/sonidos/carl.mp3'
     

    },



   
   

  ]

  reproducir(personaje){
    let sonido=new Audio();
    sonido.src=personaje.sonido;
    sonido.load();
    sonido.play();

  }

}
