
"use strict";

/* =========================================
   PARKOUR X ACADEMY
   Final lesson data
========================================= */

const PROMO_VIDEO_ID = "D-eYb5_uEBs";
const STORAGE_KEY = "parkourx-academy-progress-v1";
const LANGUAGE_KEY = "parkourx-academy-language";

const LEVELS = [
  {
    level: 1,
    title: { en: "BEGINNERS", ar: "المبتدئين" },
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
    title: { en: "BASIC MOVES", ar: "الحركات الأساسية" },
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
    title: { en: "ADVANCED MOVES", ar: "الحركات المتقدمة" },
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
    title: { en: "AERIAL MOVES", ar: "الحركات الهوائية" },
    moves: [
      { en: "Backflip", ar: "Backflip", video: "https://youtube.com/shorts/UanAXX9JgDg" },
      { en: "Frontflip", ar: "Frontflip", video: "https://youtube.com/shorts/jW_Y_8zKnBA" },
      { en: "Side Flip", ar: "Side Flip", video: "https://youtube.com/shorts/G0BJmVJPfDg" }
    ]
  }
];

/* =========================================
   TRANSLATIONS
========================================= */

const TEXT = {
  en: {
    openLessons: "OPEN LESSONS →",
    watchVideo: "WATCH VIDEO ↗",
    markComplete: "MARK COMPLETE",
    completed: "✓ COMPLETED",
    lesson: "lesson",
    lessons: "lessons",
    complete: "completed",
    level: "LEVEL",
    close: "CLOSE ×",
    chooseLesson: "Choose a skill to watch its training video.",
    progressSaved: "Your progress is saved in this browser.",
    resetConfirm: "Are you sure you want to reset your progress?",
    resetDone: "Your progress has been reset.",
    marked: "Lesson marked as completed!",
    challenge: "Challenge accepted! Warm up, choose one skill, and practise safely.",
    noLessons: "No completed lessons yet. Choose a level and start training.",
    promo: "PARKOUR X Academy Promo",
    xp: "XP POINTS",
    completedLessons: "LESSONS COMPLETED",
    levelNames: [
      "THE FOUNDATION",
      "THE EXPLORER",
      "THE ATHLETE",
      "THE ELITE"
    ],
    levelDescriptions: [
      "Build body awareness, balance, and safe movement.",
      "Improve coordination, precision, and confidence over obstacles.",
      "Develop better technique and smoother movement combinations.",
      "Advanced skills require patient practice, qualified coaching, and proper equipment."
    ]
  },
  ar: {
    openLessons: "افتح الدروس ←",
    watchVideo: "شاهد الفيديو ↗",
    markComplete: "تسجيل كمكتمل",
    completed: "✓ مكتمل",
    lesson: "درس",
    lessons: "دروس",
    complete: "مكتمل",
    level: "المستوى",
    close: "إغلاق ×",
    chooseLesson: "اختار مهارة لمشاهدة فيديو التدريب الخاص بيها.",
    progressSaved: "تقدمك بيتحفظ في المتصفح على نفس الجهاز.",
    resetConfirm: "متأكد إنك عايز تعيد ضبط تقدمك؟",
    resetDone: "تمت إعادة ضبط التقدم.",
    marked: "تم تسجيل الدرس كمكتمل!",
    challenge: "قبلت التحدي! اعمل إحماء واختار مهارة واتدرب بأمان.",
    noLessons: "لسه مفيش دروس مكتملة. اختار مستوى وابدأ التدريب.",
    promo: "فيديو أكاديمية PARKOUR X",
    xp: "نقاط الخبرة",
    completedLessons: "دروس مكتملة",
    levelNames: [
      "مرحلة التأسيس",
      "المستكشف",
      "الرياضي",
      "المحترف"
    ],
    levelDescriptions: [
      "طوّر وعي جسمك وتوازنك واتعلم الحركة الآمنة.",
      "طوّر التناسق والدقة والثقة في تخطي العوائق.",
      "حسّن التكنيك واشتغل على دمج الحركات بسلاسة.",
      "المهارات المتقدمة محتاجة تدريب تدريجي ومدرب مؤهل وتجهيزات مناسبة."
    ]
  }
};

let currentLanguage = localStorage.getItem(LANGUAGE_KEY) || "en";
let toastTimeout = null;

/* =========================================
   PROGRESS STORAGE
========================================= */

function getAllMoves() {
  return LEVELS.flatMap(level =>
    level.moves.map(move => ({
      ...move,
      level: level.level
    }))
  );
}

