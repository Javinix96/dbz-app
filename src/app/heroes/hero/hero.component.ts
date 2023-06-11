import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})

export class HeroComponent {
  public name: string = 'Iron Man';
  public age: number = 45;;

  ChangeName(value: string = 'Spider-Man') : void{
    this.name = value;
  }

  ChangeAge(value: number = 22) : void{
    this.age = value;
  }

  get CapitalizaeName() : string {
    return this.name.toUpperCase();
  }

  GetHeroDescription() : string {
    return `${this.name} - ${this.age}`
  }
}
