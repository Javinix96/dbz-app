import { Injectable } from '@angular/core';
import { Character } from '../Interfaces/character.interface';
import { v4 as uuid } from 'uuid';

@Injectable({
  providedIn: 'root'
})
export class DbzService {

  public characters : Character [] = [
    {
      id: uuid(),
      name: 'krilin',
      power:  100},
    {
      id: uuid(),
      name: 'Goku',
      power: 10000000000},
    {
      id: uuid(),
      name: 'Wizz',
      power: 7776767667
    }];

  constructor() { }

  onNewCharacter ( character: Character): void
  {
    this.characters.push({...character,id: uuid()});
  }
  onDeleteCharacter(id: string) : void
  {
    this.characters = this.characters.filter( item => item.id !== id);
  }
}
