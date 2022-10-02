import { AppRoutingModule } from './app-routing.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgxNavbarModule } from 'ngx-bootstrap-navbar';

import { AppComponent } from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { HomeComponent } from './components/home/home.component';
import { UserComponent } from './components/user/user.component';
import { PostComponent } from './components/post/post.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule } from '@angular/common/http';
import { AbouteComponent } from './components/aboute/aboute.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    UserComponent,
    PostComponent,
    AbouteComponent,
    FeedbackComponent,
    

  ],
  imports: [
    BrowserModule,
    NgxNavbarModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NgxPaginationModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
