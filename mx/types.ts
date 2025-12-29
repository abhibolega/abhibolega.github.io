
export type FrameworkType = 'WCM' | 'TPM' | 'TQM';

export interface ImplementationStep {
  title: string;
  detail: string;
}

export interface Pillar {
  id: string;
  title: string;
  icon: string;
  color: string;
  description: string;
  keyPoints: string[];
  chemicalContext: string;
  steps: ImplementationStep[];
  specificGoal: string;
}

export enum ViewMode {
  DASHBOARD = 'DASHBOARD',
  PILLAR_DETAIL = 'PILLAR_DETAIL',
  AI_TUTOR = 'AI_TUTOR',
  GLOSSARY = 'GLOSSARY'
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
