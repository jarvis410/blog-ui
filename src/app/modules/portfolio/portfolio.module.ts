import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { PortfolioRoutingModule } from './portfolio-routing.module';
import { PortfolioComponent } from './portfolio/portfolio.component';

@NgModule({
  declarations: [PortfolioComponent],
  imports: [CommonModule, PortfolioRoutingModule],
})
export class PortfolioModule {}
