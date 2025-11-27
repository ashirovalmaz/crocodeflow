
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
    image: "https://raw.githubusercontent.com/ashirovalmaz/crocodeflow/refs/heads/main/data/photo_2024-09-13_15-49-56.jpg" // Replace with Almaz's photo
  },
  {
    name: "Albert",
    role: "Head of Growth",
    bio: "The strategist who turns chaos into cash flow. He dissects business processes with surgical precision, finding the leaks and plugging them with automation. If a workflow doesn't directly increase revenue or save time, he kills it.",
    image: "https://raw.githubusercontent.com/ashirovalmaz/crocodeflow/refs/heads/main/data/photo_2025-10-04_22-44-16.jpg" // Replace with Albert's photo
  }
];
