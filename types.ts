export enum ModelType {
  FLASH = 'gemini-2.5-flash',
}

export interface AutomationSuggestion {
  title: string;
  description: string;
  estimatedROI: string;
  implementationTime: string;
}

export interface ConsultantResponse {
  analysis: string;
  suggestions: AutomationSuggestion[];
}

export interface NavItem {
  label: string;
  href: string;
}
