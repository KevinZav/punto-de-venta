import { FormBuilder } from '../models/classes/form';
import { FormControl } from '../models/classes/form-control';
import { AbstractValidator } from '../models/classes/validator';
import { ValidatorResponse } from '@custom-types/hooks/form';
import { FormValueTypes } from '../types/hooks/form';

export const buildValidator = (
  control: FormValueTypes,
  validators: AbstractValidator[]
) => {
  return validators.reduce((prev: ValidatorResponse, validator) => {
    const result = validator.validate(control);
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
  }, null);
};

export const buildValidatorAsync = async (
  control: FormValueTypes,
  validators: AbstractValidator[]
) => {
    const evaluates = await Promise.allSettled(validators.map(validator => validator.validate(control)));
    console.log(evaluates);
    // return evaluates.map(evaluate => evaluate.value)
};