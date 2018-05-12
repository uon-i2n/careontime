import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  myDate: String = new Date().toISOString();

  constructor(public navCtrl: NavController) {

  }

}
