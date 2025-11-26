
export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
}

export const TEAM: TeamMember[] = [
  {
    name: "Alex",
    role: "Technical Founder",
    bio: "Ex-FAANG engineer who got tired of building features nobody used. Now builds systems that replace entire departments. If code doesn't print money, he deletes it.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&w=1000&auto=format&fit=crop"
  },
  {
    name: "Dimitri",
    role: "Head of Scale",
    bio: "Operations architect. If a process takes more than 3 clicks, he automates it. Obsessed with margins, speed, and removing human error from the loop.",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=1000&auto=format&fit=crop"
  }
];
