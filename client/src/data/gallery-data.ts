export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  category: string;
  title: string;
  description: string;
}

export const galleryData: GalleryItem[] = [
  {
    id: "1",
    src: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "עיצוב מרהיב לחתונה עם שולחנות מעוטרים",
    category: "weddings",
    title: "חתונה מרהיבה",
    description: "150 אורחים במושב הדר"
  },
  {
    id: "2",
    src: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "אירוע עסקי אלגנטי במשרדים מרכזיים",
    category: "corporate",
    title: "השקת חברה",
    description: "כיבוד עסקי מרהיב"
  },
  {
    id: "3",
    src: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "חגיגה משפחתית חמה עם ילדים ומבוגרים",
    category: "family",
    title: "בר מצווה",
    description: "חגיגה משפחתית מיוחדת"
  },
  {
    id: "4",
    src: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "מגש מנות עיקריות מסורתיות ומפתות",
    category: "food",
    title: "המנות שלנו",
    description: "אסאדו ברוטב יין אדום"
  },
  {
    id: "5",
    src: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "מטבח מקצועי עם שפים מכינים מנות",
    category: "food",
    title: "מאחורי הקלעים",
    description: "הכנה עם אהבה"
  },
  {
    id: "6",
    src: "https://images.unsplash.com/photo-1464207687429-7505649dae38?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=400",
    alt: "שולחן חתונה מעוצב בסגנון רומנטי",
    category: "weddings",
    title: "חתונת גן",
    description: "רומנטית ואינטימית"
  }
];

export const galleryCategories = [
  { id: "all", name: "הכל" },
  { id: "weddings", name: "חתונות" },
  { id: "corporate", name: "אירועים עסקיים" },
  { id: "family", name: "אירועים משפחתיים" },
  { id: "food", name: "המנות שלנו" }
];
