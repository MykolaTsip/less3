import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './components/app/app.component';
import { UserComponent } from './components/user/user.component';
import { AllUsersComponent } from './components/all-users/all-users.component';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule} from '@angular/router';
import { PostComponent } from './components/post/post.component';
import { AllPostsComponent } from './components/all-posts/all-posts.component';
import { PostsOfUserComponent } from './components/posts-of-user/posts-of-user.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    AllUsersComponent,
    PostComponent,
    AllPostsComponent,
    PostsOfUserComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      {
        path: 'users', component: AllUsersComponent
      },
      {
        path: 'users/:id/posts', component: PostsOfUserComponent
      },
      {
        path: 'posts', component: AllPostsComponent
      }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
