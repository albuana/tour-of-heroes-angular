import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { Hero } from './hero';
import { Pet } from './pet';

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const petNull={name: '' };
    const heroes = [
      { id: 11, name: 'Dr Nice', pet: petNull},
      { id: 12, name: 'Narco', pet: petNull },
      { id: 13, name: 'Bombasto', pet: petNull },
      { id: 14, name: 'Celeritas', pet: petNull },
      { id: 15, name: 'Magneta', pet: petNull },
      { id: 16, name: 'RubberMan', pet: petNull },
      { id: 17, name: 'Dynama', pet: petNull },
      { id: 18, name: 'Dr IQ', pet: petNull },
      { id: 19, name: 'Magma', pet: petNull },
      { id: 20, name: 'Tornado', pet: petNull }
    ];
    const pets = [
      {name: 'Betty' },
      {name: 'Lua' },
      {name: 'Plutão' },
      {name: 'Saturno' },
      {name: 'Maffy' },
      {name: 'Drimmy' }
    ];
    return {heroes, pets};
  }

  // Overrides the genId method to ensure that a hero always has an id.
  // If the heroes array is empty,
  // the method below returns the initial number (11).
  // if the heroes array is not empty, the method below returns the highest
  // hero id + 1.
  genId(heroes: Hero[]): number {
    return heroes.length > 0 ? Math.max(...heroes.map(hero => hero.id)) + 1 : 11;
  }
}
