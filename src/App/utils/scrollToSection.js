export function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

  // Shared CSS variable keeps scroll alignment in sync with fixed nav/header spacing.
  const offsetRaw = getComputedStyle(document.documentElement).getPropertyValue(
    "--section-scroll-offset"
  );
  const offset = Number.parseFloat(offsetRaw) || 0;
  const top = section.getBoundingClientRect().top + window.scrollY - offset;

  window.scrollTo({
    top: Math.max(0, top),
    behavior: "smooth",
  });
}

