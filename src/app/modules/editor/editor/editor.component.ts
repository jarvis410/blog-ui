import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Title } from '@angular/platform-browser';

import { MOCK_KEYWORDS } from '../../../../../MOCK_DATA/MOCK_KEYWORDS';

@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.scss'],
})
export class EditorComponent implements OnInit {
  formGroup: FormGroup;

  keywords = MOCK_KEYWORDS;

  onLabel = 'Hide Preview';
  offLabel = 'Show Preview';

  constructor(private _fb: FormBuilder, private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle('Editor');
    this.initFormGroup();
  }

  get article(): string {
    return this.formGroup.get('article').value;
  }

  get showPreview(): string {
    return this.formGroup.get('showPreview').value;
  }

  private initFormGroup(): void {
    this.formGroup = this._fb.group({
      title: [, Validators.required],
      summary: [, Validators.required],
      article: ['', Validators.required],
      keywords: [[], Validators.required],
      showPreview: [true],
    });
  }
}
