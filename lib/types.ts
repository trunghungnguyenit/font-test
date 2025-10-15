// lib/types.ts
export interface GradientTextSettings {
  fontSize: number;
  fontWeight: number;
  gradientColors: string[];
  animationSpeed: number;
  showBorder: boolean;
}

export interface FontSettings extends GradientTextSettings {
  isBold?: boolean;
  isItalic?: boolean;
  isUnderline?: boolean;
  textStroke?: number;
  textStrokeColor?: string;
  textAlign?: "left" | "center" | "right";
  animationDelay?: number;
  animationDuration?: number;
  animationEase?: string;
  splitType?: "chars" | "words" | "lines" | "words, chars";
}

export interface GradientTextTemplate {
  id: string;
  name: string;
  description: string;
  settings: GradientTextSettings;
}

export interface FontTemplate extends GradientTextTemplate {
  fontFamily?: string;
  settings: FontSettings;
}
