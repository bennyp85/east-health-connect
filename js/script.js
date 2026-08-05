// Community Food & Assistance Guide — small helper scripts.

const AREAS = {
  "Yarra Ranges": { slug: "yarra-ranges", cls: "text-yarra" },
  Knox: { slug: "knox", cls: "text-knox" },
  Boroondara: { slug: "boroondara", cls: "text-boroondara" },
  Monash: { slug: "monash", cls: "text-monash" },
  Maroondah: { slug: "maroondah", cls: "text-maroondah" },
  Whitehorse: { slug: "whitehorse", cls: "text-whitehorse" },
  Manningham: { slug: "manningham", cls: "text-manningham" }
};

document.addEventListener("DOMContentLoaded", () => {
  // Keep the footer year up to date automatically.
  const yearEl = document.getElementById("year");
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Back button: prefer going back in history (used on placeholder pages).
  const backLink = document.getElementById("back-link");
  if (backLink) {
    backLink.addEventListener("click", (e) => {
      e.preventDefault();
      if (window.history.length > 1) {
        window.history.back();
      } else {
        window.location.href = backLink.getAttribute("href");
      }
    });
  }

  // Fill in the area / choice on pages opened with ?area=... &choice=...
  const params = new URLSearchParams(window.location.search);
  const area = params.get("area");
  const choice = params.get("choice");

  if (area && AREAS[area]) {
    const { slug, cls } = AREAS[area];

    const areaName = document.getElementById("area-name");
    if (areaName) areaName.textContent = area;

    document.body.classList.add(cls);

    // Back should return to this area's page when reached directly.
    const back = document.getElementById("back-link");
    if (back) back.setAttribute("href", "areas/" + slug + ".html");

    // Carry the area through to the next choice links on this page.
    document.querySelectorAll("[data-choice]").forEach((link) => {
      const choiceName = link.getAttribute("data-choice");
      link.setAttribute(
        "href",
        "coming-soon.html?area=" + encodeURIComponent(area) + "&choice=" + encodeURIComponent(choiceName)
      );
    });
  }

  const choiceNameEl = document.getElementById("choice-name");
  if (choiceNameEl && choice) choiceNameEl.textContent = choice;
});
