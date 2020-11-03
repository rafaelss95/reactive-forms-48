import { TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

describe('AppComponent', () => {
  beforeEach((() => {
    TestBed.configureTestingModule({
      declarations: [AppComponent],
      imports: [ReactiveFormsModule],
    }).compileComponents();
  }));

  test('should create the app', () => {
    const { componentInstance } = TestBed.createComponent(AppComponent);
    expect(componentInstance).toBeTruthy();
  });

  test('form should be invalid on initialization', () => {
    const { componentInstance: { formGroup } } = TestBed.createComponent(AppComponent);
    expect(formGroup.invalid).toBe(true);
  });
});
