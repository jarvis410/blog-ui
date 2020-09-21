import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-keyword',
  templateUrl: './keyword.component.html',
  styleUrls: ['./keyword.component.scss'],
})
export class KeywordComponent implements OnInit {
  formGroup: FormGroup;

  constructor(private _fb: FormBuilder, private _title: Title) {}

  ngOnInit(): void {
    this._title.setTitle('Keywords');
    this.initFormGroup();
  }

  private initFormGroup(): void {
    this.formGroup = this._fb.group({
      keyword: [],
    });
  }
}
