import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Validators } from '@angular/forms';
// To make the test pass, import `FormBuilder` from `@angular/forms`.
import { FormBuilder } from '@ngneat/reactive-forms';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'reactive-forms-testing-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  readonly formGroup = this.formBuilder.group({
    password: ['', [Validators.required, Validators.minLength(10)]],
    username: ['', Validators.required],
  });

  constructor(private readonly formBuilder: FormBuilder) {}
}
