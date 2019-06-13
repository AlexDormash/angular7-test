import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'bottomMenu'
})
export class BottomMenuPipe implements PipeTransform {
  private bottomMenu: any = [];

  transform(value: any, args?: any): any {
    return this.bottomMenu = value.filter(data => data.data.position);
  }

}
