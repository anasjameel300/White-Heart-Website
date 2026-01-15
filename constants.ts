import { MenuItem, LocationItem } from './types';

export const NAV_LINKS = [
  { name: 'Our Story', href: '#about' },
  { name: 'Menu', href: '#menu' },
  { name: 'Locations', href: '#locations' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: 'Signature Ice Tea',
    description: 'Our famous house blend, steeped for 12 hours and served ice-cold with a hint of peach.',
    category: 'Cold Tea',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: '2',
    name: 'Hibiscus Pomegranate',
    description: 'A vibrant ruby-red infusion, tart and refreshing with fresh pomegranate seeds.',
    category: 'Cold Tea',
    image: 'https://images.unsplash.com/photo-1513558161293-cdaf765ed2fd?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '3',
    name: 'Classic Chocolate Chunk',
    description: 'Warm, gooey interior with crispy edges and chunks of Belgian milk chocolate.',
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1499636138143-bd630f5cf446?auto=format&fit=crop&q=80&w=800',
    popular: true
  },
  {
    id: '4',
    name: 'Red Velvet White Heart',
    description: 'Soft-baked red velvet dough filled with a creamy white chocolate center.',
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1621236378699-8597f840b4a8?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '5',
    name: 'Pistachio Gelato',
    description: 'Authentic Italian-style gelato made with premium roasted pistachios.',
    category: 'Ice Cream',
    image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80&w=800'
  },
  {
    id: '6',
    name: 'Madagascan Vanilla',
    description: 'Speckled with real vanilla beans, perfect on its own or atop a warm cookie.',
    category: 'Ice Cream',
    image: 'https://images.unsplash.com/photo-1570197788417-0e82375c9371?auto=format&fit=crop&q=80&w=800'
  }
];

export const LOCATIONS: LocationItem[] = [
  {
    id: '1',
    name: 'Al Rawdah Branch',
    address: 'Prince Sultan Rd, Al Rawdah, Jeddah',
    googleMapsUrl: 'https://goo.gl/maps/placeholder',
    phone: '+966 12 000 0000'
  },
  {
    id: '2',
    name: 'Red Sea Mall',
    address: 'King Abdulaziz Branch Rd, Ash Shati, Jeddah',
    googleMapsUrl: 'https://goo.gl/maps/placeholder',
    phone: '+966 12 000 0001'
  },
  {
    id: '3',
    name: 'Obhur Branch',
    address: 'Prince Abdullah AlFaisal St, Obhur Al Shamaliyah',
    googleMapsUrl: 'https://goo.gl/maps/placeholder',
    phone: '+966 12 000 0002'
  },
  {
    id: '4',
    name: 'Al Basateen',
    address: 'Prince Sultan Rd, Al Basateen, Jeddah',
    googleMapsUrl: 'https://goo.gl/maps/placeholder',
    phone: '+966 12 000 0003'
  }
];