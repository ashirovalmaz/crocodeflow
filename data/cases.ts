
import { CaseStudy } from '../types';

export const CASES: CaseStudy[] = [
  {
    id: 'quality-control',
    title: 'The "Invisible" QC Department',
    shortDescription: 'We built a Quality Control department for a sales team of 50. Number of humans hired: 0.',
    result: 'Saved $120k/yr in Salaries',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&w=2070&auto=format&fit=crop',
    tags: ['Sales Ops', 'Audio Analysis', 'Automated QA'],
    fullStory: {
      challenge: "The client had 50 sales reps. Managers could only listen to 2% of calls. Reps were going off-script, missing upsells, and occasionally being rude. The company was bleeding revenue and didn't know why.",
      solution: "We built a custom pipeline that transcribes every single call in real-time. An LLM agent analyzes the transcript against the 'Perfect Call' playbook, scores the rep from 0-100, and instantly Slack DM's the manager if a 'Red Flag' phrase is used.",
      results: [
        { label: 'Call Coverage', value: '100%' },
        { label: 'Conversion Rate', value: '+30%' },
        { label: 'Salaries Saved', value: '$120k' },
      ],
      content: "Instead of hiring 3 QA managers to listen to calls at random, the AI listens to EVERYTHING. It detects tone, objection handling, and script compliance. \n\nNow, every morning, the Sales Director gets a 'Naughty & Nice' list of reps. Low performers get instant feedback. High performers get their winning tactics extracted and shared with the team automatically."
    }
  },
  {
    id: 'logistics-prediction',
    title: 'Supply Chain Oracle',
    shortDescription: 'Predicting inventory stock-outs 3 weeks before they happen.',
    result: 'Reduced Overstock by 40%',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=2070&auto=format&fit=crop',
    tags: ['Logistics', 'Predictive Analytics', 'Inventory'],
    fullStory: {
      challenge: "An e-commerce giant was losing money two ways: 1) Running out of best-sellers (lost revenue). 2) Over-ordering duds (storage fees). They were guessing based on 'gut feeling'.",
      solution: "We connected their Shopify API and 3PL warehouse data to a predictive model. It analyzes seasonality, ad spend velocity, and historical trends to forecast demand.",
      results: [
        { label: 'Stockouts', value: '0%' },
        { label: 'Storage Savings', value: '$45k/mo' },
        { label: 'Accuracy', value: '94%' },
      ],
      content: "The system now places draft orders automatically. It knows that if ad spend on 'Product A' increases by 20%, we need 500 more units by next Tuesday. \n\nIt alerts the procurement team only when necessary. The result? Leaner warehouses and zero 'Out of Stock' banners on their site."
    }
  },
  {
    id: 'lead-enrichment',
    title: 'Sniper-Scope Lead Gen',
    shortDescription: 'Tripled the demo show rate by knowing everything about the prospect before the phone rang.',
    result: '3x Demo Show Rate',
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2015&auto=format&fit=crop',
    tags: ['Sales', 'Data Enrichment', 'CRM'],
    fullStory: {
      challenge: "SDRs were spending 15 minutes researching a lead before calling. 50% of the time, the lead wasn't even qualified. Huge waste of human capital.",
      solution: "We built an enrichment waterfall. When a lead hits the landing page, our bots scrape their LinkedIn, Company Revenue, Tech Stack, and Recent News. If they don't match the ICP (Ideal Customer Profile), they get a nurture email. If they DO match, they get routed to the 'Closer' queue immediately with a generated 'Ice Breaker'.",
      results: [
        { label: 'Research Time', value: '0 min' },
        { label: 'Pipeline Value', value: '+210%' },
        { label: 'Reps Needed', value: '-2' },
      ],
      content: "Sales reps now open their dashboard and see a list of 'Ready to Buy' leads with a cheat sheet for every single one. \n\nThey know the prospect's recent funding news, their tech stack issues, and their role challenges before they even say 'Hello'. It's not fair. It's automated dominance."
    }
  }
];
