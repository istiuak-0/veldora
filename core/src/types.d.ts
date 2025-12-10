export type FieldConfig = {
  initialValue: string;
  rules: string[];
};

export type RuleCallback = (value: any, params?: any, allValues: any) => string | undefined;
