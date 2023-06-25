import { Validator, ValidatorResponse } from '@custom-types/hooks/form';

export class AbstractValidator {
    private name: string;
    private validator: Validator;
    public message?: string;
    public valid: boolean = true;

    constructor(name: string, validator: Validator, message?: string) {
        this.name = name;
        this.validator = validator;
        this.message = message;
    }

    public validate(value: any): ValidatorResponse {
        const { name, message } = this;
        const valid = this.validator(value);
        this.valid = valid;

        return valid
            ? null
            : { [`${name}`]: message || `this validator failed: ${name}` };
    }
}