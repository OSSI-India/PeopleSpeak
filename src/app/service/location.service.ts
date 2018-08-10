import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';

@Injectable({
  providedIn: 'root'
})
export class LocationService {

  public location = new Subject<string>();

  constructor() { }

  setLocation(value: string) {
    this.location.next(value); //it is publishing this value to all the subscribers
  }
}