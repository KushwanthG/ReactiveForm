import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-check',
  templateUrl: './check.component.html',
  styleUrls: ['./check.component.css']
})
export class CheckComponent {

  @Input() mobile:any

  ngDoCheck(){
    console.log("Do Checked")
  }

  ngOnChanges(){
    console.log("On Changed")
  }

}
