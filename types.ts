import React from 'react';

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price?: string;
  category: 'Cold Tea' | 'Cookies' | 'Ice Cream' | 'Coffee';
  image: string;
  popular?: boolean;
}

export interface LocationItem {
  id: string;
  name: string;
  address: string;
  googleMapsUrl: string;
  phone: string;
}

export interface SocialLink {
  platform: string;
  url: string;
  icon: React.ReactNode;
}