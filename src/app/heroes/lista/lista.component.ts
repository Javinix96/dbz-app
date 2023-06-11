import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-lista',
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  public names: string[] = ['javier', 'Andrea', 'Alixary','Pamela'];
  private nameDeleted : string = "";

  RemoveLastHero() : void {
    const heroDeleted = this.names.pop() as string;
    this.nameDeleted = heroDeleted;
  }

  get GetNameDeleted (): string {
    return this.nameDeleted;
  }

}
