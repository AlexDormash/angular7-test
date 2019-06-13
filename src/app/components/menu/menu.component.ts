import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {routes} from '../../app-routing.module';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  router: any = routes;
  resizeMenu = false;
  @ViewChild('topMenu') topMenu: ElementRef;
  @ViewChild('bottomMenu') bottomMenu: ElementRef;

  constructor() {
  }

  ngOnInit() {
  }

  onResize(event) {
    const topMenuHeight = this.topMenu.nativeElement.clientHeight;
    const bottomMenuHeight = this.bottomMenu.nativeElement.clientHeight;
    if (event.target.innerHeight <= (topMenuHeight + bottomMenuHeight)) {
      this.resizeMenu = true;
    } else {
      this.resizeMenu = false;
    }
  }

}
