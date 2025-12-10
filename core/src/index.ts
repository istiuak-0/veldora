import type { FormConfig, RuleCallback } from './types';
import { ref } from 'vue';
class Veldora {
  private rules: Map<string, RuleCallback> = new Map();

  createForm(config: FormConfig) {
    return new Form(config);
  }

  addRule<K extends string>(name: K, callback: RuleCallback) {
    this.rules.set(name, callback);
  }
}

export const veldora = new Veldora();



class Form {
  [key: string]: any;
  private _refs: Map<string, any> = new Map();

  constructor(config: FormConfig) {

const fields= Object.keys(config)


fields.forEach(field => {
      const fieldConfig = config[field];

      if (!fieldConfig) {
        throw new Error('.....');
      }

      const valueRef = ref(fieldConfig.initialValue);
      this._refs.set(field, valueRef);


      Object.defineProperty(this, field, {
        get() {
          return valueRef.value;
        },
        set(newValue) {
          valueRef.value = newValue;
        },
        enumerable: true,
        configurable: true
      });
    });
  }
}