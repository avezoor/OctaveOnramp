const moduleListEl = document.getElementById("moduleList");
const contentEl = document.getElementById("content");
const tocEl = document.getElementById("toc");
const tocBox = document.getElementById("tocBox");
const pageTitleEl = document.getElementById("pageTitle");
const currentDateInfoEl = document.getElementById("currentDateInfo");
const fullscreenBtn = document.getElementById("fullscreenBtn");
const menuBtn = document.getElementById("menuBtn");
const closeSidebarBtn = document.getElementById("closeSidebarBtn");
const sidebar = document.getElementById("sidebar");
const sidebarOverlay = document.getElementById("sidebarOverlay");
const tocToggleBtn = document.getElementById("tocToggleBtn");
const closeTocBtn = document.getElementById("closeTocBtn");
const tocOverlay = document.getElementById("tocOverlay");
const scrollTopBtn = document.getElementById("scrollTopBtn");
const embeddedModules = window.ALPRO_MODULES || [];
const embeddedContent = window.ALPRO_CONTENT || {};

let modules = [];
let activeModuleSlug = "";
const siteTitle = "Praktikum Dasar Octave";
const SHIKI_THEME = "dark-plus";
const SHIKI_CDN_URL = "https://esm.sh/shiki@4.0.2";
let shikiHighlighterPromise = null;

function formatCurrentDate() {
  return new Intl.DateTimeFormat("id-ID", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date());
}

function renderCurrentDate() {
  currentDateInfoEl.textContent = formatCurrentDate();
}

function isFullscreenActive() {
  return Boolean(document.fullscreenElement);
}

function updateFullscreenButton() {
  if (!fullscreenBtn) {
    return;
  }

  const fullscreenActive = isFullscreenActive();
  const actionLabel = fullscreenActive ? "Keluar dari mode layar penuh" : "Masuk mode layar penuh";

  fullscreenBtn.setAttribute("aria-label", actionLabel);
  fullscreenBtn.setAttribute("aria-pressed", String(fullscreenActive));
  fullscreenBtn.setAttribute("title", fullscreenActive ? "Keluar fullscreen" : "Layar penuh");
  fullscreenBtn.dataset.state = fullscreenActive ? "active" : "idle";

  const iconEl = fullscreenBtn.querySelector(".topbar-action-icon");
  const textEl = fullscreenBtn.querySelector(".topbar-action-text");

  if (iconEl) {
    iconEl.textContent = fullscreenActive ? "✕" : "⛶";
  }

  if (textEl) {
    textEl.textContent = fullscreenActive ? "Keluar" : "Fullscreen";
  }
}

async function toggleFullscreen() {
  try {
    if (isFullscreenActive()) {
      await document.exitFullscreen();
      return;
    }

    await document.documentElement.requestFullscreen();
  } catch (error) {
    console.warn("Fullscreen tidak tersedia.", error);
  } finally {
    updateFullscreenButton();
  }
}

function setSidebarOpen(isOpen) {
  if (isOpen) {
    setTocOpen(false);
  }

  sidebar.classList.toggle("open", isOpen);
  sidebarOverlay.classList.toggle("show", isOpen);
  document.body.classList.toggle("sidebar-open", isOpen);
  menuBtn.setAttribute("aria-expanded", String(isOpen));
}

function setTocOpen(isOpen) {
  if (isOpen) {
    setSidebarOpen(false);
  }

  tocBox.classList.toggle("open", isOpen);
  tocOverlay.classList.toggle("show", isOpen);
  document.body.classList.toggle("toc-open", isOpen);
  tocToggleBtn.setAttribute("aria-expanded", String(isOpen));
}

function toggleSidebar() {
  setSidebarOpen(!sidebar.classList.contains("open"));
}

function toggleToc() {
  setTocOpen(!tocBox.classList.contains("open"));
}

