import { Component, OnDestroy } from '@angular/core';
import { LocationService } from './service/location.service';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'PeopleSpeak';
  location: string;
  subscription: Subscription;

  constructor(public locationService: LocationService) { }

  ngOnInit() {
    this.subscription = this.locationService.location.subscribe(
      (location) => {
        this.location = location;
      }
    );
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
