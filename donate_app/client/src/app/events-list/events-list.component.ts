import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import {ChurchEvent} from '../../../../shared/interfaces/ChurchEvent';
@Component({
  selector: 'app-events-list',
  templateUrl: './events-list.component.html',
  styleUrls: ['./events-list.component.scss']
})
export class EventsListComponent implements OnInit {
  public events$: Observable<ChurchEvent[]>;

  constructor(private http: HttpClient) { }

  public ngOnInit() {
    this.events$ = this.http.get<ChurchEvent[]>(environment.api)
  }

}