function enableTouchHover(container) {
  let activeLink = null;

  const clearTouchHover = () => {
    if (activeLink) {
      activeLink.classList.remove("touch-hover");
      activeLink = null;
    }
  };

  const setTouchHoverFromPoint = (clientX, clientY) => {
    const element = document.elementFromPoint(clientX, clientY);
    const hoveredLink = element?.closest("a");
    const nextLink = hoveredLink && container.contains(hoveredLink) ? hoveredLink : null;

    if (activeLink === nextLink) {
      return;
    }

    if (activeLink) {
      activeLink.classList.remove("touch-hover");
    }

    activeLink = nextLink;

    if (activeLink) {
      activeLink.classList.add("touch-hover");
    }
  };

  container.addEventListener(
    "touchstart",
    (event) => {
      const touch = event.touches[0];
      if (touch) {
        setTouchHoverFromPoint(touch.clientX, touch.clientY);
      }
    },
    { passive: true }
  );

  container.addEventListener(
    "touchmove",
    (event) => {
      const touch = event.touches[0];
      if (touch) {
        setTouchHoverFromPoint(touch.clientX, touch.clientY);
      }
    },
    { passive: true }
  );

  container.addEventListener("touchend", clearTouchHover, { passive: true });
  container.addEventListener("touchcancel", clearTouchHover, { passive: true });
}

function updateScrollTopButton() {
  const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
  scrollTopBtn.classList.toggle("show", scrollTop > 320);
}

menuBtn.addEventListener("click", toggleSidebar);
closeSidebarBtn.addEventListener("click", () => setSidebarOpen(false));
sidebarOverlay.addEventListener("click", () => setSidebarOpen(false));
tocToggleBtn.addEventListener("click", toggleToc);
closeTocBtn.addEventListener("click", () => setTocOpen(false));
tocOverlay.addEventListener("click", () => setTocOpen(false));
scrollTopBtn.addEventListener("click", () => {
  setTocOpen(false);
  setSidebarOpen(false);
  window.scrollTo({ top: 0, behavior: "smooth" });
});
fullscreenBtn?.addEventListener("click", toggleFullscreen);
tocEl.addEventListener("click", (event) => {
  const targetLink = event.target.closest("a");

  if (!targetLink) {
    return;
  }

  // Keep the popup open briefly so tap feedback is visible on touch devices.
  window.setTimeout(() => {
    setTocOpen(false);
  }, 120);
});

window.addEventListener("scroll", updateScrollTopButton, { passive: true });
enableTouchHover(moduleListEl);
enableTouchHover(tocEl);

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    setSidebarOpen(false);
    setTocOpen(false);
  }
});
document.addEventListener("fullscreenchange", updateFullscreenButton);

function escapeHtml(value) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

