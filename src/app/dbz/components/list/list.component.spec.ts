import { ComponentFixture, TestBed } from '@angular/core/testing';

import {ListDBZComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListDBZComponent;
  let fixture: ComponentFixture<ListDBZComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListDBZComponent]
    });
    fixture = TestBed.createComponent(ListDBZComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
