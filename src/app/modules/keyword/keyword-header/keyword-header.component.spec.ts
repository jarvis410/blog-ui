import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KeywordHeaderComponent } from './keyword-header.component';

describe('KeywordHeaderComponent', () => {
  let component: KeywordHeaderComponent;
  let fixture: ComponentFixture<KeywordHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KeywordHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KeywordHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
