import {Component, OnInit} from '@angular/core';
import {ShareService} from '../../services/share.service';
import {Subject} from 'rxjs';
import {last} from 'rxjs/operators';

@Component({
  selector: 'app-dashboards',
  templateUrl: './dashboards.component.html',
  styleUrls: ['./dashboards.component.sass']
})
export class DashboardsComponent implements OnInit {
  public testData: any;
  public subjectData: Subject<any>;


  constructor(private shareService: ShareService) {
  }

  ngOnInit() {
    this.shareService.dataShare.subscribe(value => {
      console.log(value);
      this.subjectData = value;
    });
  }

  changeValue(data): void {
    // console.log(this.testData);
    // this.shareService.setData(this.testData);
  }

  sendMessage(): void {
    console.log(this.testData);
    this.shareService.setData(this.testData);
  }

}
