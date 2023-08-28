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
import { HttpClientModule } from '@angular/common/http'
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateFormComponent } from './template-form/template-form.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';


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
    TemplateFormComponent,
    ReactiveFormComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule,
    HttpClientModule,
    ReactiveFormsModule,

  ],
  providers: [RouterModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
