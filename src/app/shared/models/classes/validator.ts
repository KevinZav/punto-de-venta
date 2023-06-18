import { Validator, ValidatorResponse, FormValueTypes } from "@custom-types/hooks/form";
import { FormControl } from "./form-control";
import { FormBuilder } from "./form";

export class AbstractValidator {
  public name: string;
  public validator: Validator;
  public message?: string;
  public valid: boolean = true;

  constructor(name: string, validator: Validator, message?: string) {
    this.name = name;
    this.validator = validator;
    this.message = message;
  }

  public validate(control: FormValueTypes): ValidatorResponse {
    const { name, message } = this;
    const valid = this.validator(control) as boolean;
    this.valid = valid;

    return valid
      ? null
      : { [`${name}`]: message || `this validator failed: ${name}` };
  }
}

export class AbstractValidatorAsync extends AbstractValidator {
  constructor(name: string, validator: any, message?: string) {
    super(name, validator, message);
  }

  public async validateAsync(
    control: FormControl | FormBuilder
  ): Promise<ValidatorResponse> {
    const { name, message, validator } = this;

    const valid = await this.validator(control);
    this.valid = valid;

    return valid
      ? null
      : { [`${name}`]: message || `this validator failed: ${name}` };
  }
}
