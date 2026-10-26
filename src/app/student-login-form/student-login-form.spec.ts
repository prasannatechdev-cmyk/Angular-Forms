import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentLoginForm } from './student-login-form';

describe('StudentLoginForm', () => {
  let component: StudentLoginForm;
  let fixture: ComponentFixture<StudentLoginForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudentLoginForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudentLoginForm);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
