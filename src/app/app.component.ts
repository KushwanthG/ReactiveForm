import { Component, OnInit, ViewChild, ɵLocaleDataIndex } from '@angular/core';
import { formatDate } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { HttpClient } from '@angular/common/http';
import { AppModule } from './app.module';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  ngOnInit(): void {
      
  }

  update(f:any,ff:any){
    console.log(f);
    console.log(ff);

  }

  Submit(forms:any){
    console.log(forms)

    forms.setValue({"username":"Kush","password":"Kush"})
    console.log(forms.value)
  }

  nmodel(s:any){
    console.log(s)
  }


}


