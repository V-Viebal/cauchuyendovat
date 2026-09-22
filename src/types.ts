export type VerificationStatus = 
  | 'verified_brand' 
  | 'brand_submitted' 
  | 'community_contributed' 
  | 'unverified';

export interface ProvenanceEvent {
  id: string;
  stage: 'concept' | 'material' | 'prototype' | 'production' | 'distribution' | 'living';
  title: string;
  date: string;
  actor: string;
  location: string;
  description: string;
  evidenceDocs?: string[];
  verified: boolean;
}

export interface ScanPatternReport {
  score: number; // e.g. 96 (%)
  status: 'original' | 'referenced' | 'duplicate_risk';
  featuresAnalyzed: string[];
  similarReferences: Array<{
    name: string;
    similarity: number;
    maker: string;
    notes: string;
  }>;
  summary: string;
  certifiedDate: string;
}

export interface CommunityMemory {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  ownershipDuration: string;
  content: string;
  image?: string;
  date: string;
  likes: number;
  userLiked?: boolean;
}

export interface ObjectProfile {
  id: string;
  monosCode: string; // e.g. "MNS-VN-2024-CLD01" - Chứng minh nhân dân của đồ vật
  name: string;
  brand: string;
  designer: {
    name: string;
    title: string;
    avatar: string;
    verified: boolean;
    studioUrl?: string;
  };
  manufacturer: string;
  year: number;
  originCity: string;
  category: 'seating' | 'lighting' | 'table' | 'storage' | 'decor';
  categoryLabel: string;
  materials: string[];
  techniques: string[];
  dimensions: string;
  verificationStatus: VerificationStatus;
  verificationBadgeText: string;
  shortDescription: string;
  story: string;
  designIntent: string;
  images: string[];
  cadDrawingUrl?: string;
  provenanceTimeline: ProvenanceEvent[];
  scanPatternReport: ScanPatternReport;
  communityMemories: CommunityMemory[];
  tags: string[];
  ownerCount: number;
  savesCount: number;
  sku?: string;
  websiteUrl?: string;
  bplusId?: number;
}

export interface CommentReply {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  isLiked?: boolean;
}

export interface PostComment {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    badge?: string;
  };
  content: string;
  timestamp: string;
  likes: number;
  isLiked?: boolean;
  attachmentImg?: string;
  replies?: CommentReply[];
}

export type PostType = 
  | 'editorial_story' 
  | 'community_memory' 
  | 'provenance_update' 
  | 'scan_pattern' 
  | 'workshop_craft' 
  | 'open_brief';

export interface Post {
  id: string;
  author: {
    name: string;
    avatar: string;
    role: string;
    verified?: boolean;
  };
  timestamp: string;
  type: PostType;
  taggedObject?: ObjectProfile;
  content: string;
  extendedContent?: string;
  images: string[];
  provenanceBadges?: string[];
  likes: number;
  isLiked: boolean;
  isSaved: boolean;
  commentsCount: number;
  sharesCount: number;
  comments: PostComment[];
}

export interface Designer {
  id: string;
  name: string;
  avatar: string;
  studio: string;
  specialty: string;
  location: string;
  objectsCount: number;
  bio: string;
  isFollowing: boolean;
  featuredWork: string;
  openForCommission: boolean;
}

export interface CommunityGroup {
  id: string;
  name: string;
  banner: string;
  icon: string;
  membersCount: string;
  postsPerDay: string;
  description: string;
  isJoined: boolean;
  category: string;
}

export interface StoryHighlight {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  avatar: string;
  author: string;
  objectId?: string;
  isViewed?: boolean;
}

export interface MagazineArticle {
  id: string;
  issueNumber: string; // e.g. "Kỳ 04 • Mùa Thu 2024"
  title: string;
  subtitle: string;
  excerpt: string;
  category: 'cover_story' | 'craft_forensics' | 'maker_dialogue' | 'ip_scan' | 'living_archive';
  categoryLabel: string;
  readTime: string;
  author: {
    name: string;
    avatar: string;
    role: string;
  };
  publishedDate: string;
  coverImage: string;
  galleryImages: string[];
  taggedObject?: ObjectProfile;
  contentParagraphs: string[];
  pullQuote?: {
    quote: string;
    speaker: string;
  };
  keyTakeaways?: string[];
  savesCount: number;
  clapsCount: number;
}
