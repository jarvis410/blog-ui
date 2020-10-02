import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { MOCK_KEYWORDS } from '../../../../../MOCK_DATA/MOCK_KEYWORDS';
import { MOCK_POSTS } from '../../../../../MOCK_DATA/MOCK_POSTS';

@Component({
  selector: 'app-blog-list',
  templateUrl: './blog-list.component.html',
  styleUrls: ['./blog-list.component.scss'],
})
export class BlogListComponent implements OnInit {
  keywords = MOCK_KEYWORDS;

  posts = MOCK_POSTS;

  constructor(private _router: Router, private _route: ActivatedRoute) {}

  ngOnInit(): void {}

  onPostClick(id: string): void {
    this._router.navigate([id], { relativeTo: this._route });
  }

  formatDate(date: string): string {
    return '';
  }
}
