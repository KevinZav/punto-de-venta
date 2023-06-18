import { FormBuilder } from "@models/classes/form";
import { AbstractValidator } from "@models/classes/validator";
import { FormArray } from "@models/classes/form-array";
import { FormControl } from "@models/classes/form-control";

export type Validator = { (value: any): boolean };

export type ValidatorFunction = {(value: any): ValidatorResponse}

export type FormValue = {
  [input: string]: FormValueTypes
}

export type FormParams = {
  [input: string]: FormValueParamsTypes
}

export type InputValue = any;

export type InputArgs = [InputValue, AbstractValidator[]?];

export type InputArgsControl = [InputValue, ValidatorFunction?];

export type InputBuilderArgs = [FormBuilder, string];

export type ValidatorResponse = {[name: string]: string} | null;

export type FormValueTypes = FormControl | FormArray | FormBuilder;

export type FormValueParamsTypes = InputArgs | FormArray | FormBuilder;