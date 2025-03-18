import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';
import { CharacterListComponent } from '../character-list/character-list.component';
import { DragonballCharacterAddComponent } from '../dragonball-character-add/dragonball-character-add.component';

@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  // name = signal('');
  // power = signal(0);

  characters = signal<Character[]>([
    {
      id: 1,
      name: 'Goku',
      power: 100001,
    },
    {
      id: 2,
      name: 'Vegeta',
      power: 90001,
    },
    {
      id: 3,
      name: 'Gohan',
      power: 80001,
    },
    {
      id: 4,
      name: 'Yamcha',
      power: 500,
    },
  ]);

  addCharacter(character: Character) {
    this.characters.update((list) => [...list, character]);
  }
}
