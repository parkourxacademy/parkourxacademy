
const trainingLevels = {
  1: {
    name: "LEVEL 01 — THE BEGINNER",
    lessons: [
      ["Parkour Lesson 1", "6aFpoFo23PA"],
      ["Parkour Lesson 2", "M9axAOpLjsc"],
      ["Parkour Lesson 3", "8WPiCnvakbs"],
      ["Parkour Lesson 4", "IOS7qZsFGJ0"],
      ["Parkour Lesson 5", "mpjLNNi4iUk"]
    ]
  },
  2: {
    name: "LEVEL 02 — THE EXPLORER",
    lessons: [
      ["Parkour Lesson 1", "lhR_rudTPE4"],
      ["Parkour Lesson 2", "v9V71PVYjJ0"],
      ["Parkour Lesson 3", "abQOOWzJSVc"],
      ["Parkour Lesson 4", "1ND7el_msvM"],
      ["Parkour Lesson 5", "JLbuT9FU6lI"],
      ["Parkour Lesson 6", "Tu14vq5gmTA"],
      ["Parkour Lesson 7", "tX37Ugu_L_o"],
      ["Parkour Lesson 8", "ktSlnQzloLU"],
      ["Parkour Lesson 9", "_IATk3dpSfU"],
      ["Parkour Lesson 10", "PeDeqIttPho"]
    ]
  },
  3: {
    name: "LEVEL 03 — THE ATHLETE",
    lessons: [
      ["Parkour Lesson 1", "y-Ins4dcNDk"],
      ["Parkour Lesson 2", "XjoqFhTUO74"],
      ["Parkour Lesson 3", "Tc7WZpXNCTo"],
      ["Parkour Lesson 4", "0SejUtKqTdU"],
      ["Parkour Lesson 5", "6ZE5YEDIEaU"],
      ["Parkour Lesson 6", "VWRBXT8dXYc"],
      ["Parkour Lesson 7", "c15g05If_-w"],
      ["Parkour Lesson 8", "JOrAPBj1iL0"],
      ["Parkour Lesson 9", "UanAXX9JgDg"]
    ]
  },
  4: {
    name: "LEVEL 04 — THE ELITE",
    lessons: [
      ["Parkour Lesson 1", "B38mbEB0kq4"],
      ["Parkour Lesson 2", "jW_Y_8zKnBA"],
      ["Parkour Lesson 3", "G0BJmVJPfDg"]
    ]
  }
};

const STORAGE_KEY = "parkourx_progress_v2";
const TOTAL_LESSONS = Object.values(trainingLevels)
  .reduce((total, level) => total + level.lessons.length, 0);

let completedLessons = loadProgress();
let currentLanguage = "en";

function loadProgress() {
  try {
    const saved = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(saved) ? saved : [];
  } catch {
    return [];
  }
}

function saveProgress() {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(completedLessons));
  } catch (error) {
    console.warn("Could not save progress locally.", error);
  }
}

function lessonKey(level, index) {
  return `${level}-${index}`;
}

