import {
  InputValue,
  ValidatorResponse,
  InputArgsControl,
  ValidatorFunction,
} from "@custom-types/hooks/form";
import { FormControl } from "./form-control";
import { reactive } from "vue";

export class FormArray {
  public value: InputValue;
  public valid: boolean = true;
  protected validators?: ValidatorFunction;
  public errors?: ValidatorResponse;

  public controls = reactive<FormControl[]>([]);

  constructor([value, validators]: InputArgsControl, controls: FormControl[]) {
    this.value = value;
    this.validators = validators;
    this.controls = controls;
  }
}
