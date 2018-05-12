import { Component, OnInit } from '@angular/core';
import {Patients} from "../../data/patient.interface";
import appointments from '../../data/appointments';
import {AppointmentsPage} from "../appointments/appointments";

@Component({
  selector: 'page-appointment-list',
  templateUrl: 'appointment-list.html',
})

export class AppointmentListPage implements OnInit{

  appointmentsCollection: {category: string, patient: Patients[], importance: string}[];
  appointmentsPage = AppointmentsPage;

  ngOnInit() {
    this.appointmentsCollection = appointments;
  }
}
