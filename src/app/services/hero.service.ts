import { Injectable } from '@angular/core';
import { IHero } from '../models/hero.interface';

@Injectable()
export class HeroService {
	private readonly heros: IHero[] = [
		{
			id: '1',
			name: 'Hero 1',
			description: 'description 1',
			phone: '012312313',
		},
		{
			id: '2',
			name: 'Hero 2',
			description: 'description 2',
			phone: '0932132',
		},
		{
			id: '3',
			name: 'Hero 3',
			description: 'description 3',
			phone: '0323453',
		},
	];
	constructor() {}

	public getHeroById(id: string): IHero {
		return this.heros.find(x => x.id === id) || this.heros[0];
	}
}
