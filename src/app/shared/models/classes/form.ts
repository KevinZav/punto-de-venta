import { reactive } from 'vue';
import { FormParams, FormValueParamsTypes, FormValueTypes, InputValue, Validator, ValidatorResponse } from '@custom-types/hooks/form';
import { FormControl } from './form-control';
import { AbstractValidator } from './validator';
import { FormArray } from './form-array';

export class FormBuilder {
  public value = reactive<{ [input: string]: InputValue }>({});
  public valid = true;
  protected validators?: Validator;
  public errors?: ValidatorResponse;

  public controls = reactive<{ [control: string]: FormValueTypes }>({});

  constructor(value: FormParams) {
    this.generateFormControls(value);
    this.assignValue();
    console.log(this.controls);
    console.log({...this.value})
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
      return control;
    } else if (control instanceof FormArray) {
      return control;
    } else {
      const [value, validators] = control;
      const validator = this.generateValidator(key, validators || [], parentBuilder)
      return new FormControl([value, validator]);
    }
  }

  private generateValidator(
    key: string,
    validators: AbstractValidator[],
    parentBuilder: FormBuilder | FormArray
  ) {
    return (value: any) => {
      const evaluate = validators.reduce(
        (prev: ValidatorResponse, validator) => {
          const result = validator.validate(value);
          if (!result) {
            return prev;
          }

          if (!!prev) {
            return {
              ...prev,
              ...result,
            };
          } else {
            return { ...result };
          }
        },
        null
      );
      /* if (parentBuilder instanceof FormBuilder) {
        parentBuilder.controls[key].valid = evaluate === null;
        parentBuilder.controls[key].errors = evaluate;
      } */
      return evaluate;
    };
  }

  private assignValue (): void {
    const newValue: any = {};
    for (const key in this.controls) {
      newValue[key] = this.controls[key].value
    }
    this.value = reactive(newValue);
  }

  /* 
  }*/
}