function getCompletedVideos() {
  try {
    const data = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

function saveCompletedVideos(videos) {
  const uniqueVideos = [...new Set(videos)];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(uniqueVideos));
  updateProgress();
}

function isCompleted(video) {
  return getCompletedVideos().includes(video);
}

/* =========================================
   HELPERS
========================================= */

function showToast(message) {
  const toast = document.getElementById("toast");
  if (!toast) return;

  toast.textContent = message;
  toast.classList.add("show");

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove("show");
  }, 2800);
}

function getYouTubeId(url) {
  try {
    const parsed = new URL(url);

    if (parsed.hostname.includes("youtu.be")) {
      return parsed.pathname.slice(1);
    }

    if (parsed.searchParams.get("v")) {
      return parsed.searchParams.get("v");
    }

    const parts = parsed.pathname.split("/").filter(Boolean);
    const marker = parts.findIndex(part =>
      ["shorts", "embed", "live"].includes(part)
    );

    if (marker !== -1 && parts[marker + 1]) {
      return parts[marker + 1];
    }

    return null;
  } catch {
    return null;
  }
}

/* =========================================
   RENDER LEVEL CARDS
========================================= */

function renderLevels() {
  const grid = document.getElementById("levelsGrid");
  if (!grid) return;

  const completed = getCompletedVideos();
  const t = TEXT[currentLanguage];

  grid.innerHTML = LEVELS.map(level => {
    const count = level.moves.filter(move =>
      completed.includes(move.video)
    ).length;

    const title = currentLanguage === "ar"
      ? t.levelNames[level.level - 1]
      : t.levelNames[level.level - 1];

    const description = t.levelDescriptions[level.level - 1];

    const image = `images/level-${level.level}.jpg`;
    const accent = level.level % 2 === 0 ? "#e6b84b" : "#ed2635";

    return `
      <article class="level-card"
        style="--accent:${accent};--card-image:url('${image}')">

        <div class="level-top">
          <span class="level-label">
            ${t.level} 0${level.level}
          </span>
          <span class="level-num">0${level.level}</span>
        </div>

        <h3>${level.title[currentLanguage]}</h3>
        <p>${description}</p>

        <p class="level-count">
          ${count}/${level.moves.length}
          ${currentLanguage === "ar" ? "دروس مكتملة" : "LESSONS COMPLETED"}
        </p>

        <button class="btn" type="button"
          data-level="${level.level}">
          ${t.openLessons}
        </button>
      </article>
    `;
  }).join("");

  grid.querySelectorAll("[data-level]").forEach(button => {
    button.addEventListener("click", () => {
      openLevel(Number(button.dataset.level));
    });
  });
}

/* =========================================
   MODAL
========================================= */

function openModal() {
  const modal = document.getElementById("modal");
  modal.hidden = false;
  document.body.style.overflow = "hidden";
}

function closeModal() {
  const modal = document.getElementById("modal");
  modal.hidden = true;
  document.body.style.overflow = "";

  const content = document.getElementById("modalContent");
  content.innerHTML = "";
}

function openVideo(videoUrl, title) {
  const videoId = getYouTubeId(videoUrl);

  if (!videoId) {
    showToast("Unable to open this video link.");
    return;
  }

  const content = document.getElementById("modalContent");

  content.innerHTML = `
    <h2 class="modal-title">${title}</h2>
    <div class="video-frame">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(videoId)}?autoplay=1&rel=0"
        title="${title}"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen>
      </iframe>
    </div>
    <p class="modal-description">
      ${TEXT[currentLanguage].progressSaved}
    </p>
    <p>
      <a class="btn" href="${videoUrl}" target="_blank" rel="noopener noreferrer">
        ${TEXT[currentLanguage].watchVideo}
      </a>
    </p>
  `;

  openModal();
}

