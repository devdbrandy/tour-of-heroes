import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

import { HEROES } from '../mock-heroes';
import { Hero } from 'src/app/models';
import { MessageService } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private messgaeService: MessageService) { }

  getHeroes(): Observable<Hero[]> {
    // TODO: send the message _after_ fetching the heroes
    this.messgaeService.add('HeroService: fetched heroes');
    return of(HEROES);
  }
}
