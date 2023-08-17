import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-courselist',
  templateUrl: './courselist.component.html',
  styleUrls: ['./courselist.component.css']
})
export class CourselistComponent implements OnInit{
  
  course:any=[
    {'id':1,'name':"angular"},
    {'id':2,'name':"react"},
    {'id':3,'name':"vue"},
    {'id':4,'name':"mean"},
  ];

  
    constructor(private route:Router){
    }

    ngOnInit(){
    }

  onSelect(x:any){
  this.route.navigate(['/course',x.id]);
}

}