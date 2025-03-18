import { Component, signal } from '@angular/core';

@Component({
  selector: 'app-dragonball-character-add',
  imports: [],
  templateUrl: './dragonball-character-add.component.html',
})
export class DragonballCharacterAddComponent {
  name = signal('');
  power = signal(0);

  // addCharacter() {
  //   if (!this.name() || !this.power() || this.power() < 0) return;

  //   const newCharacter: Character = {
  //     id: this.characters().length + 1,
  //     name: this.name(),
  //     power: this.power(),
  //   };

  //   this.characters.update((list) => [...list, newCharacter]);
  //   this.resetFields();
  // }
  addCharacter() {}

  resetFields() {
    this.name.set('');
    this.power.set(0);
  }
}