function openLevel(levelNumber) {
  const level = LEVELS.find(item => item.level === levelNumber);
  if (!level) return;

  const t = TEXT[currentLanguage];
  const content = document.getElementById("modalContent");

  const heading = currentLanguage === "ar"
    ? level.title.ar
    : level.title.en;

  content.innerHTML = `
    <p class="eyebrow">${t.level} 0${level.level}</p>
    <h2 class="modal-title">${heading}</h2>
    <p class="modal-description">${t.chooseLesson}</p>

    <div class="lesson-list">
      ${level.moves.map((move, index) => {
        const done = isCompleted(move.video);

        return `
          <article class="lesson-item ${done ? "done" : ""}">
            <div class="lesson-info">
              <h4>${String(index + 1).padStart(2, "0")} · ${move[currentLanguage]}</h4>
              <small>${done ? t.completed : `${t.level} 0${level.level}`}</small>
            </div>

            <div class="lesson-actions">
              <button type="button"
                data-watch="${index}">
                ${t.watchVideo}
              </button>

              <button type="button"
                class="${done ? "complete" : ""}"
                data-complete="${index}">
                ${done ? t.completed : t.markComplete}
              </button>
            </div>
          </article>
        `;
      }).join("")}
    </div>
  `;

  openModal();

  content.querySelectorAll("[data-watch]").forEach(button => {
    button.addEventListener("click", () => {
      const move = level.moves[Number(button.dataset.watch)];
      openVideo(move.video, move[currentLanguage]);
    });
  });

  content.querySelectorAll("[data-complete]").forEach(button => {
    button.addEventListener("click", () => {
      const move = level.moves[Number(button.dataset.complete)];
      const completed = getCompletedVideos();

      if (!completed.includes(move.video)) {
        completed.push(move.video);
        saveCompletedVideos(completed);
        showToast(t.marked);
      }

      openLevel(levelNumber);
    });
  });
}

/* =========================================
   PROGRESS AND XP
========================================= */

function updateProgress() {
  const allMoves = getAllMoves();
  const completed = getCompletedVideos();

  const validCompleted = completed.filter(video =>
    allMoves.some(move => move.video === video)
  );

  const total = allMoves.length;
  const count = validCompleted.length;
  const percent = total ? Math.round((count / total) * 100) : 0;

  document.getElementById("completedCount").textContent = count;
  document.getElementById("xpCount").textContent = count * 10;
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressBar").style.width = `${percent}%`;

  renderLevels();
}

/* =========================================
   LANGUAGE SWITCH
========================================= */

function setLanguage(language) {
  currentLanguage = language;
  localStorage.setItem(LANGUAGE_KEY, language);

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.dir = document.documentElement.dir;

  const toggle = document.getElementById("languageToggle");
  toggle.textContent = language === "ar" ? "EN" : "عربي";

  toggle.setAttribute(
    "aria-label",
    language === "ar" ? "Switch to English" : "التبديل للإنجليزية"
  );

  document.querySelectorAll("[data-en][data-ar]").forEach(element => {
    element.textContent = element.dataset[language];
  });

  /* Keep formatted headings with their intended line breaks. */
  const trainingHeading = document.querySelector("#training .section-heading h2");
  const aboutHeading = document.querySelector("#about h2");
  const programHeading = document.querySelector(".programs h2");
  const progressHeading = document.querySelector("#progress h2");
  const challengeHeading = document.querySelector(".challenge h2");
  const contactHeading = document.querySelector("#contact h2");

  if (trainingHeading) {
    trainingHeading.innerHTML = language === "ar"
      ? 'اختار <em>مستواك.</em>'
      : 'CHOOSE YOUR <em>LEVEL.</em>';
  }

  if (aboutHeading) {
    aboutHeading.innerHTML = language === "ar"
      ? 'أكتر من رياضة.<br><em>ده أسلوب حياة.</em>'
      : 'MORE THAN A SPORT.<br><em>IT\'S A LIFESTYLE.</em>';
  }

  if (programHeading) {
    programHeading.innerHTML = language === "ar"
      ? 'اتدرّب. اتعلم. <em>ابتكر.</em>'
      : 'TRAIN. LEARN. <em>CREATE.</em>';
  }

  if (progressHeading) {
    progressHeading.innerHTML = language === "ar"
      ? 'تقدمك.<br><em>حكايتك.</em>'
      : 'YOUR PROGRESS.<br><em>YOUR STORY.</em>';
  }

  if (challengeHeading) {
    challengeHeading.innerHTML = language === "ar"
      ? 'خطوات صغيرة.<br><em>تقدم حقيقي.</em>'
      : 'SMALL STEPS.<br><em>REAL PROGRESS.</em>';
  }

  if (contactHeading) {
    contactHeading.innerHTML = language === "ar"
      ? 'ابدأ <em>خطوتك الجاية.</em>'
      : 'START YOUR<br><em>NEXT CHAPTER.</em>';
  }

  document.getElementById("promoButton").querySelector("span").textContent =
    language === "ar" ? "شاهد الفيديو التعريفي" : "WATCH PROMO";

  renderLevels();
  updateProgress();
}

