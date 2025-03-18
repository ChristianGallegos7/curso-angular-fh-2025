import { Component, inject, signal } from '@angular/core';
import { CharacterListComponent } from '../character-list/character-list.component';
import { DragonballCharacterAddComponent } from '../dragonball-character-add/dragonball-character-add.component';
import { DragonBallService } from '../../../services/dragonball.service';

@Component({
  selector: 'app-dragonball-page',
  imports: [CharacterListComponent, DragonballCharacterAddComponent],
  templateUrl: './dragonball-page.component.html',
  styleUrl: './dragonball-page.component.css',
})
export class DragonballPageComponent {
  public dragonBallService = inject(DragonBallService);
}
