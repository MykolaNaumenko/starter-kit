import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'filter' })
export class FilterJokesPipe implements PipeTransform {
  transform(value: any, args: any) {
      console.log(args.value);
    if (!args[0]) {
      return value;
    } else if (value) {
      return value.filter((item: any) => {

        for (let key in item) {
          if ((typeof item[key] === 'string' || item[key] instanceof String) && (item[key].indexOf(args[0]) !== -1)) {
            return true;
          }
        }
      });
    }
  }
}