/* =========================================
   MENU AND BUTTONS
========================================= */

function initMenu() {
  const toggle = document.getElementById("menuToggle");
  const nav = document.getElementById("nav");

  toggle.addEventListener("click", () => {
    const isOpen = nav.classList.toggle("open");
    toggle.textContent = isOpen ? "×" : "☰";
    toggle.setAttribute("aria-expanded", String(isOpen));
  });

  nav.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
      nav.classList.remove("open");
      toggle.textContent = "☰";
      toggle.setAttribute("aria-expanded", "false");
    });
  });
}

function initModal() {
  document.getElementById("promoButton").addEventListener("click", () => {
    openVideo(
      `https://youtube.com/shorts/${PROMO_VIDEO_ID}`,
      TEXT[currentLanguage].promo
    );
  });

  document.querySelectorAll("[data-close]").forEach(element => {
    element.addEventListener("click", closeModal);
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") closeModal();
  });
}

function initButtons() {
  document.getElementById("languageToggle").addEventListener("click", () => {
    setLanguage(currentLanguage === "en" ? "ar" : "en");
  });

  document.getElementById("resetProgress").addEventListener("click", () => {
    if (window.confirm(TEXT[currentLanguage].resetConfirm)) {
      localStorage.removeItem(STORAGE_KEY);
      updateProgress();
      showToast(TEXT[currentLanguage].resetDone);
    }
  });

  document.getElementById("challengeButton").addEventListener("click", () => {
    document.getElementById("challengeStatus").textContent =
      TEXT[currentLanguage].challenge;

    showToast(TEXT[currentLanguage].challenge);
  });
}

/* =========================================
   INITIALIZE WEBSITE
========================================= */

function init() {
  document.getElementById("year").textContent = new Date().getFullYear();

  initMenu();
  initModal();
  initButtons();

  setLanguage(currentLanguage);
  updateProgress();
}

document.addEventListener("DOMContentLoaded", init);

"use strict";

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => [...document.querySelectorAll(selector)];

const LEVELS = {
  1: [
    "6aFpoFo23PA", "M9axAOpLjsc", "8WPiCnvakbs",
    "IOS7qZsFGJ0", "mpjLNNi4iUk"
  ],
  2: [
    "lhR_rudTPE4", "v9V71PVYjJ0", "abQOOWzJSVc",
    "1ND7el_msvM", "JLbuT9FU6lI", "Tu14vq5gmTA",
    "tX37Ugu_L_o", "ktSlnQzloLU", "_IATk3dpSfU",
    "PeDeqIttPho"
  ],
  3: [
    "y-Ins4dcNDk", "XjoqFhTUO74", "Tc7WZpXNCTo",
    "0SejUtKqTdU", "6ZE5YEDIEaU", "VWRBXT8dXYc",
    "c15g05If_-w", "JOrAPBj1iL0", "UanAXX9JgDg"
  ],
  4: [
    "B38mbEB0kq4", "jW_Y_8zKnBA", "G0BJmVJPfDg"
  ]
};

const LESSON_TITLES = {
  en: {
    1: ["Basic Move 01", "Basic Move 02", "Basic Move 03", "Basic Move 04", "Basic Move 05"],
    2: ["Intermediate 01", "Intermediate 02", "Intermediate 03", "Intermediate 04", "Intermediate 05", "Intermediate 06", "Intermediate 07", "Intermediate 08", "Intermediate 09", "Intermediate 10"],
    3: ["Advanced Move 01", "Advanced Move 02", "Advanced Move 03", "Advanced Move 04", "Advanced Move 05", "Advanced Move 06", "Advanced Move 07", "Advanced Move 08", "Advanced Move 09"],
    4: ["Elite Move 01", "Elite Move 02", "Elite Move 03"]
  },
  ar: {
    1: ["الحركة الأساسية ١", "الحركة الأساسية ٢", "الحركة الأساسية ٣", "الحركة الأساسية ٤", "الحركة الأساسية ٥"],
    2: ["المستوى المتوسط ١", "المستوى المتوسط ٢", "المستوى المتوسط ٣", "المستوى المتوسط ٤", "المستوى المتوسط ٥", "المستوى المتوسط ٦", "المستوى المتوسط ٧", "المستوى المتوسط ٨", "المستوى المتوسط ٩", "المستوى المتوسط ١٠"],
    3: ["الحركة المتقدمة ١", "الحركة المتقدمة ٢", "الحركة المتقدمة ٣", "الحركة المتقدمة ٤", "الحركة المتقدمة ٥", "الحركة المتقدمة ٦", "الحركة المتقدمة ٧", "الحركة المتقدمة ٨", "الحركة المتقدمة ٩"],
    4: ["حركة المحترفين ١", "حركة المحترفين ٢", "حركة المحترفين ٣"]
  }
};

