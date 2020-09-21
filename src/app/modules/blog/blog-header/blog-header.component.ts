import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-header',
  templateUrl: './blog-header.component.html',
  styleUrls: ['./blog-header.component.scss'],
})
export class BlogHeaderComponent implements OnInit {
  menus = ['html', 'css', 'javascript', 'spring', 'angular', 'database'];

  constructor() {}

  ngOnInit(): void {}
}
