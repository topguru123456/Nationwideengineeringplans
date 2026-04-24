/** Avatars in `public/assets/images/testimonials/` */

export type HomeTestimonial = {
  name: string;
  quote: string;
  avatarSrc: string;
};

export const homeTestimonials: readonly HomeTestimonial[] = [
  {
    name: "Andrew Williams",
    quote:
      "Man, these folks were on the ball. Drawings were clean, hit every permit note the city asked for, and the whole team felt like pros from day one.",
    avatarSrc: "/assets/images/testimonials/Andrew Williams.jpg",
  },
  {
    name: "Darwin Martinez",
    quote:
      "They made the whole process a breeze. Real experts on the plans side, and we had a solid permit path without chasing people for answers.",
    avatarSrc: "/assets/images/testimonials/Darwin Martinez.jpg",
  },
  {
    name: "Kevin Chang",
    quote:
      "Sharp eye for detail on the sets, and coordination with our contractor was straightforward. Honest timelines and no runaround—exactly what we needed.",
    avatarSrc: "/assets/images/testimonials/Kevin Chang.jpg",
  },
  {
    name: "Lilly Indriago",
    quote:
      "Responsive, practical redlines, and sets that matched how our AHJ actually reads packages. Would use them again on the next build without thinking twice.",
    avatarSrc: "/assets/images/testimonials/Lilly Indriago.jpg",
  },
] as const;
