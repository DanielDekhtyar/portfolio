document.addEventListener('DOMContentLoaded', () => {
  const yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  const navToggle = document.querySelector('.nav-toggle');
  const nav = document.querySelector('header nav');
  const navLinks = [...document.querySelectorAll('#primary-navigation a[href^="#"]')];

  const closeNav = () => {
    if (nav) nav.classList.remove('open');
    if (navToggle) navToggle.setAttribute('aria-expanded', 'false');
  };

  if (navToggle && nav) {
    navToggle.addEventListener('click', () => {
      const expanded = nav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', expanded.toString());
    });
  }

  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      closeNav();
    });
  });

  const sections = document.querySelectorAll('main section[id]');
  if (sections.length && navLinks.length) {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.getAttribute('id');
          if (!id) return;
          const activeLink = navLinks.find((link) => link.getAttribute('href') === `#${id}`);
          if (!activeLink) return;

          if (entry.isIntersecting) {
            navLinks.forEach((link) => link.classList.remove('active'));
            activeLink.classList.add('active');
          }
        });
      },
      {
        rootMargin: '-45% 0px -45% 0px',
        threshold: 0,
      }
    );

    sections.forEach((section) => observer.observe(section));
  }

  const backToTopLinks = document.querySelectorAll('.back-to-top');
  backToTopLinks.forEach((link) => {
    link.addEventListener('click', (event) => {
      event.preventDefault();
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  });

  const floatingTop = document.querySelector('.floating-top');
  const toggleFloatingTop = () => {
    if (!floatingTop) return;
    if (window.scrollY > 280) {
      floatingTop.classList.add('visible');
    } else {
      floatingTop.classList.remove('visible');
    }
  };

  toggleFloatingTop();
  window.addEventListener('scroll', toggleFloatingTop, { passive: true });

  // Make project cards clickable
  const projectCards = document.querySelectorAll('.project-card');
  projectCards.forEach((card) => {
    card.addEventListener('click', (event) => {
      // Don't trigger if clicking on a link or button
      if (event.target.closest('a, button')) {
        return;
      }
      
      // Find the "Project Details" link
      const detailsLink = card.querySelector('.btn.primary[href^="projects/"]');
      if (detailsLink) {
        window.location.href = detailsLink.getAttribute('href');
      }
    });
  });
});
