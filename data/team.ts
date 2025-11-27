
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Almaz",
    role: "Head of Engineering",
    bio: "The architect behind the invisible workforce. He doesn't just write code; he builds the neural networks and automation pipelines that replace entire departments. Expert in LLMs and high-load systems. While you sleep, his algorithms are working.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop" // Replace with Almaz's photo
  },
  {
    name: "Albert",
    role: "Head of Growth",
    bio: "The strategist who turns chaos into cash flow. He dissects business processes with surgical precision, finding the leaks and plugging them with automation. If a workflow doesn't directly increase revenue or save time, he kills it.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop" // Replace with Albert's photo
  }
];
