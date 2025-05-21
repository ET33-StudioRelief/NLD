import gsap from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

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
    gsap.fromTo(
      featuresGrid.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power.out',
        scrollTrigger: {
          trigger: featuresSection,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // Animation pour les FAQs
  const faqList = document.querySelector('.faq_list');
  const faqSection = document.querySelector('.section_faq');

  if (faqList && faqSection) {
    gsap.fromTo(
      faqList.children,
      { opacity: 0, y: 30 },
      {
        opacity: 1,
        y: 0,
        duration: 0.6,
        stagger: 0.2,
        ease: 'power.out',
        scrollTrigger: {
          trigger: faqSection,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }
}

export function animateAbout() {
  // Animation pour la section about
  const aboutContent = document.querySelector('.about_content');
  const aboutSection = document.querySelector('.section_about');

  if (aboutContent && aboutSection) {
    gsap.fromTo(
      aboutContent,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: aboutSection,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }

  // Animation pour la section testimonial
  const testimonialContent = document.querySelector('.testimonial_content');
  const testimonialSection = document.querySelector('.section_testimonial');

  if (testimonialContent && testimonialSection) {
    gsap.fromTo(
      testimonialContent,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: testimonialSection,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }
}

export function animateCTA() {
  const ctaSection = document.querySelector('.section_cta');

  if (ctaSection) {
    gsap.fromTo(
      ctaSection,
      {
        opacity: 0,
        x: 400,
      },
      {
        opacity: 1,
        x: 0,
        duration: 1,
        ease: 'power3.out',
        scrollTrigger: {
          trigger: ctaSection,
          start: 'top 60%',
          toggleActions: 'play none none reverse',
        },
      }
    );
  }
}
