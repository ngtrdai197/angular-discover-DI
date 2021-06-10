import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Host,
	Optional,
} from '@angular/core';
import { HeroCacheService } from '../services/hero-cache.service';
import { LoggerService } from '../services/logger.service';

@Component({
	selector: 'app-hero-contact',
	template: `
		<div>Phone #: {{ phoneNumber }} <span *ngIf="hasLogger">!!!</span></div>
	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroContactComponent implements OnInit {
	hasLogger = false;

	constructor(
		@Host() // limit to the host component's instance of the HeroCacheService
		private heroCache: HeroCacheService,

		@Host() // limit search for logger; hides the application-wide logger
		@Optional() // ok if the logger doesn't exist
		private loggerService?: LoggerService,
	) {}

	ngOnInit(): void {
		if (this.loggerService) {
			this.hasLogger = true;
			this.loggerService.logInfo('HeroContactComponent can log!');
		}
	}

	get phoneNumber() {
		return this.heroCache.hero.phone;
	}
}
