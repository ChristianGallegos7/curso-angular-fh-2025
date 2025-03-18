import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Character } from '../../interfaces/Character.interface';

@Component({
  selector: 'app-character-list',
  imports: [],
  templateUrl: './character-list.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CharacterListComponent {
  characters = input.required<Character[]>();
  ListName = input.required<string>();
}