function renderInlineMarkdown(value) {
  return escapeHtml(value).replace(/`([^`]+)`/g, "<code>$1</code>");
}

function slugify(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^\w\s-]/g, "")
    .replace(/\s+/g, "-");
}

async function fetchText(path) {
  const res = await fetch(path);

  if (!res.ok) {
    throw new Error(`Gagal memuat ${path}: ${res.status}`);
  }

  return res.text();
}

async function fetchJson(path) {
  const text = await fetchText(path);
  return JSON.parse(text);
}

function isLocalFileMode() {
  return window.location.protocol === "file:";
}

function getEmbeddedMarkdown(file) {
  const markdown = embeddedContent[file];

  if (!markdown) {
    throw new Error(`Konten ${file} belum tersedia di mode lokal.`);
  }

  return markdown;
}

function renderFallbackMarkdown(markdown) {
  const lines = markdown.split(/\r?\n/);
  const html = [];
  let listType = "";
  let inCode = false;
  let codeLang = "";

  const closeList = () => {
    if (listType) {
      html.push(`</${listType}>`);
      listType = "";
    }
  };

  const addListItem = (type, text) => {
    if (listType && listType !== type) {
      closeList();
    }

    if (!listType) {
      html.push(`<${type}>`);
      listType = type;
    }

    html.push(`<li>${renderInlineMarkdown(text)}</li>`);
  };

  lines.forEach((line) => {
    const codeMatch = line.match(/^```(\w+)?/);

    if (codeMatch) {
      if (inCode) {
        html.push("</code></pre>");
        inCode = false;
        codeLang = "";
      } else {
        closeList();
        codeLang = codeMatch[1] || "";
        html.push(`<pre><code${codeLang ? ` class="language-${codeLang}"` : ""}>`);
        inCode = true;
      }
      return;
    }

    if (inCode) {
      html.push(`${escapeHtml(line)}\n`);
      return;
    }

    if (!line.trim()) {
      closeList();
      return;
    }

    const headingMatch = line.match(/^(#{1,3})\s+(.+)$/);
    if (headingMatch) {
      closeList();
      const level = headingMatch[1].length;
      html.push(`<h${level}>${renderInlineMarkdown(headingMatch[2])}</h${level}>`);
      return;
    }

    const listMatch = line.match(/^-\s+(.+)$/);
    if (listMatch) {
      addListItem("ul", listMatch[1]);
      return;
    }

    const orderedListMatch = line.match(/^\d+\.\s+(.+)$/);
    if (orderedListMatch) {
      addListItem("ol", orderedListMatch[1]);
      return;
    }

    closeList();
    html.push(`<p>${renderInlineMarkdown(line)}</p>`);
  });

  closeList();

  if (inCode) {
    html.push("</code></pre>");
  }

  return html.join("");
}

function renderMarkdown(markdown) {
  if (window.marked?.parse) {
    return window.marked.parse(markdown);
  }

  return renderFallbackMarkdown(markdown);
}

async function copyTextToClipboard(text) {
  if (navigator.clipboard?.writeText && window.isSecureContext) {
    await navigator.clipboard.writeText(text);
    return true;
  }

  const textArea = document.createElement("textarea");
  textArea.value = text;
  textArea.setAttribute("readonly", "");
  textArea.style.position = "fixed";
  textArea.style.top = "-9999px";
  textArea.style.left = "-9999px";
  document.body.appendChild(textArea);
  textArea.select();

  let isCopied = false;

  try {
    isCopied = document.execCommand("copy");
  } finally {
    textArea.remove();
  }

  if (!isCopied) {
    throw new Error("Clipboard tidak tersedia.");
  }

  return true;
}

function getCodeLanguage(codeEl) {
  const languageClass = Array.from(codeEl.classList).find((className) => className.startsWith("language-"));
  return languageClass ? languageClass.replace("language-", "").toLowerCase() : "text";
}

function normalizeShikiLanguage(language) {
  const aliases = {
    cjs: "javascript",
    htm: "html",
    js: "javascript",
    mjs: "javascript",
    py: "python",
    rb: "ruby",
    sh: "bash",
    shell: "bash",
    ts: "typescript",
    yml: "yaml",
  };

  const normalizedLanguage = (language || "text").toLowerCase();
  return aliases[normalizedLanguage] || normalizedLanguage;
}

async function getShikiHighlighter() {
  if (!shikiHighlighterPromise) {
    shikiHighlighterPromise = import(SHIKI_CDN_URL)
      .then(async ({ createHighlighter }) =>
        createHighlighter({
          themes: [SHIKI_THEME],
          langs: ["text"],
        })
      )
      .catch((error) => {
        shikiHighlighterPromise = null;
        throw error;
      });
  }

  return shikiHighlighterPromise;
}

function getShikiLanguageCandidates(language) {
  const normalizedLanguage = normalizeShikiLanguage(language);
  const candidates = [normalizedLanguage];

  if (normalizedLanguage === "octave") {
    candidates.push("matlab");
  }

  if (!candidates.includes("text")) {
    candidates.push("text");
  }

  return candidates;
}

