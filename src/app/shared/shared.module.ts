import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { EditorModule as PrimeEditor } from 'primeng/editor';
import { InputTextModule } from 'primeng/inputtext';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { MultiSelectModule } from 'primeng/multiselect';
import { PaginatorModule } from 'primeng/paginator';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { ToggleButtonModule } from 'primeng/togglebutton';
import { TooltipModule } from 'primeng/tooltip';

import { FocusDirective } from './directives/focus/focus.directive';

const PrimeNgModules = [
  PrimeEditor,
  ToggleButtonModule,
  ButtonModule,
  ToastModule,
  AutoCompleteModule,
  InputTextModule,
  RippleModule,
  MultiSelectModule,
  CardModule,
  PaginatorModule,
  InputTextareaModule,
  TooltipModule,
];

@NgModule({
  declarations: [FocusDirective],
  imports: [...PrimeNgModules, ReactiveFormsModule],
  exports: [...PrimeNgModules, ReactiveFormsModule, FocusDirective],
})
export class SharedModule {}
