"use client";

import { useEffect, useMemo, useState } from "react";
import { siteData } from "../src/site-data";

const THEME_OPTIONS = [
  { key: "editorial", label: "Editorial" },
  { key: "editorial-soft", label: "Editorial Soft" },
  { key: "bookish", label: "Bookish Modern" },
  { key: "humanist", label: "Humanist Editorial" },
  { key: "paper", label: "Paper" },
  { key: "technical", label: "Technical" },
];

const DEFAULT_THEME = "bookish";

export default function Page() {
  const [theme, setTheme] = useState(DEFAULT_THEME);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("site-theme");
    const isValid = THEME_OPTIONS.some((option) => option.key === savedTheme);
    const activeTheme = isValid ? savedTheme : DEFAULT_THEME;
    setTheme(activeTheme);
  }, []);

  useEffect(() => {
    const html = document.documentElement;
    const body = document.body;

    if (theme === "editorial") {
      html.removeAttribute("data-theme");
      body.removeAttribute("data-theme");
    } else {
      html.setAttribute("data-theme", theme);
      body.setAttribute("data-theme", theme);
    }

    window.localStorage.setItem("site-theme", theme);
  }, [theme]);

  const currentYear = useMemo(() => new Date().getFullYear(), []);

  return (
    <>
      <header className="site-header">
        <div className="shell header-inner">
          <div className="header-left">
            <a className="site-title" href="#top">
              {siteData.profile.name}
            </a>
            <p className="breadcrumb">Home / Profile</p>
          </div>
          <div className="header-right">
            <nav aria-label="Primary navigation">
              <ul className="nav-list">
                <li>
                  <a href="#about">About</a>
                </li>
                {siteData.sections.map((section) => (
                  <li key={section.id}>
                    <a href={`#${section.id}`}>{section.title}</a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="theme-switcher" role="group" aria-label="Theme switcher">
              {THEME_OPTIONS.map((option) => (
                <button
                  key={option.key}
                  className={`theme-button ${theme === option.key ? "active" : ""}`}
                  data-theme-choice={option.key}
                  type="button"
                  aria-pressed={theme === option.key}
                  onClick={() => setTheme(option.key)}
                >
                  {option.label}
                </button>
              ))}
            </div>
          </div>
        </div>
      </header>

      <main id="top" className="shell site-main">
        <section id="about" className="hero">
          <div className="hero-image-wrap">
            <img
              className="hero-image"
              src={siteData.profile.imageUrl}
              alt={siteData.profile.imageAlt || siteData.profile.name}
              loading="lazy"
            />
          </div>
          <div className="hero-copy">
            <h1>{siteData.profile.name}</h1>
            <p>
              <strong>{siteData.profile.title}</strong>
            </p>
            <p>{siteData.profile.tagline}</p>
            <div className="hero-actions">
              {siteData.profile.actions.map((action) => {
                const cvOnly = isCvAction(action);
                return (
                  <a
                    className={`button-link ${cvOnly ? "text-only" : "icon-only"}`}
                    key={`${action.label}-${action.url}`}
                    href={action.url}
                    target={action.url.startsWith("mailto:") ? undefined : "_blank"}
                    rel={action.url.startsWith("mailto:") ? undefined : "noreferrer"}
                    aria-label={cvOnly ? undefined : action.label}
                    title={cvOnly ? undefined : action.label}
                  >
                    {!cvOnly ? (
                      <img
                        className="button-link-icon"
                        src={getActionIconSrc(action)}
                        alt={getActionIconAlt(action)}
                        loading="lazy"
                      />
                    ) : null}
                    {cvOnly ? (
                      <span className="button-link-label">Curriculum Vitae</span>
                    ) : null}
                  </a>
                );
              })}
            </div>
          </div>
        </section>

        <div>
          {siteData.sections.map((section, sectionIndex) => (
            <section
              id={section.id}
              className="section-block"
              style={{ animationDelay: `${0.08 * (sectionIndex + 1)}s` }}
              key={section.id}
            >
              <h2 className="section-title">{section.title}</h2>
              {section.description ? (
                <p className="section-description">{section.description}</p>
              ) : null}
              <ItemList items={section.items} />
            </section>
          ))}
        </div>
      </main>

      <footer className="site-footer shell">
        <small>
          © {currentYear} {siteData.profile.name}
        </small>
      </footer>
    </>
  );
}

function ItemList({ items, nested = false }) {
  return (
    <div className={nested ? "nested-items item-list" : "item-list"}>
      {items.map((item, index) => (
        <article className="item" key={`${item.title || "item"}-${index}`}>
          {item.title ? <h3>{item.title}</h3> : null}
          {item.meta ? <p className="item-meta">{item.meta}</p> : null}
          {item.summary ? <p className="item-summary">{item.summary}</p> : null}
          {Array.isArray(item.bullets) && item.bullets.length > 0 ? (
            <ul>
              {item.bullets.map((bullet, bulletIndex) => (
                <li key={`${bullet.slice(0, 32)}-${bulletIndex}`}>{bullet}</li>
              ))}
            </ul>
          ) : null}
          {Array.isArray(item.links) && item.links.length > 0 ? (
            <div className="item-links">
              {item.links.map((link) => (
                <a href={link.url} key={`${link.label}-${link.url}`} target="_blank" rel="noreferrer">
                  {link.label}
                </a>
              ))}
            </div>
          ) : null}
          {Array.isArray(item.children) && item.children.length > 0 ? (
            <ItemList items={item.children} nested />
          ) : null}
        </article>
      ))}
    </div>
  );
}

function getActionIconSrc(action) {
  if (action.icon) return action.icon;
  if (action.url.startsWith("mailto:")) return "/icons/email.svg";

  try {
    const hostname = new URL(action.url).hostname;
    if (hostname.includes("substack.com")) return "/icons/substack.svg";
    return `https://www.google.com/s2/favicons?sz=64&domain=${encodeURIComponent(hostname)}`;
  } catch {
    return "/icons/email.svg";
  }
}

function getActionIconAlt(action) {
  return `${action.label} icon`;
}

function isCvAction(action) {
  return action.label.toLowerCase() === "curriculum vitae";
}
