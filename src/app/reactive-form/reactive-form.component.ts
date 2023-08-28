import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit{
  ngOnInit(){

  }
  reg:any= FormGroup


  constructor(){
    this.reg=new FormGroup(
      {
        fullname:new FormControl(null,[Validators.required]),
        email:new FormControl(null,[Validators.required]),
        password:new FormControl(null,[Validators.required]),
        cpassword:new FormControl(null,Validators.required),
        gender:new FormControl(),
        subscribe:new FormControl(),
  
      },this.passwordCheck
    );
  }
  
  passwordCheck(rf:any){
   let password= rf.controls['password'].value;
   let cpassword=rf.controls['cpassword'].value;
   if(password===cpassword){
    return null
   }
   else{
    return{
      passwordCheck:true
    }
   }

  }


  signUp(f){
    console.log(f)
    f.reset()
  }


  getC(control: any){
    return this.reg.get(control)
  }


  getE(control: any){
    return this.reg.get(control)?.['errors']
  }


}
