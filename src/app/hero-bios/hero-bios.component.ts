import {
	Component,
	OnInit,
	ChangeDetectionStrategy,
	Host,
} from '@angular/core';
import { HeroService } from '../services/hero.service';
import { LoggerService } from '../services/logger.service';

@Component({
	selector: 'app-hero-bios',
	template: `
		<app-hero-bio [heroId]="'1'">
			<app-hero-contact></app-hero-contact>
		</app-hero-bio>
		<app-hero-bio [heroId]="'2'">
			<app-hero-contact></app-hero-contact>
		</app-hero-bio>
		<app-hero-bio [heroId]="'3'">
			<app-hero-contact></app-hero-contact>
		</app-hero-bio>
	`,
	styles: [],
	changeDetection: ChangeDetectionStrategy.OnPush,
	providers: [HeroService, LoggerService],
})
export class HeroBiosComponent implements OnInit {
	ngOnInit() {}
}
