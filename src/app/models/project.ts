export interface Project {
  id: string;
  titleKey: string;
  descriptionKey: string;
  tags: string[];
  image?: string;
  logo?: string;
  url?: string;
  repo?: string;
  featured?: boolean;
}
