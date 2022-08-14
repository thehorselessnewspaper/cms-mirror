import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'stringCoercion'
})
export class StringCoercionPipe implements PipeTransform {

  transform(value: number, entityType: any): string {
    let ret = Object.values(entityType)[value] as string;
    console.log(`enum is returning ${ret}`);
    return ret;
  }

}
