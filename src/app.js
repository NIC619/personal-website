(function bootstrap() {
  const data = window.siteData;
  if (!data) return;

  const navList = document.getElementById("primary-nav");
  const heroRoot = document.getElementById("about");
  const sectionsRoot = document.getElementById("sections-root");
  const copyright = document.getElementById("copyright-text");

  initThemeSwitcher();
  renderNav(navList, data.sections);
  renderHero(heroRoot, data.profile);
  renderSections(sectionsRoot, data.sections);
  copyright.textContent = `© ${new Date().getFullYear()} ${data.profile.name}`;
})();

function initThemeSwitcher() {
  const buttons = Array.from(document.querySelectorAll("[data-theme-choice]"));
  const allowedThemes = new Set([
    "editorial",
    "editorial-soft",
    "bookish",
    "humanist",
    "paper",
    "technical",
  ]);
  const savedTheme = localStorage.getItem("site-theme");
  const initialTheme = allowedThemes.has(savedTheme) ? savedTheme : "bookish";

  applyTheme(initialTheme, buttons);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      const theme = button.getAttribute("data-theme-choice");
      if (!allowedThemes.has(theme)) return;

      localStorage.setItem("site-theme", theme);
      applyTheme(theme, buttons);
    });
  });
}

function applyTheme(theme, buttons) {
  const html = document.documentElement;
  const body = document.body;

  if (theme === "editorial") {
    html.removeAttribute("data-theme");
    body.removeAttribute("data-theme");
  } else {
    html.setAttribute("data-theme", theme);
    body.setAttribute("data-theme", theme);
  }

  buttons.forEach((button) => {
    const choice = button.getAttribute("data-theme-choice");
    button.classList.toggle("active", choice === theme);
    button.setAttribute("aria-pressed", String(choice === theme));
  });
}

function renderNav(container, sections) {
  const aboutItem = document.createElement("li");
  aboutItem.innerHTML = '<a href="#about">About</a>';
  container.appendChild(aboutItem);

  sections.forEach((section) => {
    const li = document.createElement("li");
    li.innerHTML = `<a href="#${escapeHtml(section.id)}">${escapeHtml(section.title)}</a>`;
    container.appendChild(li);
  });
}

function renderHero(container, profile) {
  const actions = profile.actions
    .map(
      (action) =>
        `<a class="button-link" href="${escapeAttr(action.url)}" target="_blank" rel="noreferrer">${escapeHtml(action.label)}</a>`
    )
    .join("");

  container.innerHTML = `
    <div class="hero-image-wrap">
      <img class="hero-image" src="${escapeAttr(profile.imageUrl)}" alt="${escapeAttr(profile.imageAlt || profile.name)}" loading="lazy" />
    </div>
    <div class="hero-copy">
      <h1>${escapeHtml(profile.name)}</h1>
      <p><strong>${escapeHtml(profile.title)}</strong></p>
      <p>${escapeHtml(profile.tagline)}</p>
      <div class="hero-actions">${actions}</div>
    </div>
  `;
}

function renderSections(container, sections) {
  sections.forEach((section, index) => {
    const sectionEl = document.createElement("section");
    sectionEl.id = section.id;
    sectionEl.className = "section-block";
    sectionEl.style.animationDelay = `${0.08 * (index + 1)}s`;

    const title = document.createElement("h2");
    title.className = "section-title";
    title.textContent = section.title;
    sectionEl.appendChild(title);

    if (section.description) {
      const description = document.createElement("p");
      description.className = "section-description";
      description.textContent = section.description;
      sectionEl.appendChild(description);
    }

    const items = renderItemList(section.items);
    sectionEl.appendChild(items);
    container.appendChild(sectionEl);
  });
}

function renderItemList(items, isNested = false) {
  const wrapper = document.createElement("div");
  wrapper.className = isNested ? "nested-items item-list" : "item-list";

  items.forEach((item) => {
    const article = document.createElement("article");
    article.className = "item";

    if (item.title) {
      const heading = document.createElement("h3");
      heading.textContent = item.title;
      article.appendChild(heading);
    }

    if (item.meta) {
      const meta = document.createElement("p");
      meta.className = "item-meta";
      meta.textContent = item.meta;
      article.appendChild(meta);
    }

    if (item.summary) {
      const summary = document.createElement("p");
      summary.className = "item-summary";
      summary.textContent = item.summary;
      article.appendChild(summary);
    }

    if (Array.isArray(item.bullets) && item.bullets.length > 0) {
      const list = document.createElement("ul");
      item.bullets.forEach((bullet) => {
        const li = document.createElement("li");
        li.textContent = bullet;
        list.appendChild(li);
      });
      article.appendChild(list);
    }

    if (Array.isArray(item.links) && item.links.length > 0) {
      const linkRow = document.createElement("div");
      linkRow.className = "item-links";
      item.links.forEach((link) => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.label;
        a.target = "_blank";
        a.rel = "noreferrer";
        linkRow.appendChild(a);
      });
      article.appendChild(linkRow);
    }

    if (Array.isArray(item.children) && item.children.length > 0) {
      article.appendChild(renderItemList(item.children, true));
    }

    wrapper.appendChild(article);
  });

  return wrapper;
}

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function escapeAttr(value) {
  return escapeHtml(value);
}
