import { FeedbackComponent } from './components/feedback/feedback.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { AbouteComponent } from './components/aboute/aboute.component';
  
const routes: Routes = [
  {path : '', component : HomeComponent},
  {path : 'user', component : UserComponent},
  {path : 'post', component : PostComponent},
  {path : 'feedback', component : FeedbackComponent},
  {path : 'about', component : AbouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
