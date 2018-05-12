import {Component, OnInit} from '@angular/core';
import { NavParams } from 'ionic-angular';
import {Patients} from "../../data/patient.interface";

@Component({
  selector: 'page-appointments',
  templateUrl: 'appointments.html',
})
export class AppointmentsPage implements OnInit{

  day: {category: string, patient: Patients[], importance: string};

  constructor(public navParams: NavParams) {

  }

  ngOnInit() {
    this.day = this.navParams.data;
  }

}
