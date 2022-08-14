import { Pipe, PipeTransform } from '@angular/core';
import { HostingEntitiesAccessControlEntry, HostingEntitiesACEPermission, HostingEntitiesACEPermissionType, HostingEntitiesACEPermissionScope } from '@wizardcontrollerprerelease/horseless-contentapi-lib';

@Pipe({
  name: 'hostingEntitiesACEPermission'
})
export class HostingEntitiesACEPermissionPipe implements PipeTransform {

  transform(value: number): string {

    let ret = Object.values(HostingEntitiesACEPermission)[value];
    console.log(`enum is returning ${ret}`);
    return ret;
}
}
