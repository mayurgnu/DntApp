import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'mergestr'
})
export class MergestrPipe implements PipeTransform {

  transform(value:any,  id: any, name: any, website: any): any {
    return value + ': ' + 'Your ID is ' + id + '. Your Name is ' + name + '. Your Website is ' + website + '.';
  }

}
