import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.css']
})
export class PostListComponent implements OnInit {

  @Input() posts = [];
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
