import { Component } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Batman', 'ironman', 'goku'];
  heroeBorrado: string = '';

  borrarHeroe(){
    console.log('borrando...');
    this.heroeBorrado = this.heroes.shift() || '';
    
  }

}
