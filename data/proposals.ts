
import React from 'react';

export interface ProposalSystem {
  id: string;
  title: string;
  desc: string;
  setup: number;
  monthly: number;
  priority: string;
}

export interface ProposalSlide {
  id: string;
  title: string;
  subtitle: string;
  content: React.ReactNode;
}

export interface ProposalData {
  id: string;
  clientName: string;
  annualFactor: number; // Factor to calculate annual price from 1st year value
  systems: ProposalSystem[];
}

export const PROPOSALS: Record<string, ProposalData> = {
  'justinhowells': {
    id: 'justinhowells',
    clientName: 'Justin Howells',
    annualFactor: 0.55,
    systems: [
      { id: 'sys1', title: 'System 1: AI DM Foundation + Presentations', desc: 'Automated conversion & booking flow + Custom PDF Plans', setup: 2500, monthly: 690, priority: 'Core P1' },
      { id: 'sys2', title: 'System 2: AI Setter Co-Pilot', desc: 'Assists human setters, prevents missed leads, ensures consistency', setup: 1600, monthly: 400, priority: 'High P2' },
      { id: 'sys3', title: 'System 3: Personalized Reactivation', desc: 'Monetizes "Non-Buyers" & No-Shows from CRM', setup: 1500, monthly: 450, priority: 'High P3' },
      { id: 'sys4', title: 'System 4: Call Analysis & CRM', desc: 'Transcribes calls, auto-populates CRM, generates insights', setup: 1200, monthly: 300, priority: 'High P3' },
      { id: 'sys5', title: 'System 5: Content Intelligence', desc: 'Competitor analysis & script generation engine', setup: 1250, monthly: 400, priority: 'Med P4' },
      { id: 'sys6', title: 'System 6: Client App / Dashboard', desc: 'LTV Engagement, Progress Tracking, Retention', setup: 2500, monthly: 550, priority: 'Long-Term P5' }
    ]
  },
  'robjessen': {
    id: 'robjessen',
    clientName: 'Rob Jessen',
    annualFactor: 0.55,
    systems: [
      { id: 'sys1', title: 'System 1: AI DM Foundation + Presentations', desc: 'Automated conversion & booking flow + Custom PDF Plans', setup: 2500, monthly: 690, priority: 'Core P1' },
      { id: 'sys2', title: 'System 2: AI Setter Co-Pilot', desc: 'Assists human setters, prevents missed leads, ensures consistency', setup: 1600, monthly: 400, priority: 'High P2' },
      { id: 'sys3', title: 'System 3: Personalized Reactivation', desc: 'Monetizes "Non-Buyers" & No-Shows from CRM', setup: 1500, monthly: 450, priority: 'High P3' },
      { id: 'sys4', title: 'System 4: Call Analysis & CRM', desc: 'Transcribes calls, auto-populates CRM, generates insights', setup: 1200, monthly: 300, priority: 'High P3' },
      { id: 'sys5', title: 'System 5: Content Intelligence', desc: 'Competitor analysis & script generation engine', setup: 1250, monthly: 400, priority: 'Med P4' },
      { id: 'sys6', title: 'System 6: Client App / Dashboard', desc: 'LTV Engagement, Progress Tracking, Retention', setup: 2500, monthly: 550, priority: 'Long-Term P5' }
    ]
  }
};
