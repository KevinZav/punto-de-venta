import { reactive } from 'vue';
import { FormParams, FormValueParamsTypes, FormValueTypes, InputValue, Validator, ValidatorResponse } from '@custom-types/hooks/form';
import { FormControl } from './form-control';
import { AbstractValidator } from './validator';
import { FormArray } from './form-array';
import { ValidatorFunction } from '@custom-types/hooks/form';
import { buildValidator } from '../../utils/form-validate';

export class FormBuilder {
  public value = reactive<{ [input: string]: InputValue }>({});
  public valid = true;
  protected validators?: ValidatorFunction;
  protected abstractValidators?: AbstractValidator[];
  public errors?: ValidatorResponse;
  public formErrors: string[] = [];

  public controls = reactive<{ [control: string]: FormValueTypes }>({});

  constructor(value: FormParams, validators?: AbstractValidator[]) {
    this.abstractValidators = validators;
    this.generateFormControls(value);
    this.assignValue();
    console.log(this.controls);
    console.log({ ...this.value });
  }

  private generateFormControls(value: FormParams) {
    const controls: any = {};
    for (const key in value) {
      controls[key] = this.defineControl(value[key], key, this);
    }
    this.controls = reactive(controls);
  }

  private defineControl(
    control: FormValueParamsTypes,
    key: string,
    parentBuilder: FormBuilder | FormArray
  ) {
    if (control instanceof FormBuilder) {
      const validator = this.generateValidator(
        control.abstractValidators || [],
        parentBuilder
      );
      control.assignValidator(validator);
      return control;
    } else if (control instanceof FormArray) {
      return control;
    } else {
      const [value, validators] = control;
      const validator = this.generateValidator(validators || [], parentBuilder);
      return new FormControl([value, validator]);
    }
  }

  private generateValidator(
    validators: AbstractValidator[],
    parentBuilder: FormBuilder | FormArray
  ) {
    return (value: FormValueTypes, abstractId: string) => {
      const evaluate = buildValidator(value, validators);
      if (parentBuilder) {
        if (!evaluate) {
          (parentBuilder as FormBuilder).removeFormError(abstractId);
        } else {
          (parentBuilder as FormBuilder).addFormError(abstractId);
        }
        parentBuilder.validate();
      }
      return evaluate;
    };
  }

  public validate() {
    
  }

  private assignValue(): void {
    const newValue: any = {};
    for (const key in this.controls) {
      newValue[key] = this.controls[key].value;
    }
    this.value = reactive(newValue);
  }

  public assignValidator(validator: ValidatorFunction) {
    this.validators = validator;
  }

  public removeFormError(id: string) {
    const newFormErrors = this.formErrors.filter(
      (formError) => formError != id
    );
    this.formErrors = newFormErrors;
  }

  public addFormError(id: string) {
    const findError = this.formErrors.find((formError) => formError === id);

    if (!!findError) return;

    this.formErrors.push(id);
  }

  public static generate(value: FormParams, validators?: AbstractValidator[]) {
    return new FormBuilder(value, validators);
  }

  /* 
  }*/
}
