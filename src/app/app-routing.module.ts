import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
