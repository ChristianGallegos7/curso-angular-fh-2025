import { Routes } from '@angular/router';
import { CounterComponent } from './components/counter/counter.component';
import { DragonballPageComponent } from './components/dragon-ball/dragonball-page/dragonball-page.component';
import { HeroPageComponentComponent } from './components/hero-page-component/hero-page-component.component';

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
