export interface EstimatorField {
  name: string;
  label?: string;
  group?: string;
  min: number;
  max: number;
  unit: string;
  decimal?: boolean;
  optional?: boolean;
  placeholder?: string;
  error?: string;
}

export interface EstimatorOption {
  value: string;
  label: string;
  hint?: string;
  factor?: number;
  prepWeeks?: number;
  prepLabel?: string;
  maxKgPerWeek?: number;
  gate?: boolean;
  tag?: string;
  note?: string;
  sex?: string;
  better?: { to: string; focus: string; text: string };
}

export interface EstimatorQuestion {
  id: string;
  step: string;
  type: "numbers" | "choice" | "multi";
  fields?: EstimatorField[];
  options?: EstimatorOption[];
  label?: string;
  sub?: string;
  note?: string;
  error?: string;
  default?: string;
  fill?: boolean;
  showIf?: Record<string, string>;
  lifestyle?: boolean;
  box?: string;
}

export type EstimatorAnswers = Record<string, string | string[] | undefined>;
