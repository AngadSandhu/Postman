import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  postHeader = '';
  postDesc = '';

  @Output() postCreated = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  onSavePost() {
    const post  = { name: this.postHeader, desc: this.postDesc };
    this.postCreated.emit(post);
  }

}
