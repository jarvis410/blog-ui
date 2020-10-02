import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { MOCK_POSTS } from '../../../../../MOCK_DATA/MOCK_POSTS';
import { PostDTO } from '../../../shared/dtos/post-dto';

@Component({
  selector: 'app-blog-view',
  templateUrl: './blog-view.component.html',
  styleUrls: ['./blog-view.component.scss'],
})
export class BlogViewComponent implements OnInit {
  post: PostDTO;

  constructor(private _route: ActivatedRoute) {}

  ngOnInit(): void {
    const postId = this._route.snapshot.paramMap.get('id');
    console.log(postId);
    this.post = MOCK_POSTS.find((post) => post.id === postId);
  }
}
