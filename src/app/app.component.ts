import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';

  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyBJPigFI1GsR9O7uefxK0SqEFT93AhMUio',
      authDomain: 'hm-ng-recipe-book.firebaseapp.com'
    });
  }
}
