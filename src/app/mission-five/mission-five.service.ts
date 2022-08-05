import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MissionFiveService {

  appLock:BehaviorSubject<boolean>;
  vaultLock:BehaviorSubject<boolean>;
  constructor() { 
    this.appLock = new BehaviorSubject(true)
    this.vaultLock = new BehaviorSubject(true)
  }
}
