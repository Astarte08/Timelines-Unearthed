document.addEventListener("DOMContentLoaded", () => {
  const illustration = document.querySelector(".illustration");
  if (illustration) {
    illustration.classList.add("animate");
  }
  // === SIDEBAR TOGGLE CODE ===
  const sidebar = document.querySelector('.sidebar');
  const toggleBtn = document.querySelector('.toggle-btn');

  if (sidebar && toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      sidebar.classList.toggle('collapsed');
    });
  }
});

document.addEventListener("DOMContentLoaded", () => {
  const illustrations = document.querySelectorAll(
    ".stratigraphy-illustration, .chemical-illustration, .biostratigraphy-illustration, .faunal-illustration, .radiometric-illustration, .luminescence-illustration, .esr-illustration, .dendro-illustration, .magnetism-illustration"
  );

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("animate");
        }
      });
    },
    { threshold: 0.2 }
  );

  illustrations.forEach((el) => observer.observe(el));
});

