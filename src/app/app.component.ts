import { Component } from '@angular/core';
import { Product } from './models/product.model';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'firts';
  img: string  = "";

  onLoaded(img: string) {
    console.log("La info ESTA en el Padre", img);
  }
  products: Product[] = [
      {
        id: '1',
        name: 'Juan',
        image: 'https://rickandmortyapi.com/api/character/avatar/1.jpeg',
        price: 10,
      },
      {
        id: '2',
        name: 'Apuesta',
        image: 'https://cr00.epimg.net/emisora/imagenes/2016/02/16/medellin/1455621629_313362_1455621788_noticia_normal.jpg',
        price: 10
      },
      {
        id: '3',
        name: 'Ganancia',
        image: 'https://cr00.epimg.net/emisora/imagenes/2016/02/16/medellin/1455621629_313362_1455621788_noticia_normal.jpg',
        price: 10
      },
      {
        id: '4',
        name: 'Inversion',
        image: 'https://cr00.epimg.net/emisora/imagenes/2016/02/16/medellin/1455621629_313362_1455621788_noticia_normal.jpg',
        price: 10
      }
  ]
  }


 
