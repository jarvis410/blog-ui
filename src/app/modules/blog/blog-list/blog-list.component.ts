import { Component, OnInit } from '@angular/core';

import { MOCK_POSTS } from '../../../../../MOCK_DATA/MOCK_POSTS';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  posts = MOCK_POSTS;

  constructor() {}

  ngOnInit(): void {}
}
