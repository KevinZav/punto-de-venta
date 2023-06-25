import {
  InputValue,
  InputArgsControl,
  ValidatorResponse,
  ValidatorFunction,
} from "@custom-types/hooks/form";

export class FormControl {
  public value: InputValue;
  public valid: boolean = true;
  protected validators?: ValidatorFunction;
  public errors?: ValidatorResponse;

  constructor([value, validators]: InputArgsControl) {
    this.value = value;
    this.validators = validators;
  }

  public setValue(value: InputValue) {
    this.value = value;
    this.errors = this.validate(value);
    this.valid = this.errors === null;
  }

  public validate(value: InputValue): ValidatorResponse {
    if (!!this.validators) {
      return this.validators(value);
    }
    return null;
  }
}
