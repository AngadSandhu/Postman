import { Component, OnInit } from '@angular/core';
import { Post } from '../post.interface';
import { NgForm } from '@angular/forms';
import { PostService } from '../post.service';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {


  constructor(public postService: PostService) { }

  ngOnInit() {
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;            // return the form back if its invalid
    }
    this.postService.addPosts(form.value.name, form.value.description);
  }

}
