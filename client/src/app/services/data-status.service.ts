import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

import {DataPrice} from '../models/data-price';
import { Subject, from } from  'rxjs';
import * as socketio from 'socket.io-client';

@Injectable({
  providedIn: 'root'
})
export class DataStatusService {

  private baseUrl =  'http://localhost:3000';
  constructor(private httpClient: HttpClient) { }

  getInitialDataStatus() {
    return this.httpClient.get<DataPrice[]>(`${this.baseUrl}/api/data`);
  }

  getUpdates() {
    let socket = socketio(this.baseUrl);
    let dataSub = new Subject<DataPrice>();
    let dataSubObservable = from(dataSub);

    socket.on('data', (dataStatus: DataPrice) => {
      dataSub.next(dataStatus);
    });

    return dataSubObservable;
  }
}
