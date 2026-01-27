import React from 'react';

export type Language = 'en' | 'ar';

export interface LocalizedString {
  en: string;
  ar: string;
}

export interface MenuItem {
  id: string;
  name: LocalizedString;
  description: LocalizedString;
  price?: string;
  category: 'Cold Tea' | 'Cookies' | 'Ice Cream' | 'Coffee' | 'Cakes';
  image: string;
  popular?: boolean;
  pairings?: string[]; // IDs of recommended items
}

export interface LocationItem {
  id: string;
  name: LocalizedString;
  address: LocalizedString;
  googleMapsUrl: string;
  phone: string;
}

export interface Testimonial {
  id: string;
  text: LocalizedString;
  author: LocalizedString;
  location: LocalizedString;
  rating: number;
}

export interface InstagramPost {
  id: string;
  image: string;
  likes: string;
  caption: LocalizedString;
}