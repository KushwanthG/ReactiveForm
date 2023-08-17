import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'test'
})
export class TestPipe implements PipeTransform {

  transform(name:any,wish:string): string {
    if(name.age<20){
      return `This is ${name.peru}`
    }
    else{
    return `This is ${name.age}`
    }
  }


  // <h1>{{name | test:wish}}</h1>
}
