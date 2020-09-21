import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SharedModule } from '../../shared/shared.module';
import { EditorHeaderComponent } from './editor-header/editor-header.component';
import { EditorRoutingModule } from './editor-routing.module';
import { EditorComponent } from './editor/editor.component';

@NgModule({
  declarations: [EditorComponent, EditorHeaderComponent],
  imports: [CommonModule, EditorRoutingModule, SharedModule],
})
export class EditorModule {}
