import { create } from "zustand";

export interface FontTemplate {
  id: string;
  name: string;
  component: string; // tên component tương ứng
}

interface FontState {
  templates: FontTemplate[];
  selectedTemplate: FontTemplate | null;
  setSelectedTemplate: (template: FontTemplate) => void;
}

export const useFontStore = create<FontState>((set) => ({
  templates: [
    { id: "neon-1", name: "Neon Light", component: "NeonText" },
    { id: "showgirl-1", name: "ShowGirl Blink", component: "ShowGirlText" },
    { id: "glow-1", name: "Glowing", component: "GlowingText" },
    { id: "spotlight-1", name: "Spotlight", component: "SpotlightText" },
    { id: "gradient-1", name: "Gradient", component: "GradientText" },
  ],
  selectedTemplate: null,
  setSelectedTemplate: (template) => set({ selectedTemplate: template }),
}));
