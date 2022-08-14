import { Pipe, PipeTransform } from '@angular/core';
import { ContentEntitiesACEPermission } from '@wizardcontrollerprerelease/horseless-contentapi-lib';

@Pipe({
  name: 'contentEntitiesACEPermission',
})
export class ContentEntitiesACEPermissionPipe implements PipeTransform {
  transform(value: number): string {
    let ret = Object.values(ContentEntitiesACEPermission)[value];
    console.log(`enum is returning ${ret}`);
    return ret;
  }
}
