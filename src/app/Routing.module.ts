import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { PostListComponent } from './posts/post-list/post-list.component';
import { CreatePostComponent } from './posts/create-post/create-post.component';
import { PostsComponent } from './posts/posts.component';

const routes: Routes = [
  {path: '', component: PostsComponent},
  {path: 'savePosts', component: CreatePostComponent},
  {path: 'posts', component: PostListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
