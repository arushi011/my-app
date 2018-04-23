import { Component, OnInit } from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  loadedFeature = 'recipe';
  ngOnInit() {
    firebase.initializeApp({
      apiKey: 'AIzaSyA55jMp5qfJLrSLrXGbUxBz6dV9mb2ZDb4',
      authDomain: 'my-app-3448e.firebaseapp.com',
    });
  }
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }
}
