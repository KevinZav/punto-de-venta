export type BadgeProps = {
  variant: BadgeVariantType;
  text: string;
  dismissable?: boolean;
}

export type BadgeEmits = {
  (event: 'onDismiss'): void;
}

export type BadgeVariantType =
  | 'badge-blue'
  | 'badge-red'
  | 'badge-black'
  | 'badge-green'
  | 'badge-yellow';
