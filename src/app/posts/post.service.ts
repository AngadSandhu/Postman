import { Injectable } from '@angular/core';
import { Post } from './post.interface';
import { Subject } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private newPosts = new Subject <Post[]>();

  constructor(private httpClient: HttpClient) { }

  getPosts() {
    this.httpClient.get<{message: string, posts: Post[]}>('http://localhost:3000/posts')
      .subscribe((response) => {
        this.posts = response.posts;
        this.newPosts.next([...this.posts]);
      })
    //return [...this.posts];
  }

  updatedPostsListener() {
    return this.newPosts.asObservable();
  }

  addPosts(title: string, content: string) {
    const post: Post = { id: null, title : title, description: content};
    this.httpClient.post<{message: string}>('http://localhost:3000/posts', post).subscribe((response)=>{
      console.log('Successfully Added New post');
      this.posts.push(post);
      this.newPosts.next([...this.posts]);
    });

  }

}
