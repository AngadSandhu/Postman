import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Post } from '../post.interface';
import { PostService } from '../post.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit, OnDestroy {

  posts: Post[] = [];
  private subscription: Subscription;
  constructor(public postService: PostService) { }

  ngOnInit() {
    this.postService.getPosts();
    this.postService.updatedPostsListener()
      .subscribe((postArray: Post[]) => {
        this.posts = postArray;
      });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}
