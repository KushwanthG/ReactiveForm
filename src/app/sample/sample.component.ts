import { Component, OnInit } from '@angular/core';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http'
import { of,from, merge,timeInterval, interval, take, debounce } from 'rxjs';


@Component({
  selector: 'app-sample',
  templateUrl: './sample.component.html',
  styleUrls: ['./sample.component.css']
})
export class SampleComponent implements OnInit {

  ob1=of(23,53,76).pipe(take(2))
  ob2=from(["s",'v'])
  ob3=interval(1000).pipe(
    take(5)
  )
  ob=merge(this.ob1,this.ob2)

  constructor(private http:HttpClientModule){
  }

  ngOnInit(): void {
    this.ob1
  
    .subscribe(
      (data)=>{
        console.log(data)
      })

  }


}
