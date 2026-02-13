import { gsap } from 'gsap';

// CSS fade-in (trigger="fade-in") when entering viewport
export function initFadeInOnScroll() {
  const elements = document.querySelectorAll<HTMLElement>('[trigger="fade-in"]');

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target as HTMLElement;
        if (entry.isIntersecting) {
          el.classList.add('is-in-view');
        } else {
          el.classList.remove('is-in-view');
        }
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach((el) => observer.observe(el));
}

export function animateHeroIntro() {
  const navbar = document.querySelector('#navbar');
  const heroHeading = document.querySelector('[trigger="hero-heading"]');
  const heroCta = document.querySelector('[trigger="hero-cta"]');

  const tl = gsap.timeline();

  if (navbar) {
    tl.from(navbar, {
      y: -80,
      opacity: 0,
      duration: 0.6,
      ease: 'power3.out',
    });
  }

  if (heroHeading) {
    tl.from(heroHeading, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    });
  }

  if (heroCta) {
    tl.from(heroCta, {
      y: 40,
      opacity: 0,
      duration: 0.7,
      ease: 'power3.out',
    });
  }
}

export function animateHeroGrid() {
  const heroGrid = document.querySelector('.hero_grid');

  if (heroGrid) {
    gsap.fromTo(
      heroGrid,
      {
        opacity: 0,
        y: 80,
      },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        ease: 'power.out',
      }
    );
  }
}

export function animateNavbar() {
  const navbar = document.querySelector('.navbar_component');
  let lastScrollY = window.scrollY;
  let isNavbarVisible = true;

  if (navbar) {
    window.addEventListener('scroll', () => {
      const currentScrollY = window.scrollY;
      const scrollingDown = currentScrollY > lastScrollY;

      if (scrollingDown && isNavbarVisible) {
        // Slide down
        gsap.to(navbar, {
          y: -100,
          duration: 0.3,
          ease: 'power2.inOut',
        });
        isNavbarVisible = false;
      } else if (!scrollingDown && !isNavbarVisible) {
        // Slide up
        gsap.to(navbar, {
          y: 0,
          duration: 0.3,
          ease: 'power2.inOut',
        });
        isNavbarVisible = true;
      }

      lastScrollY = currentScrollY;
    });
  }
}

export function animateFeatures() {
  // Animation pour les features
  const featuresGrid = document.querySelector('.features_grid');
  const featuresSection = document.querySelector('.section_features');

  if (featuresGrid && featuresSection) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              featuresGrid.children,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                stagger: 0.2,
                ease: 'power.out',
                clearProps: 'opacity,transform',
              }
            );
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observer.observe(featuresSection);
  }

  // Animation pour les FAQs
  const faqList = document.querySelector('.faq_list');
  const faqSection = document.querySelector('.section_faq');

  if (faqList && faqSection) {
    const observerFaq = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              faqList.children,
              { opacity: 0, y: 30 },
              {
                opacity: 1,
                y: 0,
                duration: 0.6,
                stagger: 0.2,
                ease: 'power.out',
                clearProps: 'opacity,transform',
              }
            );
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observerFaq.observe(faqSection);
  }
}

export function animateAbout() {
  // Animation pour la section about
  const aboutContent = document.querySelector('.about_content');
  const aboutSection = document.querySelector('.section_about');

  if (aboutContent && aboutSection) {
    const observerAbout = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              aboutContent,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
              }
            );
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observerAbout.observe(aboutSection);
  }

  // Animation pour la section testimonial
  const testimonialContent = document.querySelector('.testimonial_content');
  const testimonialSection = document.querySelector('.section_testimonial');

  if (testimonialContent && testimonialSection) {
    const observerTestimonial = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            gsap.fromTo(
              testimonialContent,
              { opacity: 0, y: 50 },
              {
                opacity: 1,
                y: 0,
                duration: 1,
                ease: 'power3.out',
              }
            );
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    observerTestimonial.observe(testimonialSection);
  }
}
