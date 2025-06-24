
export enum VerdictLabel {
  TRUE = "E Vërtetë",
  MOSTLY_TRUE = "Kryesisht e Vërtetë",
  HALF_TRUE = "Pjesërisht e Vërtetë",
  MOSTLY_FALSE = "Kryesisht e Gabuar",
  FALSE = "E Gabuar",
  MISLEADING = "Mashtruese",
  UNVERIFIABLE = "E Paverifikueshme",
  CANNOT_DETERMINE = "Nuk Mund të Përcaktohet",
  UNKNOWN = "E Panjohur" // Fallback, mbetet për përdorim të brendshëm
}

export interface Source {
  uri: string;
  title: string;
}

export interface FactCheckResult {
  originalClaim: string;
  summary: string;
  verdict: VerdictLabel;
  sources: Source[];
}

// Rating types for news articles
export type NewsAuthenticityRating = 
  | "VERIFIED_ACCURATE"       // Plotësisht i Vërtetë
  | "MOSTLY_ACCURATE"         // Kryesisht i Vërtetë
  | "PARTIALLY_ACCURATE"      // Pjesërisht i Vërtetë / Kontekst Mungon
  | "ACCURACY_UNCLEAR"        // Paqartësi / Nevojitet Verifikim Shtesë
  | "POTENTIAL_MISINFORMATION"; // Dezinformim i Mundshëm / I Gabuar

export type SourceReliabilityRating =
  | "VERY_HIGH_REPUTATION"    // Reputacion Shumë i Lartë
  | "HIGH_REPUTATION"         // Reputacion i Lartë
  | "MEDIUM_REPUTATION"       // Reputacion i Mesëm
  | "LOW_REPUTATION_MIXED"    // Reputacion i Ulët / I Përzier
  | "UNRELIABLE_UNKNOWN";     // Jo i Besueshëm / I Panjohur


export interface BreakingNewsItemData {
  id: number;
  title: string;
  sourceName: string; // e.g., "Top Channel", "Reuters"
  sourceType: 'albanian' | 'international'; // To categorize the source
  content: string; // Full content of the news article, may contain highlight markup
  imageUrl?: string; // Optional image for the article page
  publishedDate: string; // e.g., "June 10, 2024"
  newsAuthenticity: NewsAuthenticityRating;
  sourceReliability: SourceReliabilityRating;
  isHighlyRelevantCurrentDevelopment?: boolean; // Flag for special highlighting
}