import type { FormConfig, RuleCallback } from './types';

class Veldora {
  private rules: Map<string, RuleCallback> = new Map();

  createForm(config: FormConfig) {
    const keys = Object.keys(config);

    keys.forEach(key => {
      console.log(key, config[key]);
    });

    return config;
  }

  addRule<K extends string>(name: K, callback: RuleCallback) {
    this.rules.set(name, callback);
  }
}

export const veldora = new Veldora();



