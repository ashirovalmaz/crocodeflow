
export interface NavItem {
  label: string;
  href: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  shortDescription: string;
  result: string;
  image: string;
  tags: string[];
  fullStory: {
    challenge: string;
    solution: string;
    results: {
      label: string;
      value: string;
    }[];
    content: string;
  };
}
