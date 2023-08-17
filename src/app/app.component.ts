import { Component, ViewChild, ɵLocaleDataIndex } from '@angular/core';
import { formatDate } from '@angular/common';
import { HeaderComponent } from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
name= {"peru":"kush","age":"25"}
wish:string="This is wish";
}


