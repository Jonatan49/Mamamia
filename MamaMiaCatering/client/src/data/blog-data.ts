export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  date: string;
  image: string;
  alt: string;
}

export const blogData: BlogPost[] = [
  {
    id: "1",
    title: "איך לבחור את התפריט המושלם לאירוע שלכם",
    excerpt: "5 עקרונות זהב לבחירת תפריט שיתאים בדיוק לטעם האורחים ולתקציב שלכם. מניסיונינו של 25 שנה.",
    content: "תוכן מלא של הפוסט יהיה כאן...",
    category: "טיפים מקצועיים",
    date: "לפני שבוע",
    image: "https://images.unsplash.com/photo-1414235077428-338989a2e8c0?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "הגשה מקצועית של מנות קייטרינג מעוצבות"
  },
  {
    id: "2",
    title: "המתכון הסודי לאסאדו המושלם של מאמאמיה",
    excerpt: "הפעם נחשוף לכם את אחד המתכונים המבוקשים ביותר שלנו - אסאדו שנמס בפה ונשאר בזיכרון.",
    content: "מתכון מפורט יהיה כאן...",
    category: "מתכונים",
    date: "לפני שבועיים",
    image: "https://images.unsplash.com/photo-1574484284002-952d92456975?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "בישול מסורתי במטבח עם מרכיבים טריים"
  },
  {
    id: "3",
    title: "החתונה של רחל ודוד - סיפור הצלחה מיוחד",
    excerpt: '"מאמאמיה הפכו את החתונה שלנו לחלום שהתגשם. כל האורחים עדיין מדברים על האוכל המדהים!"',
    content: "סיפור מלא של החתונה יהיה כאן...",
    category: "סיפורי לקוחות",
    date: "לפני חודש",
    image: "https://images.unsplash.com/photo-1529636798458-92182e662485?ixlib=rb-4.0.3&auto=format&fit=crop&w=600&h=300",
    alt: "לקוחות מרוצים נהנים מאירוע עם אוכל איכותי"
  }
];
