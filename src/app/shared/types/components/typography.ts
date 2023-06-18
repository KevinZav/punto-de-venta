export type TypographyProps = {
  text: string;
  variant: TypographyVariantsType;
  fontBold?: boolean;
  extraStyles?: string;
}

export type TagTypographyProps = {
  variant: TypographyVariantsType;
}

export type TypographyVariantsType =
  | 'h1'
  | 'h2'
  | 'h3'
  | 'h4'
  | 'subtitle-1'
  | 'subtitle-2'
  | 'subtitle-3'
  | 'subtitle-4'
  | 'body-1'
  | 'body-2'
  | 'body-3'
  | 'label'
  | 'metadata'
  | 'button';