const LEVEL_NAMES = {
  en: {1:"Basic Moves",2:"Intermediate",3:"Advanced Moves",4:"Elite Movement"},
  ar: {1:"الحركات الأساسية",2:"المستوى المتوسط",3:"الحركات المتقدمة",4:"حركات المحترفين"}
};

const TOTAL_LESSONS = Object.values(LEVELS).flat().length;
let language = localStorage.getItem("px-language") || "en";
let activeLevel = 1;
let activeVideo = "";
let toastTimer;

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem("px-completed") || "[]");
  } catch {
    return [];
  }
}

function setCompleted(items) {
  localStorage.setItem("px-completed", JSON.stringify(items));
  updateProgress();
}

function showToast(message) {
  const toast = $("#toast");
  toast.textContent = message;
  toast.classList.add("show");
  clearTimeout(toastTimer);
  toastTimer = setTimeout(() => toast.classList.remove("show"), 2600);
}

function openModal(title, content) {
  $("#modalTitle").textContent = title;
  $("#modalBody").innerHTML = content;
  $("#appModal").classList.add("is-open");
  $("#appModal").setAttribute("aria-hidden", "false");
  document.body.classList.add("modal-open");
  $("#modalClose").focus();
}

function closeModal() {
  $("#appModal").classList.remove("is-open");
  $("#appModal").setAttribute("aria-hidden", "true");
  document.body.classList.remove("modal-open");
  $("#modalBody").innerHTML = "";
}

$("#modalClose").addEventListener("click", closeModal);
$$("[data-close-modal]").forEach(el => el.addEventListener("click", closeModal));

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeModal();
});

function openLevel(level) {
  activeLevel = Number(level);
  const completed = getCompleted();
  const titles = LESSON_TITLES[language][activeLevel];

  const rows = LEVELS[activeLevel].map((video, index) => {
    const id = `${activeLevel}-${index}`;
    const done = completed.includes(id);
    return `
      <div class="lesson-row">
        <div>
          <strong>${index + 1}. ${titles[index]}</strong>
          <small>${done ? (language === "ar" ? "✓ مكتمل · 10 XP" : "✓ Completed · 10 XP") : (language === "ar" ? "فيديو تعليمي" : "Video lesson")}</small>
        </div>
        <div class="lesson-actions">
          <button type="button" data-play="${video}" data-lesson="${id}">
            ${language === "ar" ? "▶ تشغيل" : "▶ Watch"}
          </button>
          <button type="button" class="${done ? "done-button" : ""}" data-complete="${id}">
            ${done ? "✓" : (language === "ar" ? "تم" : "Done")}
          </button>
        </div>
      </div>`;
  }).join("");

  openModal(
    `${language === "ar" ? "المستوى" : "LEVEL"} ${activeLevel} — ${LEVEL_NAMES[language][activeLevel]}`,
    `<p>${language === "ar" ? "اتدرج في التعلم، وراجع كل حركة قبل الانتقال للي بعدها." : "Learn progressively and review each movement before moving on."}</p>
     <div class="lesson-list">${rows}</div>
     <p class="small-note">${language === "ar" ? "مهم: بعض المهارات تحتاج مدربًا مؤهلًا ومكان تدريب آمن." : "Safety first: advanced skills require suitable facilities and qualified supervision."}</p>`
  );
}

function playVideo(video, lessonId) {
  activeVideo = video;
  const title = language === "ar" ? "الفيديو التعليمي" : "TRAINING VIDEO";
  openModal(title, `
    <div class="video-frame">
      <iframe
        src="https://www.youtube-nocookie.com/embed/${encodeURIComponent(video)}?autoplay=1&rel=0"
        title="Parkour training lesson"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
        style="width:100%;aspect-ratio:16/9;border:0;background:#111"
      ></iframe>
    </div>
    <p>${language === "ar" ? "بعد ما تخلص الدرس، علّمه كمكتمل لتحديث تقدمك." : "After the lesson, mark it complete to update your progress."}</p>
    <button class="button button-red" id="markVideoDone">${language === "ar" ? "✓ علّم الدرس كمكتمل" : "✓ MARK LESSON COMPLETE"}</button>
  `);
  $("#markVideoDone").addEventListener("click", () => {
    markLessonComplete(lessonId);
    closeModal();
  });
}

