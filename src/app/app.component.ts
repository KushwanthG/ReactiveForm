import { Component, OnInit, ViewChild, ɵLocaleDataIndex } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {     
  }

    constructor(private fb:FormBuilder){

    }


    reg =this.fb.group(
      {
        nname:[null,Validators.required],
        eemail:[null,Validators.required],
        mmobile:this.fb.array([[],[]])
      }
    )

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
    console.log(this.register)
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


  register= new FormGroup({
    classes : new FormControl(null,Validators.required,this.classesCheck)
  })



  // users.indexof('user1')=-1

  classesCheck(control):Promise<any>{

    let response = new Promise(
      (resolve,reject)=>{
        let users=['user1','user2','user3']
        let name = control.value
        setTimeout(() => {
          if(users.indexOf(name)>0)
          {
          resolve({"duliclass":true} )

          }
          else{
          resolve (null)
          }          
        }, 2000);
      }
    )
    return response
  }
}


