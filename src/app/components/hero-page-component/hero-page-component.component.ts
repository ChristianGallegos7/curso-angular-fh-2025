import { UpperCasePipe } from '@angular/common';
import { Component, computed, signal, WritableSignal } from '@angular/core';

@Component({
  selector: 'app-hero-page-component',
  imports: [UpperCasePipe],
  templateUrl: './hero-page-component.component.html',
  styleUrl: './hero-page-component.component.css',
})
export class HeroPageComponentComponent {
  name = signal('Ironman');
  age = signal(45);

  heroDescription = computed(() => `${this.name()} - ${this.age()}`);

  capitalizedName = computed(() => this.name().toUpperCase());

  // getHeroDescription() {
  //   return `The hero is ${this.name()} and he is ${this.age()} years old`;
  // }

  changeHero() {
    this.name.set('Spiderman');
    this.age.set(22);
  }

  resetForm() {
    this.name.set('Ironman');
    this.age.set(45);
  }

  changeAge() {
    this.age.set(60);
  }
}
