import { OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {
  Component,
  ChangeDetectionStrategy,
  ViewChild,
  TemplateRef,
  Input
} from '@angular/core';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
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
import { Subject,Observable } from 'rxjs';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent,
  CalendarView
} from 'angular-calendar';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JarwisService } from '../../../services/jarwis.service';
import { AddeditEventComponent } from '../../../addedit-event/addedit-event.component';
const colors: any = {
  red: {
    primary: '#ad2121',
    secondary: '#FAE3E3'
  },
  blue: {
    primary: '#1e90ff',
    secondary: '#D1E8FF'
  },
  yellow: {
    primary: '#e3bc08',
    secondary: '#FDF1BA'
  }
};
@Component({
  selector: 'Events',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent {

  @ViewChild('modalContent') modalContent: TemplateRef<any>;

  view: CalendarView = CalendarView.Month;

  CalendarView = CalendarView;

  viewDate: Date = new Date();

  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent('Edited', event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent('Deleted', event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  // events: CalendarEvent[] = [];
  @Input() events: CalendarEvent[] = [];

  events$: Observable<Array<CalendarEvent<any>>>;

  activeDayIsOpen: boolean = true;
  httpData: any;
  eventSources = [];
  
  constructor(private modal: NgbModal, private http: HttpClient, private Jarwis: JarwisService, public dialog: MatDialog, public router: Router) {
    // this.events = [
    //   {
    //     start: subDays(startOfDay(new Date()), 1),
    //     end: addDays(new Date(), 1),
    //     title: 'A 3 day event',
    //     color: colors.red,
    //     actions: this.actions,
    //     allDay: true,
    //     resizable: {
    //       beforeStart: true,
    //       afterEnd: true
    //     },
    //     draggable: true
    //   }]
    this.Jarwis.geteventsList().subscribe((data: any) => {
      // this.httpData = data.data;
      debugger;
      this.events = [
        {
          start: subDays(startOfDay(new Date()), 1),
          end: addDays(new Date(), 1),
          title: 'A 3 day event',
          color: colors.red,
          actions: this.actions,
          allDay: true,
          resizable: {
            beforeStart: true,
            afterEnd: true
          },
          draggable: true
        }]

      this.eventSources.push(this.events);

    })


  }




  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      this.viewDate = date;
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent('Dropped or resized', event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: 'lg' });
  }

  // addEvent(): void {
  //   this.events.push({
  //     title: 'New event',
  //     start: startOfDay(new Date()),
  //     end: endOfDay(new Date()),
  //     color: colors.red,
  //     draggable: true,
  //     resizable: {
  //       beforeStart: true,
  //       afterEnd: true
  //     }
  //   });
  //   this.refresh.next();
  // }


  addEvent() {
    // this.router.navigateByUrl('superadmin/createevents');
    debugger;
    this.router.navigate(['superadmin/createevents']);
    // const dialogRef = this.dialog.open(AddeditEventComponent, {
    //   width: '700px',
    //   height: '500px'
    //   // data: { name: this.name, animal: this.animal }
    // });

    // dialogRef.afterClosed().subscribe(result => {
    //   console.log('The dialog was closed');
    //   // this.animal = result;
    // });

  }

  getData() {
    this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=3362024&APPID=bbcf57969e78d1300a815765b7d587f0')
      .pipe(map(r => r)).subscribe((data: any) => {
        const items = data;
        this.httpData = data.list;
        // data.list;
        console.log("TST :", this.httpData, typeof this.httpData);

      });

    this.http.get('https://api.openweathermap.org/data/2.5/forecast?id=3362024&APPID=bbcf57969e78d1300a815765b7d587f0')
      .toPromise()
      .then((data: any) => {
        debugger;
        /* tslint:disable:no-console */
        console.log(data);
        // this.httpData = data.list;
      });

  }


}

