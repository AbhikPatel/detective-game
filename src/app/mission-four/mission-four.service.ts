import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class MissionFourService {

  public smartAuth:boolean = false;
  public pizzaLock:boolean = true;
  public Lights:boolean = false;
  public connectionFailed:boolean = false;
  public visited:boolean = false;
  public new:BehaviorSubject<boolean>;

  constructor() { 
    this.new = new BehaviorSubject<boolean>(false);
  }
}
