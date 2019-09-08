import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  dummyText = 'Tusi fuddu ho';
  random = 'Hey there';

  constructor() { }

  ngOnInit() {
  }

  onSavePost(userinput: HTMLTextAreaElement) {
    this.dummyText = userinput.value;
    alert(this.dummyText);
  }

}
