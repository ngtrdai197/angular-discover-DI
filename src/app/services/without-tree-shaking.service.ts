import { Injectable } from '@angular/core';

console.log('WithoutTreeShakingService bundled even though not used');

@Injectable()
export class WithoutTreeShakingService {

  constructor() { }
}
