import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { BlogHeaderComponent } from './blog-header/blog-header.component';
import { BlogListComponent } from './blog-list/blog-list.component';
import { BlogRoutingModule } from './blog-routing.module';
import { BlogViewComponent } from './blog-view/blog-view.component';
import { BlogComponent } from './blog/blog.component';

@NgModule({
  declarations: [
    BlogComponent,
    BlogHeaderComponent,
    BlogListComponent,
    BlogViewComponent,
  ],
  imports: [CommonModule, BlogRoutingModule, SharedModule],
})
export class BlogModule {}
