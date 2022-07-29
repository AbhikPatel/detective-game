import { Injectable } from '@angular/core';

@Injectable()
export class MissionFourService {

  public smartAuth:boolean = false;
  public pizzaLock:boolean = true;
  public Lights:boolean = false;
  public connectionFailed:boolean = false;
  constructor() { }
}
