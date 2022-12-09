import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'uSDTOINR'
})
//Regular implementation
// export class USDTOINRPipe implements PipeTransform {
//   transform(value: unknown, ...args: unknown[]): unknown {
//     return null;
//   }
// }
//Implementation with paramas
export class USDTOINRPipe implements PipeTransform {
  transform(value: number, ...args: number[]): unknown {
    const [x]=args;
    return value*(x===undefined? 85 : x);
  }
}
