export type IndicatorProps = {
  variant: IndicatorVariantType;
  text?: string;
};

export type IndicatorVariantType =
  | "blue-900"
  | "red-900"
  | "black-900"
  | "neutral-300"
  | "red-danger"
  | "yellow-warning"
  | "green-success";
