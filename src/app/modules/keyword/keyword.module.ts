import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { KeywordHeaderComponent } from './keyword-header/keyword-header.component';
import { KeywordRoutingModule } from './keyword-routing.module';
import { KeywordComponent } from './keyword/keyword.component';

@NgModule({
  declarations: [KeywordComponent, KeywordHeaderComponent],
  imports: [CommonModule, KeywordRoutingModule, SharedModule],
})
export class KeywordModule {}