function markLessonComplete(id) {
  const completed = getCompleted();
  if (!completed.includes(id)) {
    completed.push(id);
    setCompleted(completed);
    showToast(language === "ar" ? "عاش! كسبت 10 نقاط XP." : "Nice work! You earned 10 XP.");
  } else {
    showToast(language === "ar" ? "الدرس ده مكتمل بالفعل." : "This lesson is already complete.");
  }
}

function updateProgress() {
  const completed = getCompleted();
  const count = completed.length;
  const percentage = Math.round(count / TOTAL_LESSONS * 100);

  $("#completedCount").textContent = count;
  $("#xpCount").textContent = count * 10;
  $("#progressPercent").textContent = `${percentage}%`;
  $("#progressBar").style.width = `${percentage}%`;

  $("#progressHint").textContent = language === "ar"
    ? (count === TOTAL_LESSONS ? "مبروك! سجلت كل الدروس كمكتملة." : `أنجزت ${count} من ${TOTAL_LESSONS} درس. كمل رحلتك!`)
    : (count === TOTAL_LESSONS ? "Amazing! You've marked every lesson complete." : `${count} of ${TOTAL_LESSONS} lessons completed. Keep going!`);
}

function setLanguage(nextLanguage) {
  language = nextLanguage;
  localStorage.setItem("px-language", language);

  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  $("#languageToggle").textContent = language === "ar" ? "EN" : "عربي";

  $$("[data-en][data-ar]").forEach(el => {
    el.innerHTML = el.dataset[language];
  });

  $("#menuToggle").setAttribute("aria-label", language === "ar" ? "فتح القائمة" : "Open menu");
  $("#signInButton").setAttribute("aria-label", language === "ar" ? "تسجيل الدخول" : "Sign in");
  updateProgress();
}

$("#languageToggle").addEventListener("click", () => {
  setLanguage(language === "en" ? "ar" : "en");
});

$("#menuToggle").addEventListener("click", () => {
  const nav = $("#nav");
  const isOpen = nav.classList.toggle("open");
  $("#menuToggle").setAttribute("aria-expanded", String(isOpen));
  $("#menuToggle").textContent = isOpen ? "×" : "☰";
});

$$(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    $("#nav").classList.remove("open");
    $("#menuToggle").setAttribute("aria-expanded", "false");
    $("#menuToggle").textContent = "☰";
  });
});

$$(".open-level").forEach(button => {
  button.addEventListener("click", () => openLevel(button.dataset.level));
});

$("#continueTraining").addEventListener("click", () => {
  const completed = getCompleted();
  let targetLevel = 1;

  for (let level = 1; level <= 4; level++) {
    const ids = LEVELS[level].map((_, index) => `${level}-${index}`);
    if (ids.some(id => !completed.includes(id))) {
      targetLevel = level;
      break;
    }
  }

  openLevel(targetLevel);
});

$("#signInButton").addEventListener("click", () => {
  const supabaseReady = typeof window.supabaseClient !== "undefined" ||
    typeof window.supabase !== "undefined" && Boolean(window.PARKOUR_SUPABASE_READY);

  openModal(
    language === "ar" ? "حسابك في الأكاديمية" : "YOUR ACADEMY ACCOUNT",
    `<p>${language === "ar" ? "تقدر تتابع تقدمك على الجهاز ده بدون حساب. تسجيل الحساب الحقيقي محتاج إعدادات Supabase صحيحة." : "Your progress is saved on this device. Real account sign-in requires valid Supabase project configuration."}</p>
    <form id="signInForm">
      <label for="accountEmail">${language === "ar" ? "البريد الإلكتروني" : "EMAIL ADDRESS"}</label>
      <input id="accountEmail" type="email" autocomplete="email" required placeholder="you@example.com">
      <label for="accountPassword">${language === "ar" ? "كلمة المرور" : "PASSWORD"}</label>
      <input id="accountPassword" type="password" autocomplete="current-password" required minlength="6" placeholder="••••••••">
      <button class="button button-red" type="submit">${language === "ar" ? "تسجيل الدخول" : "SIGN IN"}</button>
    </form>
    <p class="small-note">${language === "ar" ? "لو Supabase مش متوصل، النموذج مش هيعمل حسابًا حقيقيًا. تقدمك المحلي شغال بدون تسجيل." : "If Supabase isn't configured, this form will not create a real account. Local progress works without signing in."}</p>`
  );

  $("#signInForm").addEventListener("submit", async event => {
    event.preventDefault();
    const email = $("#accountEmail").value.trim();
    const password = $("#accountPassword").value;

    const client = window.parkourSupabase || window.supabaseClient;
    if (!client || typeof client.auth?.signInWithPassword !== "function") {
      showToast(language === "ar"
        ? "تسجيل الحساب الحقيقي محتاج توصيل Supabase أولًا."
        : "Connect Supabase first to enable real account sign-in.");
      return;
    }

    const submit = event.submitter;
    submit.disabled = true;
    submit.textContent = language === "ar" ? "جارٍ الدخول..." : "SIGNING IN...";

    try {
      const { error } = await client.auth.signInWithPassword({ email, password });
      if (error) throw error;
      closeModal();
      showToast(language === "ar" ? "تم تسجيل الدخول." : "Signed in successfully.");
    } catch (error) {
      showToast(error.message || (language === "ar" ? "تعذر تسجيل الدخول." : "Sign-in failed."));
      submit.disabled = false;
      submit.textContent = language === "ar" ? "تسجيل الدخول" : "SIGN IN";
    }
  });
});

