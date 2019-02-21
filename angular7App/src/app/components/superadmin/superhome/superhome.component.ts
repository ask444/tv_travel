import { Component, ElementRef, AfterViewInit } from '@angular/core';
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

// import * as $ from 'jquery';
declare var $: any;


@Component({
  selector: 'super-home-component',
  styleUrls: ['superhome.component.css'],
  templateUrl: 'superhome.component.html'
})
export class SuperhomeComponent {

  public ngOnInit() {
    $(document).ready(function () {
      $("#menu1").metisMenu();
    });
  }
  ngAfterViewInit() {
    $('#side-menu').metisMenu();
    // this.menuElement = this._elementRef.nativeElement.querySelector('#side-menu');
    // (<any>$(this.menuElement)).metisMenu();
  }

}
