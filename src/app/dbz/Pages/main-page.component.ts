import { Component, OnInit } from '@angular/core';
import { DbzService } from '../Services/dbz.service.ts.service';
import { Character } from '../Interfaces/character.interface';

@Component({
  selector: 'app-dbz-main-page',
  templateUrl: './main-page.component.html'
})

export class MainPageComponent{


  constructor(private dbzService: DbzService){

  }

  get Characters(): Character[]{
    return [...this.dbzService.characters];
  }

  onDeleteCharacter  (id: string): void {
    this.dbzService.onDeleteCharacter(id);
  }

  onNewCHaracter(character: Character) : void {
    this.dbzService.onNewCharacter(character);
  }
}
