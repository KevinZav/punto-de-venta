<template>
  <div class="text-start">
    <typography variant="h2" text="Testing page" extra-styles="text-blue-500 bold"></typography>
    <indicator :variant="'yellow-warning'" :text="'hola'"></indicator>
    <badge variant="badge-black" text="Vinos" @on-dismiss="dismissBadge" :dismissable="true"></badge>
    <input-text :control="(form.controls.name as FormControl)" v-model="form.value.name"></input-text>
    <input-text :control="((form.controls.address as FormBuilder)!.controls.street as FormControl)" v-model="form.value.address.street"></input-text>
    <input-text :control="(((form.controls.address as FormBuilder)!.controls.ubication as FormBuilder).controls.lgn as FormControl)" v-model="form.value.address.ubication.lgn"></input-text>

    {{ form.value }}
  </div>
</template>
<script setup lang="ts">
import Typography from '@components/Typography/Typography.vue';
import Indicator from '@components/Indicator/Indicator.vue';
import Badge from '@components/Badge/Badge.vue';
import InputText from '@components/Inputs/InputText.vue';
import { useForm } from '@hooks/useForm';
import { AbstractValidator } from '../../shared/models/classes/validator';
import { FormBuilder } from '../../shared/models/classes/form';
import { FormControl } from '@/app/shared/models/classes/form-control';

const notSanto = new AbstractValidator('notSanto', (value: any) => value !== 'santo', 'El nombre de la calle no puede ser "santo"')
const minSixLength = new AbstractValidator('minSixLength', (value: any) => value.length >= 6)
const noCogerSkill = new AbstractValidator('noCogerSkill', (value: any)=> value.every((skill: string) => {
  return skill !== 'coger'
}))
const form = useForm({
  name: ['Kevin', [notSanto]],
  address: FormBuilder.generate({
    street: ['', [notSanto]],
    ubication: FormBuilder.generate({
      lat: [''],
      lgn: ['']
    })
  })
})

const dismissBadge = () => console.log('badge dismiss')
</script>