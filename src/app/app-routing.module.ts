import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'intro',
    pathMatch: 'full',
  },
  {
    path: 'blog',
    loadChildren: () =>
      import('./modules/blog/blog.module').then((m) => m.BlogModule),
  },
  {
    path: 'portfolio',
    loadChildren: () =>
      import('./modules/portfolio/portfolio.module').then(
        (m) => m.PortfolioModule
      ),
  },
  {
    path: 'editor',
    loadChildren: () =>
      import('./modules/editor/editor.module').then((m) => m.EditorModule),
  },
  {
    path: 'keywords',
    loadChildren: () =>
      import('./modules/keyword/keyword.module').then((m) => m.KeywordModule),
  },
  {
    path: 'intro',
    loadChildren: () =>
      import('./modules/intro/intro.module').then((m) => m.IntroModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
