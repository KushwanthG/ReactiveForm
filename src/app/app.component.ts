import { Component, OnInit, ViewChild, ɵLocaleDataIndex } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {     
  }

  Submit(forms:any){
    console.log(forms)

    forms.setValue({"username":"Kush","password":"Kush"})
    console.log(forms.value)
  }

  nmodel(s:any){
    console.log(s)
  }


  login= new FormGroup({uname : new FormControl("alex",[Validators.required,Validators.minLength(8)]),gmail:new FormControl("john@gmail.com",[Validators.required,Validators.email])})

  Show(){
    console.log(this.login)
  }

  test=new FormGroup({
    mobile:new FormArray(
      [
        new FormControl(null,[Validators.required])
          ]
    )

  })


  Add(){
    let mobile =this.test.get('mobile') as FormArray
    mobile.push(new FormControl(null,[Validators.required]))
    console.log(this.test)

  }

  delete(i){
    let mobile =this.test.get('mobile') as FormArray;
    mobile.removeAt(i);
    console.log(mobile)
  }

}


