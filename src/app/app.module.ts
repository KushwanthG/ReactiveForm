import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import {FormsModule} from '@angular/forms';
//import {HttpModule} from '@angular/http'
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { RouterModule,Routes } from '@angular/router';
import { NotfoundComponent } from './notfound/notfound.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';
import { TestPipe } from './test.pipe';
import { TodoComponent } from './todo/todo.component';
import { TodolistComponent } from './todolist/todolist.component';
import { TodoService } from './todo.service';
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    HomeComponent,
    NotfoundComponent,
    CourselistComponent,
    CoursedetailsComponent,
    TestPipe,
    TodoComponent,
    TodolistComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,

  ],
  providers: [RouterModule,TodoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
