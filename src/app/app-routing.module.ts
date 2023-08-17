import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { CourselistComponent } from './courselist/courselist.component';
import { CoursedetailsComponent } from './coursedetails/coursedetails.component';

const routes:Routes=[
  {
    path: '', component:HomeComponent
  },
  {
    path: 'about', component:AboutComponent
  },
  {
    path: 'contact', component:ContactComponent
  },
  {
    path: 'course', component:CourselistComponent
  },
  {
    path: 'course/:id', component:CoursedetailsComponent
  },
  {
    path: '**', component:NotfoundComponent
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
