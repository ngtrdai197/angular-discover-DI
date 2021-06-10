import { Injectable } from '@angular/core';
import { IHero } from '../models/hero.interface';
import { HeroService } from './hero.service';

@Injectable()
export class HeroCacheService {
  public hero!: IHero;
  constructor(private heroService: HeroService) {}

  fetchCachedHero(id: string) {
    if (!this.hero) {
      this.hero = this.heroService.getHeroById(id);
    }
    return this.hero;
  }
}
