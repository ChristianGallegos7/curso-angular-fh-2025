import { Component, signal } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-dragonball-page',
  imports: [],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  name = signal('');
  power = signal(0);

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

  addCharacter() {
    if (!this.name() || !this.power() || this.power() < 0) return;

    const newCharacter: Character = {
      id: this.characters().length + 1,
      name: this.name(),
      power: this.power(),
    };

    this.characters.update((list) => [...list, newCharacter]);
    this.resetFields();
  }

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
