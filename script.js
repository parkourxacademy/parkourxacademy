const courseLevels = [
  {
    level: 1,
    title: "BEGINNERS",
    moves: [
      { en: "Balance", ar: "Balance", video: "https://youtube.com/shorts/6aFpoFo23PA" },
      { en: "Roll", ar: "Roll", video: "https://youtube.com/shorts/M9axAOpLjsc" },
      { en: "Precision", ar: "Precision", video: "https://youtube.com/shorts/IOS7qZsFGJ0" },
      { en: "Landing", ar: "Landing", video: "https://youtube.com/shorts/8WPiCnvakbs" },
      { en: "Long Jump", ar: "Long Jump", video: "https://youtube.com/shorts/mpjLNNi4iUk" }
    ]
  },
  {
    level: 2,
    title: "BASIC MOVES",
    moves: [
      { en: "Crane", ar: "Crane", video: "https://youtube.com/shorts/lhR_rudTPE4" },
      { en: "Safety Vault", ar: "Safety Vault", video: "https://youtube.com/shorts/v9V71PVYjJ0" },
      { en: "Reverse Safety", ar: "Reverse Safety", video: "https://youtube.com/shorts/abQOOWzJSVc" },
      { en: "Speed Vault", ar: "Speed Vault", video: "https://youtube.com/shorts/_IATk3dpSfU" },
      { en: "Lazy Vault", ar: "Lazy Vault", video: "https://youtube.com/shorts/JLbuT9FU6lI" },
      { en: "Thief Vault", ar: "Thief Vault", video: "https://youtube.com/shorts/1ND7el_msvM" },
      { en: "Monkey Vault", ar: "Monkey Vault", video: "https://youtube.com/shorts/ktSlnQzloLU" },
      { en: "360 Vault", ar: "360 Vault", video: "https://youtube.com/shorts/Tu14vq5gmTA" },
      { en: "Dash Vault", ar: "Dash Vault", video: "https://youtube.com/shorts/PeDeqIttPho" },
      { en: "Cat Leap", ar: "Cat Leap", video: "https://youtube.com/shorts/y-Ins4dcNDk" }
    ]
  },
  {
    level: 3,
    title: "ADVANCED MOVES",
    moves: [
      { en: "Tic Tac", ar: "Tic Tac", video: "https://youtube.com/shorts/tX37Ugu_L_o" },
      { en: "Wall Run", ar: "Wall Run", video: "https://youtube.com/shorts/XjoqFhTUO74" },
      { en: "Underbar", ar: "Underbar", video: "https://youtube.com/shorts/0SejUtKqTdU" },
      { en: "Turn Vault", ar: "Turn Vault", video: "https://youtube.com/shorts/Tc7WZpXNCTo" },
      { en: "Kong to Dive Roll", ar: "Kong to Dive Roll", video: "https://youtube.com/shorts/6ZE5YEDIEaU" },
      { en: "Kong Precision", ar: "Kong Precision", video: "https://youtube.com/shorts/VWRBXT8dXYc" },
      { en: "Double Kong", ar: "Double Kong", video: "https://youtube.com/shorts/c15g05If_-w" },
      { en: "Palm Spin", ar: "Palm Spin", video: "https://youtube.com/shorts/B38mbEB0kq4" },
      { en: "Wall Spin", ar: "Wall Spin", video: "https://youtube.com/shorts/JOrAPBj1iL0" }
    ]
  },
  {
    level: 4,
    title: "AERIAL MOVES",
    moves: [
      { en: "Backflip", ar: "Backflip", video: "https://youtube.com/shorts/UanAXX9JgDg" },
      { en: "Frontflip", ar: "Frontflip", video: "https://youtube.com/shorts/jW_Y_8zKnBA" },
      { en: "Side Flip", ar: "Side Flip", video: "https://youtube.com/shorts/G0BJmVJPfDg" }
    ]
  }
];

const body = document.body;
const languageToggle = document.getElementById("languageToggle");

let currentLanguage = localStorage.getItem("parkourXLanguage") || "en";

