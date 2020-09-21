import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { KeywordComponent } from './keyword/keyword.component';

const routes: Routes = [{ path: '', component: KeywordComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class KeywordRoutingModule {}
