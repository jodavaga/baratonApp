import { Pipe, PipeTransform } from '@angular/core';
import { sortBy } from 'lodash/sortBy';

@Pipe({
    name: 'filterName'
})

export class FilterNamePipe implements PipeTransform {
    transform(value: any[], arg= false): any[] {

        let filtrados: any[] = [];

        if (arg) {
          filtrados = value.sort( (a, b) => {
            const nameA = a.name.toLowerCase();
            const nameB = b.name.toLowerCase();

            if (nameA < nameB ) {
                return -1;
            } else if (nameA > nameB) {
                return 1;
            } else {
                return 0;
            }
          });
          return filtrados;
        }
        return value;
    }
}
