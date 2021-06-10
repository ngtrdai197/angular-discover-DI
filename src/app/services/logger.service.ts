import { Injectable } from '@angular/core';

@Injectable()
export class LoggerService {

  constructor() { }

  logInfo(log: string) {
    console.log(log);
  }
}
