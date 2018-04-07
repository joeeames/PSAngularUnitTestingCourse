import { Pipe, PipeTransform } from '@angular/core';

/*
 * Show Weak, Strong, Unbelievable
 * Takes an exponent argument that defaults to 1.
 * Usage:
 *   value | exponentialStrength
 * Example:
 *   {{ 2 |  exponentialStrength}}
 *   formats to: 1024
*/
@Pipe({
  name: 'strength'
})
export class StrengthPipe implements PipeTransform {
  transform(value: number): string {
    if(value < 10) {
      return value + " (weak)";
    } else if(value >= 10 && value < 20) {
      return value + " (strong)";
    } else {
      return value + " (unbelievable)";
    }
  }
}
