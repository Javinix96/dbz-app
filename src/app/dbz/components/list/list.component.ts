import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../Interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListDBZComponent
{
  @Output()
  deleteCharacter: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [];

  DeleteCharacter(id?: string) : void {
    if (!id ) return;
    this.deleteCharacter.emit(id);
  }
}
