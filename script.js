const yearElement = document.getElementById('year');
if (yearElement) {
  yearElement.textContent = String(new Date().getFullYear());
}

const reel = document.getElementById('brand-reel');
const placeholder = document.getElementById('video-placeholder');

if (reel && placeholder) {
  reel.addEventListener('error', () => {
    reel.hidden = true;
    placeholder.hidden = false;
  });

  reel.addEventListener('loadeddata', () => {
    placeholder.hidden = true;
  });
}

const revealItems = document.querySelectorAll('.reveal');
if ('IntersectionObserver' in window && revealItems.length) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.2 }
  );

  revealItems.forEach((item) => observer.observe(item));
} else {
  revealItems.forEach((item) => item.classList.add('is-visible'));
}
