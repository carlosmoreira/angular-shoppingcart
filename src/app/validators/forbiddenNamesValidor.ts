import { AbstractControl, ValidatorFn } from "@angular/forms";

export function forbiddenNamesValidator(names: string[]): ValidatorFn {
  console.log("validating against", name);
  return (control: AbstractControl): { [key: string]: any } | null => {
    return names.indexOf(control.value) > -1
      ? { forbiddenName: { value: control.value } }
      : null;
  };
}
