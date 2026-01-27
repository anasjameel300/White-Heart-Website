import { MenuItem, LocationItem, Testimonial, InstagramPost } from './types';

export const UI_TEXT = {
  orderNow: { en: 'Order Now', ar: 'اطلب الآن' },
  exploreMenu: { en: 'Explore Menu', ar: 'اكتشف القائمة' },
  findBranch: { en: 'Find a Branch', ar: 'فروعنا' },
  ourStory: { en: 'Our Story', ar: 'قصتنا' },
  menu: { en: 'Menu', ar: 'القائمة' },
  locations: { en: 'Locations', ar: 'مواقعنا' },
  community: { en: 'Community', ar: 'مجتمعنا' },
  delivery: { en: 'Delivery', ar: 'التوصيل' },
  estJeddah: { en: 'Est. Jeddah • 2024', ar: 'تأسس في جدة • ٢٠٢٤' },
  rating: { en: 'Rating', ar: 'التقييم' },
  bestSeller: { en: 'Best Seller', ar: 'الأكثر مبيعاً' },
  viewDetails: { en: 'View Details', ar: 'التفاصيل' },
  scrollDown: { en: 'Scroll Down', ar: 'اسحب للأسفل' },
  discoverFlavors: { en: 'Discover Flavors', ar: 'اكتشف النكهات' },
  curatedPalette: { en: 'Curated for Your Palette', ar: 'مُعدّة لذائقتك' },
  indulgenceGuide: { en: 'The Indulgence Guide', ar: 'دليل الاستمتاع' },
  perfectMatch: { en: 'The Perfect Match', ar: 'المزيج المثالي' },
  socialHeartbeat: { en: 'Social Heartbeat', ar: 'نبض المجتمع' },
  capturedAt: { en: 'Captured at White Heart', ar: 'لحظات من وايت هارت' }
};

export const NAV_LINKS = [
  { id: 'about', name: { en: 'Our Story', ar: 'قصتنا' }, href: '#about' },
  { id: 'menu', name: { en: 'Menu', ar: 'القائمة' }, href: '#menu' },
  { id: 'locations', name: { en: 'Locations', ar: 'مواقعنا' }, href: '#locations' },
];

export const MENU_ITEMS: MenuItem[] = [
  {
    id: '1',
    name: { en: 'Signature Ice Tea', ar: 'آيس تي وايت هارت' },
    description: { en: 'Our famous house blend, steeped for 12 hours with a hint of peach.', ar: 'مزيجنا الخاص، منقوع لمدة ١٢ ساعة مع لمسة من الخوخ المنعش.' },
    category: 'Cold Tea',
    image: '/assets/Ice Tea.jpg',
    popular: true,
    pairings: ['3', '5']
  },
  {
    id: '3',
    name: { en: 'Classic Chocolate Chunk', ar: 'كلاسيك تشوكليت تشانك' },
    description: { en: 'Warm, gooey interior with chunks of Belgian milk chocolate.', ar: 'دافئة وهشة من الداخل مع قطع شوكولاتة بلجيكية فاخرة.' },
    category: 'Cookies',
    image: '/assets/Clasic cookies.jpg',
    popular: true,
    pairings: ['1', '8']
  },
  {
    id: '4',
    name: { en: 'Crunchy Chocolate Cookie', ar: 'كوكيز الشوكولاتة المقرمشة' },
    description: { en: 'Extra crunchy exterior with a rich dark chocolate heart.', ar: 'قوام مقرمش من الخارج مع قلب من الشوكولاتة الداكنة الغنية.' },
    category: 'Cookies',
    image: '/assets/Crunchy cookies .jpg',
    pairings: ['1']
  },
  {
    id: '5',
    name: { en: 'Premium Gelato', ar: 'جيلاتو فاخر' },
    description: { en: 'Authentic Italian-style gelato with premium natural flavors.', ar: 'جيلاتو إيطالي أصيل بنكهات طبيعية فاخرة.' },
    category: 'Ice Cream',
    image: '/assets/Ice cream.jpg',
    popular: true,
    pairings: ['1', '3']
  },
  {
    id: '7',
    name: { en: 'Caramel Cheesecake', ar: 'تشيزكيك الكراميل' },
    description: { en: 'Creamy New York style cheesecake topped with rich salted caramel.', ar: 'تشيزكيك كريمي على الطريقة النيويوركية مغطى بالكراميل المملح الغني.' },
    category: 'Cakes',
    image: '/assets/CheeseCake  Caramel.jpg',
    pairings: ['8']
  },
  {
    id: '8',
    name: { en: 'Signature Black Coffee', ar: 'بلاك كوفي وايت هارت' },
    description: { en: 'Expertly roasted beans brewed to perfection for a bold start.', ar: 'قهوة مختصة محضرة بعناية لبداية يوم مليئة بالنشاط.' },
    category: 'Coffee',
    image: '/assets/Black Coffee L.jpg',
    pairings: ['7', '3']
  }
];

