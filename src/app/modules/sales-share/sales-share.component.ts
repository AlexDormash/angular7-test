import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../services/share.service';
import {Subject} from 'rxjs';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-sales-share',
  templateUrl: './sales-share.component.html',
  styleUrls: ['./sales-share.component.sass']
})
export class SalesShareComponent implements OnInit {
  message: Subject<any>;

  constructor(private shareService: ShareService) {
  }

  ngOnInit() {
    this.getMessage();
  }

  getMessage(): void {
    this.shareService.dataShare.subscribe((value) => {
      this.message = value;
      console.log(value);
    });
  }
}
