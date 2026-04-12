export interface ProductSpec {
  label: string;
  value: string;
  icon?: string;
}

export interface ProductFeature {
  title: string;
  description: string;
  icon: string;
}

export interface ProductDownload {
  type: 'PDF' | 'DWG' | 'RVT';
  label: string;
  url: string;
}

export interface Product {
  slug: string;
  name: string;
  category: string;
  categorySlug: string;
  heroImage: string;
  description: string;
  introText: string;
  isRPT?: boolean;
  specs: ProductSpec[];
  features: ProductFeature[];
  downloads: ProductDownload[];
  gallery: string[];
}
