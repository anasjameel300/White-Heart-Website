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
    image: 'https://images.unsplash.com/photo-1544254200-0df5275d33e7?auto=format&fit=crop&q=80&w=800',
    popular: true,
    pairings: ['3', '5']
  },
  {
    id: '2',
    name: { en: 'Hibiscus Rose Brew', ar: 'مشروب الكركديه والورد' },
    description: { en: 'Refreshing cold hibiscus tea with organic rose petals and lime.', ar: 'شاي الكركديه المنعش مع بتلات الورد العضوية والليمون.' },
    category: 'Cold Tea',
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&q=80&w=800',
    pairings: ['4']
  },
  {
    id: '3',
    name: { en: 'Classic Chocolate Chunk', ar: 'كلاسيك تشوكليت تشانك' },
    description: { en: 'Warm, gooey interior with chunks of Belgian milk chocolate.', ar: 'دافئة وهشة من الداخل مع قطع شوكولاتة بلجيكية فاخرة.' },
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1621236378699-8597f840b4a8?auto=format&fit=crop&q=80&w=800',
    popular: true,
    pairings: ['1', '6']
  },
  {
    id: '4',
    name: { en: 'Salted Caramel Pecan', ar: 'سولتيد كراميل بيكان' },
    description: { en: 'Buttery cookie with sea salt caramel and toasted pecans.', ar: 'كوكيز الزبدة مع الكراميل المملح والبيكان المحمص.' },
    category: 'Cookies',
    image: 'https://images.unsplash.com/photo-1499636138143-bd630f5cf446?auto=format&fit=crop&q=80&w=800',
    pairings: ['2', '5']
  },
  {
    id: '5',
    name: { en: 'Pistachio Gelato', ar: 'جيلاتو الفستق' },
    description: { en: 'Authentic Italian-style gelato made with premium roasted pistachios.', ar: 'جيلاتو إيطالي أصيل مصنوع من الفستق المحمص الفاخر.' },
    category: 'Ice Cream',
    image: 'https://images.unsplash.com/photo-1557142046-c704a3adf364?auto=format&fit=crop&q=80&w=800',
    popular: true,
    pairings: ['1', '3']
  },
  {
    id: '6',
    name: { en: 'Madagascar Vanilla', ar: 'فانيليا مدغشقر' },
    description: { en: 'Creamy gelato infused with real Madagascar vanilla beans.', ar: 'جيلاتو كريمي محضر من حبوب الفانيليا الطبيعية من مدغشقر.' },
    category: 'Ice Cream',
    image: 'https://images.unsplash.com/photo-1501443762994-82bd5dace89a?auto=format&fit=crop&q=80&w=800',
    pairings: ['3']
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