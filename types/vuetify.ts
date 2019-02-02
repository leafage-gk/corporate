import Vue from 'vue';

export interface VuetifyForm extends Vue {
  reset(): void;
  resetValidation(): void;
  validate(): boolean;
}