export const INSTAGRAM_POSTS: InstagramPost[] = [
  {
    id: 'ig1',
    image: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=800',
    likes: '1.2k',
    caption: { en: 'Sunsets and Signature Brews. #JeddahNights', ar: 'غروب الشمس ومشروباتنا المميزة. #ليالي_جدة' }
  },
  {
    id: 'ig2',
    image: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?auto=format&fit=crop&q=80&w=800',
    likes: '850',
    caption: { en: 'The perfect crunch. Our cookies are fresh out the oven.', ar: 'القرمشة المثالية. كوكيزنا طازجة من الفرن.' }
  },
  {
    id: 'ig3',
    image: 'https://images.unsplash.com/photo-1497034825429-c343d7c6a68f?auto=format&fit=crop&q=80&w=800',
    likes: '2.1k',
    caption: { en: 'Creamy dreams in every scoop.', ar: 'أحلام كريمية في كل ملعقة.' }
  },
  {
    id: 'ig4',
    image: 'https://images.unsplash.com/photo-1517077304055-6e89a383899d?auto=format&fit=crop&q=80&w=800',
    likes: '1.5k',
    caption: { en: 'A space for conversation and connection.', ar: 'مساحة للحديث والتواصل.' }
  }
];

export const LOCATIONS: LocationItem[] = [
  {
    id: '1',
    name: { en: 'Al Rawdah Branch', ar: 'فرع الروضة' },
    address: { en: 'Prince Sultan Rd, Al Rawdah, Jeddah', ar: 'طريق الأمير سلطان، حي الروضة، جدة' },
    googleMapsUrl: 'https://goo.gl/maps/placeholder',
    phone: '+966 12 000 0000'
  },
  {
    id: '2',
    name: { en: 'Red Sea Mall', ar: 'رد سي مول' },
    address: { en: 'King Abdulaziz Branch Rd, Ash Shati, Jeddah', ar: 'طريق الملك عبدالعزيز، حي الشاطئ، جدة' },
    googleMapsUrl: 'https://goo.gl/maps/placeholder',
    phone: '+966 12 000 0001'
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: '1',
    text: {
      en: "The Signature Cold Tea is unlike anything else in Jeddah. Perfectly balanced.",
      ar: "شاي وايت هارت المثلج لا يعلى عليه في جدة. توازن مثالي في النكهات."
    },
    author: { en: "Sara Al-Otaibi", ar: "سارة العتيبي" },
    location: { en: "Al Rawdah", ar: "الروضة" },
    rating: 5
  },
  {
    id: '2',
    text: {
      en: "Warm chocolate chunk cookies paired with their pistachio gelato is my weekend ritual.",
      ar: "كوكيز الشوكولاتة الدافئة مع جيلاتو الفستق هي طقوسي الخاصة في نهاية الأسبوع."
    },
    author: { en: "Mohammed Bin Rashid", ar: "محمد بن راشد" },
    location: { en: "Red Sea Mall", ar: "رد سي مول" },
    rating: 5
  }
];