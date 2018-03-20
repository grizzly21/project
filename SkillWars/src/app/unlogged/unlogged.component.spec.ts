/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { UnloggedComponent } from './unlogged.component';

describe('UnloggedComponent', () => {
  let component: UnloggedComponent;
  let fixture: ComponentFixture<UnloggedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UnloggedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UnloggedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
