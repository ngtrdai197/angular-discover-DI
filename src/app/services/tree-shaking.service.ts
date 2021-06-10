import { Injectable } from '@angular/core';

console.log('TreeShakingService is not bundled because it not used');

@Injectable({
  providedIn: 'root'
})
export class TreeShakingService {

  constructor() { }
}