function applyLanguage(language) {
  currentLanguage = language;

  const isArabic = language === "ar";

  document.documentElement.lang = language;
  document.documentElement.dir = isArabic ? "rtl" : "ltr";

  body.classList.toggle("arabic", isArabic);

  document.querySelectorAll("[data-en][data-ar]").forEach(element => {
    element.textContent = element.dataset[language] || element.dataset.en;
  });

  languageToggle.textContent = isArabic ? "EN" : "عربي";

  localStorage.setItem("parkourXLanguage", language);

  renderLessons();
}

languageToggle.addEventListener("click", () => {
  applyLanguage(currentLanguage === "en" ? "ar" : "en");
});

/* MOBILE MENU */

const nav = document.getElementById("mainNav");
const menuToggle = document.getElementById("menuToggle");

menuToggle.addEventListener("click", () => {
  const opened = nav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(opened));
});

nav.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
  });
});

/* YOUTUBE VIDEOS */

function getYouTubeId(url) {
  const match = String(url).match(/shorts\/([^?&]+)/i);
  return match ? match[1].replace(/\\$/, "") : "";
}

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, char => ({
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#39;"
  })[char]);
}

function escapeAttr(value) {
  return escapeHtml(value);
}

function renderLessons() {
  const container = document.getElementById("lessonsContainer");

  container.innerHTML = "";

  let total = 0;

  courseLevels.forEach(level => {
    total += level.moves.length;

    const section = document.createElement("section");
    section.className = "course-level";

    const levelName = currentLanguage === "ar"
      ? `المستوى ${level.level}`
      : `LEVEL ${level.level}`;

    section.innerHTML = `
      <div class="level-heading">
        <div class="level-chip">${String(level.level).padStart(2, "0")}</div>
        <div>
          <span>${levelName}</span>
          <h3>${escapeHtml(level.title)}</h3>
        </div>
      </div>
      <div class="lessons-grid"></div>
    `;

    const grid = section.querySelector(".lessons-grid");

    level.moves.forEach((move, index) => {
      const title = currentLanguage === "ar"
        ? (move.ar || move.en)
        : move.en;

      const videoId = getYouTubeId(move.video);

      const card = document.createElement("article");
      card.className = "lesson-card";

      card.innerHTML = `
        <button class="lesson-thumb" type="button" aria-label="${escapeHtml(title)}">
          <img
            loading="lazy"
            src="https://img.youtube.com/vi/${videoId}/hqdefault.jpg"
            alt="${escapeHtml(title)}"
          >
          <span class="play-icon">▶</span>
        </button>
        <div class="lesson-name">
          <span>${String(index + 1).padStart(2, "0")}</span>
          <strong>${escapeHtml(title)}</strong>
        </div>
        <a class="lesson-watch"
           href="${escapeAttr(move.video)}"
           target="_blank"
           rel="noopener">
          ${currentLanguage === "ar" ? "شاهد الدرس ↗" : "WATCH LESSON ↗"}
        </a>
      `;

      card.querySelector(".lesson-thumb").addEventListener("click", () => {
        openVideo(title, move.video);
      });

      grid.appendChild(card);
    });

    container.appendChild(section);
  });

  document.getElementById("lessonTotal").textContent =
    currentLanguage === "ar" ? `${total} درسًا` : `${total} lessons`;

  document.getElementById("videoCount").textContent = `${total}+`;
}

/* VIDEO POPUP */

const modal = document.getElementById("videoModal");
const frame = document.getElementById("videoFrame");

function openVideo(title, url) {
  const id = getYouTubeId(url);

  document.getElementById("videoModalTitle").textContent = title;
  document.getElementById("watchOnYoutube").href = url;

  frame.src =
    `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;

  modal.classList.add("open");
  modal.setAttribute("aria-hidden", "false");

  document.body.style.overflow = "hidden";
}

function closeVideo() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");

  frame.src = "";

  document.body.style.overflow = "";
}

document.getElementById("videoClose").addEventListener("click", closeVideo);

modal.addEventListener("click", event => {
  if (event.target === modal) {
    closeVideo();
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") {
    closeVideo();
  }
});

/* FOOTER YEAR */

document.getElementById("year").textContent = new Date().getFullYear();

/* INITIALIZE */

applyLanguage(currentLanguage);
