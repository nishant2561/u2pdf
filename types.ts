
export type ToolCategory = 'All' | 'Conversion' | 'Editing' | 'Security' | 'Popular';

export interface Tool {
  id: string;
  title: string;
  icon: string;
  desc: string;
  accept: string;
  category: ToolCategory;
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

export interface ProcessOptions {
  files: File[];
  textContent?: string;
  splitRange?: string;
  rotateAngle?: number;
  watermarkText?: string;
  password?: string;
  compressionLevel?: number;
}

export type ViewType = 'home' | 'tool';

export interface DownloadLink {
  url: string;
  name: string;
  size: number;
}
