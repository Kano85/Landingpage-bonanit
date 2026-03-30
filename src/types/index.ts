// src/types/index.ts
export interface Page {
  id: string;
  title: string;
  content: string;
  slug: string;
}

export interface Post {
  id: string;
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  date: string;
}

export interface MenuItem {
  id: string;
  label: string;
  url: string;
  children?: MenuItem[];
}
