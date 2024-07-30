import { Injectable } from '@angular/core';
import { v4 as uudi } from 'uuid';

import { Character } from '../interfaces/character.interface';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters: Character[] = [{
    id: uudi(),
    name: 'Krillin',
    power: 1000
  },{
    id: uudi(),
    name:'Goku',
    power: 9500
  },{
    id: uudi(),
    name: 'Vegeta',
    power: 7500
  }];

  onNewCharacter(character: Character):void{

    const newCharacter: Character = {
      id: uudi(),
      ...character
    }

    this.characters.push(newCharacter)
  }

  onDeleteCharacId(index:string): void{
    console.log(index);

    this.characters = this.characters.filter(( character => character.id !== index))
  }
  constructor() { }
}
