
import {Component} from "@angular/core";
import {HomePage} from "./home/home";
import {AppointmentListPage} from "./appointment-list/appointment-list";

@Component({
  selector: 'page-tabs',
  template:
    `
    <ion-tabs>
      <ion-tab [root]="appointmentList" tabIcon="list"></ion-tab>
      <ion-tab [root]="homePage" tabIcon="chatbubbles"></ion-tab>
    </ion-tabs>
    `
})

export class TabsPage {
  homePage = HomePage;
  appointmentList = AppointmentListPage;
}


