import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from '../post.interface';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  @Output() postCreated = new EventEmitter<Post>();

  constructor() { }

  ngOnInit() {
  }

  onSavePost(form: NgForm) {
    if (form.invalid) {
      return;            // return the form back if its invalid
    }
    const post: Post  = { name: form.value.name, desc: form.value.description };
    this.postCreated.emit(post);
  }

}
