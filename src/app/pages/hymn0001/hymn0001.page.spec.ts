import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Hymn0001Page } from './hymn0001.page';

describe('Hymn0001Page', () => {
  let component: Hymn0001Page;
  let fixture: ComponentFixture<Hymn0001Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Hymn0001Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Hymn0001Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