function renderLessons(levelNumber) {
  const level = trainingLevels[levelNumber];
  if (!level) return;

  const area = document.getElementById("lessonArea");
  const grid = document.getElementById("lessonGrid");
  const title = document.getElementById("lessonTitle");

  title.textContent = level.name;
  grid.replaceChildren();

  level.lessons.forEach(([name, videoId], index) => {
    const key = lessonKey(levelNumber, index);
    const isCompleted = completedLessons.includes(key);

    const card = document.createElement("article");
    card.className = "lesson-card";

    const frame = document.createElement("div");
    frame.className = "video-frame";

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
    iframe.title = name;
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;

    frame.appendChild(iframe);

    const info = document.createElement("div");
    info.className = "lesson-info";

    const heading = document.createElement("h4");
    heading.textContent = `${String(index + 1).padStart(2, "0")} / ${name}`;

    const button = document.createElement("button");
    button.type = "button";
    button.className = `complete-btn${isCompleted ? " completed" : ""}`;
    button.textContent = isCompleted ? "✓ COMPLETED — UNDO" : "MARK AS COMPLETED";

    button.addEventListener("click", () => {
      if (completedLessons.includes(key)) {
        completedLessons = completedLessons.filter(item => item !== key);
      } else {
        completedLessons.push(key);
      }

      saveProgress();
      renderProgress();
      renderLessons(levelNumber);
    });

    info.append(heading, button);
    card.append(frame, info);
    grid.appendChild(card);
  });

  area.hidden = false;
  area.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderProgress() {
  const completed = completedLessons.length;
  const percent = Math.round((completed / TOTAL_LESSONS) * 100);

  document.getElementById("completedCount").textContent = completed;
  document.getElementById("pointsCount").textContent = completed * 10;
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressFill").style.width = `${percent}%`;
}

document.querySelectorAll(".level-btn").forEach(button => {
  button.addEventListener("click", () => {
    renderLessons(Number(button.dataset.level));
  });
});

document.getElementById("closeLessons").addEventListener("click", () => {
  document.getElementById("lessonArea").hidden = true;
  document.getElementById("training").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("viewProgressBtn").addEventListener("click", () => {
  document.getElementById("progress").scrollIntoView({ behavior: "smooth" });
});

document.getElementById("resetProgressBtn").addEventListener("click", () => {
  const confirmed = window.confirm("Reset all completed lessons and XP points on this device?");
  if (!confirmed) return;

  completedLessons = [];
  saveProgress();
  renderProgress();

  const area = document.getElementById("lessonArea");
  if (!area.hidden) {
    const title = document.getElementById("lessonTitle").textContent;
    const levelNumber = Object.keys(trainingLevels).find(
      key => trainingLevels[key].name === title
    );
    if (levelNumber) renderLessons(Number(levelNumber));
  }
});

document.getElementById("challengeBtn").addEventListener("click", () => {
  const message = document.getElementById("challengeMessage");
  message.textContent = "CHALLENGE ACCEPTED! Choose a lesson, practise safely and mark it complete when you finish.";
});

document.getElementById("year").textContent = new Date().getFullYear();

function setLanguage(language) {
  currentLanguage = language;
  document.body.classList.toggle("arabic", language === "ar");
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en][data-ar]").forEach(element => {
    element.textContent = element.dataset[language];
  });

  document.getElementById("languageBtn").textContent =
    language === "en" ? "عربي" : "English";

  document.getElementById("authBtn").textContent =
    language === "en" ? "Sign In" : "تسجيل الدخول";
}

document.getElementById("languageBtn").addEventListener("click", () => {
  setLanguage(currentLanguage === "en" ? "ar" : "en");
});

const authModal = document.getElementById("authModal");

document.getElementById("authBtn").addEventListener("click", () => {
  authModal.hidden = false;
});

document.getElementById("closeAuth").addEventListener("click", () => {
  authModal.hidden = true;
});

authModal.addEventListener("click", event => {
  if (event.target === authModal) authModal.hidden = true;
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") authModal.hidden = true;
});

async function handleAuth(action) {
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  const message = document.getElementById("authMessage");

  if (!email || !password) {
    message.textContent = "Please enter your email and password.";
    return;
  }

  if (password.length < 6) {
    message.textContent = "Password must be at least 6 characters.";
    return;
  }

  const client = window.parkourSupabase;

  if (!client) {
    message.textContent =
      "Online accounts are not configured yet. Add your Supabase URL and publishable key first.";
    return;
  }

  message.textContent = "Please wait...";

  try {
    const result = action === "signup"
      ? await client.auth.signUp({ email, password })
      : await client.auth.signInWithPassword({ email, password });

    if (result.error) throw result.error;

    message.textContent = action === "signup"
      ? "Account request submitted. Check your email if confirmation is required."
      : "Signed in successfully.";

  } catch (error) {
    message.textContent = error.message || "Authentication failed.";
  }
}

document.getElementById("signInBtn").addEventListener("click", () => {
  handleAuth("signin");
});

document.getElementById("signUpBtn").addEventListener("click", () => {
  handleAuth("signup");
});

renderProgress();
