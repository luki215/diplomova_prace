import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  constructor(private httpService: HttpService) {}

  public getEvents() {
    return this.httpService.get('http://localhost:4000');
  }
}
