export function scrollToSection(id) {
  const section = document.getElementById(id);
  if (!section) return;

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

