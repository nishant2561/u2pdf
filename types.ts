
export type MainCategory = 'CONVERT' | 'COMPRESS';
export type SubCategory = 'PDF/DOC' | 'IMAGE' | 'VIDEO/AUDIO';
export type ToolCategory = 'All' | 'Conversion' | 'Editing' | 'Security' | 'Popular';

export interface Tool {
  id: string;
  title: string;
  icon: string;
  desc: string;
  accept: string;
  category: ToolCategory;
  mainCategory: MainCategory;
  subCategory: SubCategory;
  multiple?: boolean;
  hot?: boolean;
  about: string;
}

export interface ProcessResult {
  success: boolean;
  message?: string;
  data?: Blob | null;
  filename?: string;
}

export interface WatermarkConfig {
  text: string;
  opacity: number;
  position: 'center' | 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right';
}

export interface ProcessOptions {
  files: File[];
  textContent?: string;
  splitRange?: string;
  rotateAngle?: number;
  watermarkText?: string;
  watermarkConfig?: WatermarkConfig;
  password?: string;
  compressionLevel?: number;
  removedPages?: number[];
  rotations?: Record<number, number>;
  pageNumberPosition?: 'top' | 'bottom';
}

export type ViewType = 'home' | 'tool' | 'legal' | 'security' | 'privacy' | 'terms' | 'cookies';

export interface DownloadLink {
  url: string;
  name: string;
  size: number;
}
