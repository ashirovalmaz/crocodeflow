
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
  systems: ProposalSystem[];
  annualFactor: number; // Factor to calculate annual price from 1st year value
  slides: ProposalSlide[];
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
    ],
    slides: [] // This is populated in ProposalPage.tsx logic or could be moved here
  },
  'robjessen': {
    id: 'robjessen',
    clientName: 'Rob Jessen',
    annualFactor: 0.48, // Aggressive discount for annual as per prompt $6k upfront vs $2.9k+$790*12
    systems: [
      { id: 'sys1', title: 'Phase 1: ManyChat AI DM Funnel', desc: 'Automated conversion, qualification & personalized booking pages.', setup: 2900, monthly: 790, priority: 'Core P1' },
      { id: 'sys2', title: 'Automated Newsletter', desc: 'Highly personalized emails using CRM data to maintain top-of-mind.', setup: 2400, monthly: 650, priority: 'Growth P2' },
      { id: 'sys3', title: 'Personalized Reactivation', desc: 'Monetizes non-buyers and no-shows automatically via personalized outreach.', setup: 1900, monthly: 550, priority: 'High ROI P2' },
      { id: 'sys4', title: 'Content Intelligence', desc: 'Competitor analysis and content scripting engine to fuel your reach.', setup: 1500, monthly: 450, priority: 'Efficiency P3' },
      { id: 'sys5', title: 'Client App / Dashboard', desc: 'Engagement, retention, progress tracking, and LTV growth for your clients.', setup: 4500, monthly: 850, priority: 'Long-Term P4' }
    ],
    slides: [] 
  }
};
