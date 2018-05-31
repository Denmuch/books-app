import { Directive, Input, OnChanges, SimpleChanges } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, Validator, ValidatorFn, Validators, ValidationErrors } from '@angular/forms';

function dateValidator(c: AbstractControl): ValidationErrors{
    if (c.pristine) {
        return null;
    }
    if ((c.value !== undefined && c.value !== '' && c.value != null)) {

        let month = null;
        let day = null;
        let year = null;
        let currentYear = new Date().getFullYear();

        if (c.value.indexOf('-') > -1) {
            var res = c.value.split("-");           
            if (res.length > 1) {
                year = res[0];
                month = res[1];
                day = res[2];
            }                          
        }
        else {
            if (c.value.length == 8) {
                month = c.value.substring(0, 2);
                day = c.value.substring(2, 4);
                year = c.value.substring(4, 8);
            }            
        }

        month = Number(month);
        day = Number(day);
        year = Number(year);

        if (month && (month < 1 || month > 12)) { // check month range
            return { 'dateInvalid': {'message' : 'Ошибка в месяце'} };
        }

        if (day && (day < 1 || day > 31 || day.toString() === '00' )) {  // check date range
            return { 'dateInvalid': {'message' : 'Ошибка в дате'}  };
        }

        if ((month === 4 || month === 6 || month === 9 || month === 11) && day === 31) { // check 31 date
            return { 'dateInvalid': {'message' : '31-e число не может быть в указанном месяце'}  };
        }

        if (month == 2) { // check for february 29th
            var isleap = (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
            if (day > 29 || (day === 29 && !isleap)) {
                return { 'dateInvalid': {'message' : '29 февраля может быть только в високосный год'}  };
            }
        }
    }
    return null;
}

@Directive({
  selector: '[validate]',
  providers: [{provide: NG_VALIDATORS, useExisting: ValidationDirecitve, multi: true}]
})
export class ValidationDirecitve implements Validator {

  validate(control: AbstractControl): {[key: string]: any} {
    return dateValidator(control);
  }
}
