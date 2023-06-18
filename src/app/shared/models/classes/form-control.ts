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
  public id: string;

  constructor([value, validators]: InputArgsControl) {
    this.id = `${Math.random()}`;
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
      return this.validators(value, this.id);
    }
    return null;
  }

  public assignValidator (validator: ValidatorFunction) {
    this.validators = validator;
  }
}
