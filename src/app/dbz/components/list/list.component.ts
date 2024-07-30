import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'Trunk',
    power: 10
  }]

  @Output()
  public onDeleteId =  new EventEmitter<string>();


  onDeleteCharacterbyId(index?:string):void{
    //TODO: Emitir el ID del personaje
    // console.log(index);
    if(!index) return;
    this.onDeleteId.emit(index)
  }
}