const PRODUCTS = [
  { id:"tee", name:"PX Urban T-Shirt", price:450, description:"Everyday training tee." },
  { id:"hoodie", name:"PX Training Hoodie", price:950, description:"Urban layer for cooler days." },
  { id:"pants", name:"PX Movement Pants", price:750, description:"Comfort for everyday movement." },
  { id:"bag", name:"PX Training Bag", price:550, description:"Carry your training essentials." }
];

function getCart() {
  try {
    return JSON.parse(localStorage.getItem("px-cart") || "[]");
  } catch {
    return [];
  }
}

function saveCart(cart) {
  localStorage.setItem("px-cart", JSON.stringify(cart));
  updateCartCount();
}

function updateCartCount() {
  const cart = getCart();
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  $("#cartCount").textContent = language === "ar" ? `${count} قطعة` : `${count} ITEMS`;
}

function openShop() {
  const productCards = PRODUCTS.map(product => `
    <article class="product-card">
      <p class="level-kicker">PARKOUR X / GEAR</p>
      <h3>${product.name}</h3>
      <p>${product.description}</p>
      <strong>${product.price} EGP</strong>
      <label for="size-${product.id}">${language === "ar" ? "المقاس" : "SIZE"}</label>
      <select id="size-${product.id}">
        <option value="S">S</option><option value="M" selected>M</option>
        <option value="L">L</option><option value="XL">XL</option>
      </select>
      <label for="color-${product.id}">${language === "ar" ? "اللون" : "COLOR"}</label>
      <select id="color-${product.id}">
        <option value="Black">${language === "ar" ? "أسود" : "Black"}</option>
        <option value="White">${language === "ar" ? "أبيض" : "White"}</option>
        <option value="Red">${language === "ar" ? "أحمر" : "Red"}</option>
      </select>
      <button class="button button-red add-product" data-product="${product.id}">${language === "ar" ? "أضف للسلة" : "ADD TO CART"}</button>
    </article>
  `).join("");

  openModal(
    language === "ar" ? "مجموعة PARKOUR X" : "PARKOUR X COLLECTION",
    `<p>${language === "ar" ? "اختار المنتج والمقاس واللون. دي سلة تجريبية، مش متجر دفع فعلي." : "Choose your product, size and color. This is a demo cart, not a live checkout."}</p>
     <div class="shop-products">${productCards}</div>
     <button class="button button-dark" id="openCartFromShop">${language === "ar" ? "عرض السلة" : "VIEW CART"}</button>`
  );

  $$(".add-product").forEach(button => {
    button.addEventListener("click", () => {
      const product = PRODUCTS.find(item => item.id === button.dataset.product);
      const size = $(`#size-${product.id}`).value;
      const color = $(`#color-${product.id}`).value;
      const cart = getCart();
      const existing = cart.find(item => item.id === product.id && item.size === size && item.color === color);

      if (existing) existing.quantity += 1;
      else cart.push({ id:product.id, name:product.name, price:product.price, size, color, quantity:1 });

      saveCart(cart);
      showToast(language === "ar" ? "اتضاف المنتج للسلة." : "Added to your cart.");
    });
  });

  $("#openCartFromShop").addEventListener("click", openCart);
}