function getPlainCodeLineMarkup(rawCode) {
  const visibleCode = rawCode.endsWith("\n") ? rawCode.slice(0, -1) : rawCode;
  const lines = visibleCode ? visibleCode.split("\n") : [""];

  return lines.map((line) => escapeHtml(line) || " ");
}

function extractShikiLineMarkup(shikiHtml, fallbackLines) {
  const template = document.createElement("template");
  template.innerHTML = shikiHtml.trim();
  const renderedLines = Array.from(template.content.querySelectorAll("pre code .line"));

  if (!renderedLines.length) {
    return fallbackLines;
  }

  return renderedLines.map((line) => line.innerHTML || " ");
}

async function getHighlightedLineMarkup(rawCode, language) {
  const fallbackLines = getPlainCodeLineMarkup(rawCode);

  try {
    const highlighter = await getShikiHighlighter();
    const languageCandidates = getShikiLanguageCandidates(language);

    for (const candidate of languageCandidates) {
      try {
        if (candidate !== "text") {
          await highlighter.loadLanguage(candidate);
        }

        const shikiHtml = highlighter.codeToHtml(rawCode, {
          lang: candidate,
          theme: SHIKI_THEME,
        });

        return extractShikiLineMarkup(shikiHtml, fallbackLines);
      } catch (error) {
        continue;
      }
    }
  } catch (error) {
    console.warn("Gagal memuat syntax highlighting Shiki.", error);
  }

  return fallbackLines;
}

async function enhanceCodeBlocks() {
  const codeBlocks = contentEl.querySelectorAll("pre > code");

  await Promise.all(
    Array.from(codeBlocks).map(async (codeEl) => {
      const preEl = codeEl.parentElement;

      if (!preEl || preEl.dataset.enhanced === "true") {
        return;
      }

      preEl.dataset.enhanced = "true";
      preEl.classList.add("code-block");
      const language = getCodeLanguage(codeEl);
      const rawCode = codeEl.textContent.replace(/\r\n?/g, "\n");
      const highlightedLines = await getHighlightedLineMarkup(rawCode, language);

      codeEl.innerHTML = highlightedLines
        .map(
          (lineMarkup, index) =>
            `<span class="code-line"><span class="code-line-number" aria-hidden="true">${index + 1}</span><span class="code-line-text">${lineMarkup}</span></span>`
        )
        .join("");

      const copyButtonEl = document.createElement("button");
      copyButtonEl.type = "button";
      copyButtonEl.className = "copy-code-btn";
      copyButtonEl.setAttribute("aria-label", "Salin kode");
      copyButtonEl.setAttribute("title", "Salin kode");
      copyButtonEl.innerHTML = `
        <svg viewBox="0 0 24 24" aria-hidden="true" focusable="false">
          <path d="M9 9.75A2.25 2.25 0 0 1 11.25 7.5h7.5A2.25 2.25 0 0 1 21 9.75v9A2.25 2.25 0 0 1 18.75 21h-7.5A2.25 2.25 0 0 1 9 18.75z"/>
          <path d="M15 7.5V5.25A2.25 2.25 0 0 0 12.75 3h-7.5A2.25 2.25 0 0 0 3 5.25v9a2.25 2.25 0 0 0 2.25 2.25H9"/>
        </svg>
      `;

      let resetButtonTimer = 0;

      copyButtonEl.addEventListener("click", async () => {
        window.clearTimeout(resetButtonTimer);
        copyButtonEl.dataset.copyState = "idle";

        try {
          await copyTextToClipboard(rawCode);
          copyButtonEl.dataset.copyState = "copied";
          copyButtonEl.setAttribute("title", "Tersalin");
        } catch (error) {
          copyButtonEl.dataset.copyState = "error";
          copyButtonEl.setAttribute("title", "Gagal menyalin");
        }

        resetButtonTimer = window.setTimeout(() => {
          copyButtonEl.dataset.copyState = "idle";
          copyButtonEl.setAttribute("title", "Salin kode");
        }, 1600);
      });

      preEl.prepend(copyButtonEl);
    })
  );
}

