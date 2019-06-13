import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'topMenu'
})
export class TopMenuPipe implements PipeTransform {
  private topMenu: any = [];

  transform(value: any, args?: any): any {
    return this.topMenu = value.filter(data => !data.data.position);
  }

}
