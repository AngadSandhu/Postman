import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../post.interface';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts: Post[] = [];
  // posts = [{
  //   name: 'Football',
  //   desc : 'Cristiano Ronaldo is the best Player'
  // }, {
  //   name : 'Angular JS',
  //   desc: 'JS framework for FE Dev by Google'
  // }, {
  //   name: 'ReactJS',
  //   desc: 'Superfast Javascript Library for UI'
  // }];
  constructor() { }

  ngOnInit() {
  }

}