async function loadModules() {
  if (isLocalFileMode()) {
    modules = embeddedModules;
    return;
  }

  try {
    modules = await fetchJson("./modules.json");
  } catch (err) {
    if (embeddedModules.length) {
      modules = embeddedModules;
      return;
    }

    throw err;
  }
}

async function loadMarkdown(file) {
  if (isLocalFileMode()) {
    return getEmbeddedMarkdown(file);
  }

  try {
    return await fetchText(`./content/${file}`);
  } catch (err) {
    return getEmbeddedMarkdown(file);
  }
}

function renderModuleList(activeSlug) {
  moduleListEl.innerHTML = modules
    .map(
      (item) => `
        <a href="#${item.slug}" class="${item.slug === activeSlug ? "active" : ""}">
          ${escapeHtml(item.title)}
        </a>
      `
    )
    .join("");
}

function addHeadingIds() {
  const headings = contentEl.querySelectorAll("h1, h2, h3");
  const usedIds = new Map();

  headings.forEach((heading, index) => {
    const baseId = slugify(heading.textContent) || `section-${index + 1}`;
    const total = usedIds.get(baseId) || 0;
    const id = total ? `${baseId}-${total + 1}` : baseId;

    usedIds.set(baseId, total + 1);
    heading.id = id;
  });
}

function buildToc() {
  const headings = contentEl.querySelectorAll("h2, h3");
  if (!headings.length) {
    tocEl.innerHTML = "<p>Tidak ada subjudul.</p>";
    tocEl.scrollTop = 0;
    return;
  }

  tocEl.innerHTML = Array.from(headings)
    .map((h) => {
      const cls = h.tagName.toLowerCase() === "h3" ? "toc-h3" : "";
      return `<a class="${cls}" href="#${h.id}">${escapeHtml(h.textContent)}</a>`;
    })
    .join("");
  tocEl.scrollTop = 0;
}

function getModuleByHash() {
  const hashSlug = decodeURIComponent(location.hash.replace("#", ""));
  return modules.find((moduleItem) => moduleItem.slug === hashSlug);
}

async function loadCurrentModule() {
  const current = getModuleByHash() || modules.find((m) => m.slug === activeModuleSlug) || modules[0];

  if (!current) {
    contentEl.innerHTML = "<p>Modul belum tersedia.</p>";
    tocEl.innerHTML = "";
    return;
  }

  activeModuleSlug = current.slug;
  renderModuleList(current.slug);
  pageTitleEl.textContent = siteTitle;
  contentEl.innerHTML = "<p>Memuat materi...</p>";
  tocEl.innerHTML = "";

  try {
    const markdown = await loadMarkdown(current.file);
    contentEl.innerHTML = renderMarkdown(markdown);
    await enhanceCodeBlocks();
    addHeadingIds();
    buildToc();
  } catch (err) {
    contentEl.innerHTML = `<p>Gagal memuat file markdown: ${escapeHtml(err.message)}</p>`;
    tocEl.innerHTML = "";
  }

  setSidebarOpen(false);
  setTocOpen(false);
}

async function init() {
  try {
    renderCurrentDate();
    updateFullscreenButton();
    await loadModules();
    await loadCurrentModule();
    updateScrollTopButton();
  } catch (err) {
    pageTitleEl.textContent = "Gagal memuat modul";
    moduleListEl.innerHTML = "";
    contentEl.innerHTML = `<p>${escapeHtml(err.message)}</p>`;
    tocEl.innerHTML = "";
  }
}

window.addEventListener("hashchange", () => {
  if (getModuleByHash()) {
    loadCurrentModule();
  }
});
init();
