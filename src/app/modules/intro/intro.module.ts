import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { IntroRoutingModule } from './intro-routing.module';
import { IntroComponent } from './intro/intro.component';
import { IntroHeaderComponent } from './intro-header/intro-header.component';

@NgModule({
  declarations: [IntroComponent, IntroHeaderComponent],
  imports: [CommonModule, IntroRoutingModule],
})
export class IntroModule {}
