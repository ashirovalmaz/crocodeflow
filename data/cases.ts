
import { CaseStudy } from '../types';

export const CASES: CaseStudy[] = [
  {
    id: 'call-analysis',
    title: 'AI Sales Quality Control',
    shortDescription: 'We automated the QA process for a sales team. Replaced 100% of manual call listening.',
    result: '$54k/yr Saved',
    image: 'https://images.unsplash.com/photo-1556740758-90de374c12ad?q=80&w=2070&auto=format&fit=crop',
    tags: ['Sales Ops', 'Voice AI', 'Automation'],
    fullStory: {
      challenge: "A Sales Manager (Avg Salary: $120k/yr) was spending ~40% of their week listening to call recordings to coach reps. That's $48,000/yr of wasted executive time, plus they only reviewed 5% of total calls. The team was flying blind.",
      solution: "We deployed an AI pipeline that records, transcribes, and scores 100% of calls instantly. It detects missed objections, competitor mentions, and sentiment. It sends a 'Red Flag' report to Slack every morning.",
      results: [
        { label: 'Manager Time Saved', value: '18hrs/wk' },
        { label: 'Calls Reviewed', value: '100%' },
        { label: 'Annual Savings', value: '$54,000' },
      ],
      content: "The Sales Manager stopped being a 'listener' and started being a 'closer'. \n\nInstead of hunting for bad calls, the AI serves them up on a silver platter. The manager now spends that 18 hours a week training the team on specific weaknesses identified by the data. Revenue per rep is up 22%."
    }
  },
  {
    id: 'autonomous-lead-gen',
    title: 'Autonomous Lead Machine',
    shortDescription: 'Full-stack lead generation on autopilot. LinkedIn, Email, and Chat without a human touch.',
    result: '$120k/yr Saved',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Lead Gen', 'Outbound', 'Multi-Channel'],
    fullStory: {
      challenge: "The client had 2 SDRs. Each cost $45k base salary + $10k in commissions + tools. Total cost: ~$120k/yr. Their job was to copy-paste emails and poke people on LinkedIn. They booked about 15 meetings a month combined.",
      solution: "We replaced the entire function with a multi-agent system. \n1. Agent A scrapes LinkedIn for ICPs.\n2. Agent B verifies emails.\n3. Agent C writes hyper-personalized emails referencing recent news.\n4. Agent D handles the website chat and books meetings directly.",
      results: [
        { label: 'Cost Per Lead', value: '-92%' },
        { label: 'SDRs Replaced', value: '2' },
        { label: 'Annual Savings', value: '$120,000' },
      ],
      content: "The client now pays $0 in salaries for lead gen. \n\nThe AI never sleeps, never complains about 'burnout', and never forgets to follow up. It books 40+ meetings a month (vs 15 manual) at a fraction of the cost. The human sales team just wakes up to a calendar full of qualified demos."
    }
  }
];
