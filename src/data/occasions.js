// Occasions now map to actual product images from local assets
import pomPomHangings from '../assets/images/categories/PomPomHangings.jpg';
import navratriRings from '../assets/images/categories/NavratriRings.png';
import toran from '../assets/images/categories/Toran.png';
import sublabh from '../assets/images/categories/Subhlabh.png';
import rangoli from '../assets/images/categories/Rangoli.png';
import wallitems from '../assets/images/categories/wallitems.png';

export const occasions = [
  {
    id: 'diwali-celebrations',
    name: 'Diwali Celebrations',
    subtitle: 'Lamps, Torans & Auspicious Decor',
    tag: 'Festive Lights',
    image: pomPomHangings,
    categorySlug: 'festival-decor',
  },
  {
    id: 'navratri',
    name: 'Navratri Dandiya Nights',
    subtitle: 'Vibrant Jewelry & Chaniya Choli Accents',
    tag: 'Folk Joy',
    image: navratriRings,
    categorySlug: 'navratri-accessories',
  },
  {
    id: 'toran',
    name: 'Toran Collection',
    subtitle: 'Floral, Gota & Evil Eye Door Torans',
    tag: 'Threshold Blessings',
    image: toran,
    categorySlug: 'toran',
  },
  {
    id: 'subh-labh',
    name: 'Subh Labh (Small)',
    subtitle: 'Auspicious Wall & Door Blessings',
    tag: 'Sacred Symbols',
    image: sublabh,
    categorySlug: 'subh-labh-small',
  },
  {
    id: 'rangoli',
    name: 'Rangoli Collection',
    subtitle: 'Reusable Lotus, Peacock & Pom Pom Rangolis',
    tag: 'Artful Floors',
    image: rangoli,
    categorySlug: 'rangoli-collection',
  },
  {
    id: 'housewarming-gifts',
    name: 'Long Wall / Door Hangings',
    subtitle: 'Pom Pom, Bell & Lotus Hanging Sets',
    tag: 'Sweet Home',
    image: wallitems,
    categorySlug: 'long-wall-door-hangings',
  },
];
