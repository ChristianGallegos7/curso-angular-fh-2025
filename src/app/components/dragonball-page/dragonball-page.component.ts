import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 100000,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 90000,
    },
    {
      id: 3,
      name: 'Gohan',
      power: 80000,
    },
  ]);
}
