import {Injectable} from '@angular/core';
import {BehaviorSubject, Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShareService {
  // dataShare = new BehaviorSubject('Ooops');
  dataShare = new Subject<any>();
  // currentMessage = this.dataShare.asObservable();

  constructor() {
  }

  setData(data: any): void {
    this.dataShare.next(data);
  }

}
