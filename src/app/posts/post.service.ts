import { Injectable } from '@angular/core';
import { Post } from './post.interface';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PostService {
  private posts: Post[] = [];
  private newPosts = new Subject <Post[]>();

  constructor() { }

  getPosts() {
    return [...this.posts];
  }

  updatedPostsListener(){
    return this.newPosts.asObservable();
  }

  addPosts(title: string, content: string) {
    const post: Post = { name : title, desc: content};
    this.posts.push(post);
    this.newPosts.next([...this.posts]);
  }

}
