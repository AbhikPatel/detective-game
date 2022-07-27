import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PincodeService {

  public appPassword:BehaviorSubject<any>;
  public servicePass:any[] = [];
  constructor() { 
    this.appPassword = new BehaviorSubject<any>('');
  }

  public getPassword(){
  }
}
