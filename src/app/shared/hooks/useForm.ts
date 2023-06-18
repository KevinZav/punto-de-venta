import { FormBuilder } from "@models/classes/form";
import { watch } from "vue";
import { FormParams, FormValue } from '@custom-types/hooks/form'

export const useForm = (initialValue: FormParams) => {
  const form = new FormBuilder(initialValue);

  console.log(form.controls)
  watch(form.value, () => {
    // console.log({...form.value})
  }, { deep: true });

  watch(form.controls, () => {
    console.log(form.controls)
  }, { deep: true })


  return form;
}