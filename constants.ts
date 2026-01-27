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
    description: { en: 'Refreshing house-blend ice tea. (163 Cal)', ar: 'آيس تي بخلطة وايت هارت المنعشة. (١٦٣ سعرة)' },
    category: 'Cold Tea',
    price: '16 rs',
    image: '/assets/Ice Tea.jpg',
    popular: true,
    pairings: ['2', '4']
  },
  {
    id: '2',
    name: { en: 'Classic Cookies', ar: 'كوكيز كلاسيك' },
    description: { en: 'Traditional warm chocolate chip cookies. (347 Cal)', ar: 'كوكيز كلاسيك دافئ بقطع الشوكولاتة. (٣٤٧ سعرة)' },
    category: 'Cookies',
    price: '10 rs',
    image: '/assets/Clasic cookies.jpg',
    popular: true,
    pairings: ['1', '7']
  },
  {
    id: '3',
    name: { en: 'Crunchy Cookies', ar: 'كوكيز كرانشي' },
    description: { en: 'Crispy cookies with a perfect bite. (347 Cal)', ar: 'كوكيز كرانشي مقرمش ومثالي. (٣٤٧ سعرة)' },
    category: 'Cookies',
    price: '13 rs',
    image: '/assets/Crunchy cookies .jpg',
    pairings: ['1']
  },
  {
    id: '4',
    name: { en: 'Vanilla Ice Cream', ar: 'آيس كريم فانيليا' },
    description: { en: 'Smooth and creamy vanilla gelato. (180 Cal)', ar: 'آيس كريم فانيليا كريمي وناعم. (١٨٠ سعرة)' },
    category: 'Ice Cream',
    price: '5 rs',
    image: '/assets/Ice cream.jpg',
    pairings: ['2', '3']
  },
  {
    id: '5',
    name: { en: 'Berry Cheesecake', ar: 'تشيزكيك التوت' },
    description: { en: 'Rich cheesecake topped with fresh berry compote. (356 Cal)', ar: 'تشيزكيك غني مُغطى بصلصة التوت الطازجة. (٣٥٦ سعرة)' },
    category: 'Cakes',
    price: '18 rs',
    image: '/assets/cheesecake Raspberry .jpg',
    pairings: ['7']
  },
  {
    id: '6',
    name: { en: 'Caramel Cheesecake', ar: 'تشيزكيك الكراميل' },
    description: { en: 'Creamy cheesecake with a rich caramel finish. (356 Cal)', ar: 'تشيزكيك كريمي مع طبقة غنية من الكراميل. (٣٥٦ سعرة)' },
    category: 'Cakes',
    price: '18 rs',
    image: '/assets/CheeseCake  Caramel.jpg',
    pairings: ['8']
  },
  {
    id: '7',
    name: { en: 'Americano', ar: 'أمريكانو' },
    description: { en: 'Pure black coffee brewed from premium beans. (4 Cal)', ar: 'قهوة سوداء صافية محضرة من أجود الأنواع. (٤ سعرات)' },
    category: 'Coffee',
    price: '13 rs',
    image: '/assets/Black Coffee L.jpg',
    pairings: ['2', '5']
  },
  {
    id: '8',
    name: { en: 'Classic Cookies with Ice Cream', ar: 'كوكيز مع آيس كريم' },
    description: { en: 'A divine combination of warm cookies and cold gelato.', ar: 'مزيج رائع بين الكوكيز الدافئ والآيس كريم البارد.' },
    category: 'Cookies',
    price: '12 rs',
    image: '/assets/Clasic cookies with ice cream .jpg',
    pairings: ['7']
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