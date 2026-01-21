export interface ExperienceListType {
  id: string;
  key: string; // Translation key for experience
  title?: string; // Optional fallback title
  subtitle?: string; // Optional fallback subtitle
  description?: string[]; // Optional fallback description
  startDate?: string; // Optional fallback start date
  endDate?: string; // Optional fallback end date
}
