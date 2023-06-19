import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [
    {
      id: '',
      name: 'Trunks',
      power: 10
    }
  ];

  @Output()
  public deleteCharacter: EventEmitter<string> = new EventEmitter()

  deleteCharacterById(id?: string):void {

    if( !id ) return;

    console.log({id});
  this.deleteCharacter.emit(id);

  }

}
