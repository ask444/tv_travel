import { Component, OnInit } from '@angular/core';
import 'metismenu';
import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from 'date-fns';
import { Subject } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
declare var $: any;
@Component({
  selector: 'admin-home-component',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  constructor() { }

  public ngOnInit() {
    $(document).ready(function () {
      $("#menu1").metisMenu();
    });
  }
  ngAfterViewInit() {
    $('#side-menu').metisMenu();
  }


}
