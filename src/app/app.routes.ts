import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { HeroPageComponentComponent } from './components/hero-page-component/hero-page-component.component';
import { DragonballPageComponent } from './components/dragonball-page/dragonball-page.component';

export const routes: Routes = [
  {
    path: '',
    component: CounterComponent,
  },
  {
    path: 'hero',
    component: HeroPageComponentComponent,
  },
  {
    path: 'dragonball',
    component: DragonballPageComponent,
  },
  {
    path: '**',
    redirectTo: '',
  },
];
