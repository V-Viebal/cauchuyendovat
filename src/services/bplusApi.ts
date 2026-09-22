// Service kết nối API trực tiếp từ bplusfurniture.com.vn (Payload CMS)
import { BplusProductItem } from '../data/bplusOfficialProducts';

export interface BplusApiResponse {
  docs: any[];
  totalDocs: number;
  limit: number;
  totalPages: number;
  page: number;
  pagingCounter: number;
  hasPrevPage: boolean;
  hasNextPage: boolean;
}

const BPLUS_API_BASE = 'https://bplusfurniture.com.vn/api';

export async function fetchLiveBplusProducts(limit = 50, page = 1, search = ''): Promise<BplusApiResponse> {
  try {
    let url = `${BPLUS_API_BASE}/products?limit=${limit}&page=${page}&depth=2`;
    if (search.trim()) {
      url += `&where[name][like]=${encodeURIComponent(search.trim())}`;
    }
    const res = await fetch(url);
    if (!res.ok) {
      throw new Error(`B+ API request failed: ${res.status}`);
    }
    return await res.json();
  } catch (error) {
    console.warn('Live fetch from B+ API failed, falling back to local dataset:', error);
    throw error;
  }
}

export async function fetchSingleBplusProduct(idOrSlug: string | number): Promise<any> {
  try {
    const res = await fetch(`${BPLUS_API_BASE}/products/${idOrSlug}?depth=2`);
    if (!res.ok) {
      throw new Error(`Product not found: ${idOrSlug}`);
    }
    return await res.json();
  } catch (error) {
    console.warn(`Failed to fetch product ${idOrSlug}:`, error);
    throw error;
  }
}
