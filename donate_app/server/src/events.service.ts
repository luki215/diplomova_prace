import { HttpService, Injectable } from '@nestjs/common';

@Injectable()
export class EventsService {
  constructor(private httpService: HttpService) {}

  public getEvents() {
    return this.httpService.get('https://events-api.brezina.workers.dev/');
  }
}
