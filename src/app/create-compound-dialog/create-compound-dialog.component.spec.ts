import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCompoundDialogComponent } from './create-compound-dialog.component';

describe('CreateCompoundDialogComponent', () => {
  let component: CreateCompoundDialogComponent;
  let fixture: ComponentFixture<CreateCompoundDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CreateCompoundDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateCompoundDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
