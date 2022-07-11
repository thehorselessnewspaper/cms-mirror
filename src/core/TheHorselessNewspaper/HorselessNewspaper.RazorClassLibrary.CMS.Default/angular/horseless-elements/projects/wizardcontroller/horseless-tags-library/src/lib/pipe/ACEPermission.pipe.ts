import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ACEPermission'
})
export class ACEPermissionPipe implements PipeTransform {

  transform(value: number, enumType: any): any {
    return enumType[value];
}
}
