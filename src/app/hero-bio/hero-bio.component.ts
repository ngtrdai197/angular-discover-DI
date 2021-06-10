import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Input,
} from '@angular/core';
import { HeroCacheService } from '../services/hero-cache.service';
import { LoggerService } from '../services/logger.service';

@Component({
	selector: 'app-hero-bio',
	template: `
		<h4>{{ hero.name }}</h4>
		<ng-content></ng-content>
		<textarea cols="25" [(ngModel)]="hero.description"></textarea>\`,
	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [HeroCacheService]
})
export class HeroBioComponent implements OnInit {
	@Input() heroId: string = '';

	constructor(private heroCache: HeroCacheService) {}

	ngOnInit() {
		this.heroCache.fetchCachedHero(this.heroId);
	}

	get hero() {
		return this.heroCache.hero;
	}
}
