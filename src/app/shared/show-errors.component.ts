// show-errors.component.ts
import { Component, Input } from '@angular/core';
import { AbstractControlDirective, AbstractControl } from '@angular/forms';

@Component({
 selector: 'show-errors',
 template: `
    <div *ngIf="shouldShowErrors()">
        <small class="col-xl-10 offset-xl-2" style="color: red" *ngFor="let error of listOfErrors()">{{error}}</small>
    </div>
`,
styles: [':host { width: 100%;}']
})
export class ShowErrorsComponent {

 @Input()
 private control: AbstractControlDirective | AbstractControl;

 shouldShowErrors(): boolean {
   return this.control &&
     this.control.errors &&
     (this.control.dirty || this.control.touched);
 }

 listOfErrors(): string[] {
   return Object.keys(this.control.errors)
     .map(field => this.getMessage(field, this.control.errors[field]));
 }

 private getMessage(type: string, params: any) {
   return ShowErrorsComponent.errorMessages[type](params);
 }

 private static readonly errorMessages = {
    'required': () => 'Поле необходимо для заполнения',
    'minlength': (params) => 'Длина должна быть не меньше ' + params.requiredLength,
    'maxlength': (params) => 'Длина должна быть не больше' + params.requiredLength,
    'dateInvalid': (params) => params.message,
  };
}