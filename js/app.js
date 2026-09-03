/* =========================================================
   Community Food & Assistance Guide — app
   A tiny single-page app that walks the user through a
   decision tree: Area → Service category → Providers.

   Routes (hash-based, works from file:// or any static host):
     #/                          Level 1 — choose an area
     #/area/<slug>               Level 2 — choose a category
     #/area/<slug>/<categoryId>  Level 3 — providers / coming soon
   ========================================================= */

(function () {
  "use strict";

  var app = document.getElementById("app");

  /* ---------- tiny DOM helpers ---------- */
  function esc(value) {
    return String(value == null ? "" : value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;");
  }

  function telHref(phone) {
    return "tel:" + String(phone).replace(/[^\d+]/g, "");
  }

  function linkifyUrl(url) {
    return /^https?:\/\//i.test(url) ? url : "https://" + url;
  }

  function hostOf(url) {
    try {
      return new URL(linkifyUrl(url)).hostname.replace(/^www\./, "");
    } catch (e) {
      return url;
    }
  }

  /* Footer note inviting users to report any mistakes in the info. */
  function mistakeNote() {
    return (
      '<p class="footer-note">Spotted a mistake in this information? ' +
      '<a href="mailto:freqtrade888@gmail.com">Email freqtrade888@gmail.com</a> ' +
      "so I can fix it.</p>"
    );
  }

  /* ---------- lookups ---------- */
  function areaBySlug(slug) {
    return AREAS.filter(function (a) { return a.slug === slug; })[0];
  }

  function areaByName(name) {
    return AREAS.filter(function (a) { return a.name === name; })[0];
  }

  function categoryById(id) {
    return CATEGORIES.filter(function (c) { return c.id === id; })[0];
  }

  function servicesFor(areaName, categoryId) {
    var all = SERVICES[categoryId] || [];
    return all.filter(function (s) {
      return s.areas === ALL ||
        (Array.isArray(s.areas) && s.areas.indexOf(areaName) !== -1);
    });
  }

  /* ---------- view: Level 1 (choose area) ---------- */
  function renderHome() {
    var areaCards = AREAS.map(function (a) {
      return (
        '<a class="area-card area-' + esc(a.color) + '" href="#/area/' + esc(a.slug) + '">' +
        esc(a.name) + "</a>"
      );
    }).join("");

    app.innerHTML =
      '<header class="site-header">' +
        '<div class="container">' +
          '<span class="site-kicker">Community Food &amp; Assistance Guide</span>' +
          '<h1 class="site-title">Do you need help finding food &amp; support?</h1>' +
          '<p class="site-subtitle">Where will you be going after you leave?</p>' +
        "</div>" +
      "</header>" +
      '<main class="container">' +
        '<section class="choice" aria-labelledby="area-question">' +
          '<h2 id="area-question" class="choice-question">Which area are you heading to?</h2>' +
          '<p class="choice-hint">Take your time — you only need to make one choice.</p>' +
          '<div class="area-grid" role="list">' + areaCards + "</div>" +
        "</section>" +
      "</main>" +
      '<footer class="site-footer">' +
        '<div class="container">' +
          "<p>You can always go back and change your answer.</p>" +
          mistakeNote() +
        "</div>" +
      "</footer>";
  }

  /* ---------- view: Level 2 (choose a category) ---------- */
  function renderCategories(slug) {
    var area = areaBySlug(slug);
    if (!area) { renderHome(); return; }

    var choices = CATEGORIES.map(function (c) {
      return (
        '<a class="step-choice" href="#/area/' + esc(area.slug) + "/" + esc(c.id) + '">' +
        esc(c.label) + "</a>"
      );
    }).join("");

    app.innerHTML =
      '<a class="back-link" href="#/">&larr;&nbsp; Back</a>' +
      '<main class="container">' +
        '<section class="step-hero">' +
          '<p class="step-kicker">You chose</p>' +
          '<h1 class="step-title text-' + esc(area.color) + '">' + esc(area.name) + "</h1>" +
        "</section>" +
        '<section class="step-options" aria-label="What do you need help with in ' + esc(area.name) + '?">' +
          '<h2 class="choice-question step-question">What do you need help with?</h2>' +
          '<div class="step-choice-grid text-' + esc(area.color) + '" role="list">' +
            choices +
          "</div>" +
        "</section>" +
      "</main>" +
      '<footer class="site-footer">' +
        '<div class="container">' +
          "<p>Press the <strong>Back</strong> button above to change your choice.</p>" +
          mistakeNote() +
        "</div>" +
      "</footer>";
  }

  /* ---------- provider card ---------- */
  function providerCard(s) {
    var rows = [];

    if (s.desc) rows.push('<p class="provider-desc">' + esc(s.desc) + "</p>");

    if (s.list && s.list.length) {
      rows.push(
        '<ul class="provider-list">' +
          s.list.map(function (li) { return "<li>" + esc(li) + "</li>"; }).join("") +
        "</ul>"
      );
    }

    if (s.address) {
      var mapsUrl =
        "https://www.google.com/maps/search/?api=1&query=" +
        encodeURIComponent(s.address);
      rows.push(
        '<div class="provider-detail"><span class="detail-label">Address</span>' +
        '<a class="address-link" href="' + mapsUrl + '" target="_blank" rel="noopener noreferrer" ' +
        'title="Open in Google Maps" aria-label="Open ' + esc(s.address) + ' in Google Maps">' +
        esc(s.address) + '&nbsp;↗</a></div>'
      );
    }
    if (s.phone) {
      rows.push(
        '<div class="provider-detail"><span class="detail-label">Phone</span>' +
        '<a class="phone-link" href="' + telHref(s.phone) + '">' + esc(s.phone) + "</a></div>"
      );
    }
    if (s.email) {
      rows.push(
        '<div class="provider-detail"><span class="detail-label">Email</span>' +
        '<a href="mailto:' + esc(s.email) + '">' + esc(s.email) + "</a></div>"
      );
    }
    if (s.website) {
      rows.push(
        '<div class="provider-detail"><span class="detail-label">Website</span>' +
        '<a href="' + esc(linkifyUrl(s.website)) + '" target="_blank" rel="noopener noreferrer">' +
        esc(hostOf(s.website)) + "</a></div>"
      );
    }
    if (s.hours) {
      rows.push('<div class="provider-detail"><span class="detail-label">When</span><span>' + esc(s.hours) + "</span></div>");
    }
    if (s.notes) {
      rows.push('<div class="provider-detail"><span class="detail-label">Good to know</span><span>' + esc(s.notes) + "</span></div>");
    }

    var chips = "";
    if (s.cost) chips += '<span class="cost-chip">' + esc(s.cost) + "</span>";

    return (
      '<article class="provider-card' + (s.emergency ? " emergency" : "") + '">' +
        '<h3 class="provider-name">' + esc(s.name) + (chips ? chips : "") + "</h3>" +
        rows.join("") +
      "</article>"
    );
  }

  /* ---------- view: Level 3 (providers for area + category) ---------- */
  function renderServices(slug, categoryId) {
    var area = areaBySlug(slug);
    var category = categoryById(categoryId);
    if (!area || !category) { renderHome(); return; }

    var services = servicesFor(area.name, category.id);
    var colorClass = "text-" + area.color;

    var body;
    if (services.length) {
      var intro = category.id === "family-violence"
        ? "These numbers are here if you need them."
        : "Here's where you can get help with <strong>" + esc(category.label) + "</strong> in " +
          esc(area.name) + ".";
      body =
        '<h2 class="choice-question step-question">' + intro + "</h2>" +
        '<div class="provider-grid">' +
          services.map(providerCard).join("") +
        "</div>";
    } else {
      body =
        '<h2 class="choice-question step-question">' +
          esc(category.label) + " in " + esc(area.name) +
        "</h2>" +
        '<div class="placeholder-note">' +
          "<p>We are adding the details for this option.</p>" +
          "<p>Please check back soon.</p>" +
        "</div>";
    }

    app.innerHTML =
      '<a class="back-link" href="#/area/' + esc(area.slug) + '">&larr;&nbsp; Back</a>' +
      '<main class="container">' +
        '<section class="step-hero">' +
          '<p class="step-kicker">You chose</p>' +
          '<h1 class="step-title ' + colorClass + '">' + esc(category.label) + "</h1>" +
          '<p class="step-area-note">in <span>' + esc(area.name) + "</span></p>" +
        "</section>" +
        '<section class="step-options text-' + esc(area.color) + '" aria-label="' + esc(category.label) + ' in ' + esc(area.name) + '">' +
          body +
        "</section>" +
      "</main>" +
      '<footer class="site-footer">' +
        '<div class="container">' +
          "<p>Press the <strong>Back</strong> button above to change your choice.</p>" +
          mistakeNote() +
        "</div>" +
      "</footer>";
  }

  /* ---------- router ---------- */
  function parseHash() {
    var raw = window.location.hash.replace(/^#\/?/, "");
    var parts = raw.split("/").filter(Boolean);
    if (parts[0] === "area") {
      if (parts[1] && parts[2]) {
        return { view: "services", slug: parts[1], categoryId: parts[2] };
      }
      if (parts[1]) return { view: "categories", slug: parts[1] };
    }
    return { view: "home" };
  }

  function render() {
    var route = parseHash();
    window.scrollTo(0, 0);
    if (route.view === "categories") renderCategories(route.slug);
    else if (route.view === "services") renderServices(route.slug, route.categoryId);
    else renderHome();
  }

  /* ---------- go ---------- */
  window.addEventListener("hashchange", render);
  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", render);
  } else {
    render();
  }
})();
