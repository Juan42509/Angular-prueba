import { Component } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { DbzService } from '../services/dbz.service';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main_page.component.html'
})

export class MainPageComponent  {
  // public characters: Character[] = [{
  //   name: 'Krillin',
  //   power: 1000
  // },{
  //   name:'Goku',
  //   power: 9500
  // },{
  //   name: 'Vegeta',
  //   power: 7500
  // }];

  // onNewCharacter(character: Character):void{
  //   this.characters.push(character)
  // }

  // onDeleteCharacId(index:number): void{
  //   console.log(index);

  //   this.characters.splice(index)
  // }

  constructor( private dbzService : DbzService){}

  get characters(): Character[]{
    return [...this.dbzService.characters]
  }

  onDeleteCharacter(id:string):void{
    this.dbzService.onDeleteCharacId(id)
  }

  onNewCharacter( character:Character ):void{
    this.dbzService.onNewCharacter(character);
  }
}