function openCart() {
  const cart = getCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const rows = cart.length ? cart.map((item, index) => `
    <div class="cart-item">
      <div><strong>${item.name}</strong><br>
        <span>${item.size} / ${item.color} · ${item.quantity} × ${item.price} EGP</span>
      </div>
      <button type="button" data-remove-cart="${index}">${language === "ar" ? "حذف" : "REMOVE"}</button>
    </div>`).join("") : `<p>${language === "ar" ? "السلة فاضية حاليًا." : "Your cart is currently empty."}</p>`;

  openModal(
    language === "ar" ? "سلة مشترياتك" : "YOUR CART",
    `${rows}
     <h3>${language === "ar" ? "الإجمالي التقديري:" : "ESTIMATED TOTAL:"} ${total.toLocaleString()} EGP</h3>
     <p class="small-note">${language === "ar" ? "المتجر تجريبي. لا يوجد دفع إلكتروني أو طلب حقيقي." : "Demo only. No online payment or real order is created."}</p>
     <button class="button button-dark" id="clearCart">${language === "ar" ? "إفراغ السلة" : "CLEAR CART"}</button>`
  );

  $$("[data-remove-cart]").forEach(button => {
    button.addEventListener("click", () => {
      const updated = getCart();
      updated.splice(Number(button.dataset.removeCart), 1);
      saveCart(updated);
      openCart();
    });
  });

  $("#clearCart").addEventListener("click", () => {
    saveCart([]);
    openCart();
  });
}

$("#shopButton").addEventListener("click", openShop);
$("#viewCart").addEventListener("click", openCart);

const CHALLENGES = [
  {
    titleEn:"CONSISTENCY CHALLENGE",
    titleAr:"تحدي الاستمرارية",
    descEn:"Complete three beginner training sessions this week. Focus on technique, warm-ups and controlled movement.",
    descAr:"أكمل ٣ حصص تدريب للمبتدئين الأسبوع ده. ركز على الأسلوب والإحماء والتحكم في الحركة."
  },
  {
    titleEn:"LANDING CONTROL",
    titleAr:"تحدي التحكم في الهبوط",
    descEn:"With qualified supervision and a suitable low-impact surface, practice basic landing mechanics. Stop if anything hurts.",
    descAr:"بإشراف مؤهل وعلى سطح مناسب، اتدرب على أساسيات الهبوط من ارتفاع بسيط. توقف لو حسيت بألم."
  },
  {
    titleEn:"BALANCE & MOBILITY",
    titleAr:"تحدي التوازن والمرونة",
    descEn:"Practice a gentle balance and mobility routine. Use stable ground and progress gradually.",
    descAr:"اتدرب على روتين بسيط للتوازن والحركة. استخدم أرض ثابتة واتدرج في التدريب."
  }
];

function openChallenges() {
  const cards = CHALLENGES.map((challenge, index) => `
    <div class="lesson-row">
      <div><strong>${language === "ar" ? challenge.titleAr : challenge.titleEn}</strong>
      <small>${language === "ar" ? "تحدي تدريبي آمن ومتدرج" : "Progressive training challenge"}</small></div>
      <button type="button" data-challenge="${index}">${language === "ar" ? "عرض" : "VIEW"}</button>
    </div>
  `).join("");

  openModal(language === "ar" ? "تحدياتك" : "YOUR CHALLENGES",
    `<p>${language === "ar" ? "التحدي الحقيقي إنك تتطور باستمرار، مش إنك تخاطر." : "Real progress comes from consistency, not unnecessary risk."}</p>
    <div class="lesson-list">${cards}</div>`);

  $$("[data-challenge]").forEach(button => {
    button.addEventListener("click", () => {
      const item = CHALLENGES[Number(button.dataset.challenge)];
      openModal(
        language === "ar" ? item.titleAr : item.titleEn,
        `<p>${language === "ar" ? item.descAr : item.descEn}</p>
        <button class="button button-red" id="challengeDone">${language === "ar" ? "تم، هبدأ بالتدريج" : "GOT IT — TRAIN SAFELY"}</button>`
      );
      $("#challengeDone").addEventListener("click", () => {
        closeModal();
        showToast(language === "ar" ? "ابدأ بهدوء وحافظ على سلامتك!" : "Start gradually and stay safe!");
      });
    });
  });
}

$("#challengeButton").addEventListener("click", openChallenges);

$("#year").textContent = new Date().getFullYear();
setLanguage(language);
updateProgress();
updateCartCount();
