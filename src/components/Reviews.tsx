import { Quote } from "lucide-react";

const testimonial = {
  quote:
    "Highly satisfied with the quality and creativity. The website helped improve my business presence online. Very happy with the website design and support. The website looks professional, smooth, and easy to use. Thank you for the great work!",
  name: "KV Sky Turf",
  role: "Sports Turf Business",
};

const Reviews = () => (
  <section id="reviews" className="bg-muted/30 px-5 py-20 sm:px-8 sm:py-24">
    <div className="mx-auto max-w-6xl">
      <div className="mx-auto mb-10 max-w-2xl text-center">
        <p className="font-mono-tech text-xs uppercase tracking-[0.18em] text-accent">
          Client feedback
        </p>
        <h2 className="mt-3 font-heading text-2xl font-semibold tracking-tight sm:text-3xl">
          A client&apos;s experience.
        </h2>
      </div>

      <figure className="surface-card relative mx-auto max-w-4xl overflow-hidden rounded-[1.75rem] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_55px_-36px_hsl(var(--accent)/0.7)] sm:p-10">
        <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-accent/10 blur-3xl" />
        <Quote className="relative mb-5 h-8 w-8 text-accent/70" aria-hidden="true" />
        <blockquote className="relative text-base leading-relaxed text-foreground sm:text-lg">
          “{testimonial.quote}”
        </blockquote>
        <figcaption className="relative mt-7 border-t border-border pt-5">
          <div className="font-heading text-base font-semibold text-foreground">{testimonial.name}</div>
          <div className="mt-1 text-sm text-muted-foreground">{testimonial.role}</div>
        </figcaption>
      </figure>
    </div>
  </section>
);

export default Reviews;
