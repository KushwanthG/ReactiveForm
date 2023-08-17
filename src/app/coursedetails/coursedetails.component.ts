import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-coursedetails',
  templateUrl: './coursedetails.component.html',
  styleUrls: ['./coursedetails.component.css']
})
export class CoursedetailsComponent {
  courseId: any;
  ActivatedRoute: any;

  constructor(private route:ActivatedRoute){}

  ngOnInit(){
    let cid = parseInt(this.ActivatedRoute.snapshot.paramMap.get('id'));
    this.courseId=cid

  }
}
