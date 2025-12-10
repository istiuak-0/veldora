import type { FieldConfig, RuleCallback } from './types';
import { ref, type Ref } from 'vue';

class Veldora {
  private rules: Map<string, RuleCallback> = new Map();

  createForm<T extends Record<string, FieldConfig>>(config: T) {
    return new Form(config) as Form & {
      [K in keyof T]: string;
    };
  }

  addRule<K extends string>(name: K, callback: RuleCallback) {
    this.rules.set(name, callback);
  }
}

export const veldora = new Veldora();

class Form {
  private _refs: Map<string, Ref<string>> = new Map();

  constructor(config: Record<string, FieldConfig>) {
    // this.data = {} as Record<K, any>;

    const fields = Object.keys(config);

    fields.forEach(field => {
      const fieldConfig = config[field];

      if (!fieldConfig) {
        throw new Error('.....');
      }

      const valueRef = ref(fieldConfig.initialValue);
      this._refs.set(field, valueRef);

      // this.data[field]= valueRef;

      Object.defineProperty(this, field, {
        get() {
          return valueRef.value;
        },
        set(newValue) {
          valueRef.value = newValue;
        },
        enumerable: true,
        configurable: true,
      });
    });
  }
}
