import { InputValue, Validator, ValidatorResponse } from '@custom-types/hooks/form';

export class AbstractForm {
    public value: InputValue;
    public valid: boolean = true;
    protected validators?: Validator;
    public errors?: ValidatorResponse;
}