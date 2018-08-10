
import { fakeAsync, ComponentFixture, TestBed } from '@angular/core/testing';

import { AddIssueComponent } from './add-issue.component';

describe('AddIssueComponent', () => {
  let component: AddIssueComponent;
  let fixture: ComponentFixture<AddIssueComponent>;

  beforeEach(fakeAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ AddIssueComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddIssueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should compile', () => {
    expect(component).toBeTruthy();
  });
});
