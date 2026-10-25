
const lessons = {
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

const levelNames = {
  1: "LEVEL 01 · FOUNDATION",
  2: "LEVEL 02 · DEVELOPMENT",
  3: "LEVEL 03 · PERFORMANCE",
  4: "LEVEL 04 · ADVANCED"
};

const videoLevels = document.getElementById("videoLevels");
const modal = document.getElementById("videoModal");
const videoFrame = document.getElementById("videoFrame");
const progressKey = "parkourx_completed_lessons";

function getCompleted() {
  try {
    return JSON.parse(localStorage.getItem(progressKey) || "[]");
  } catch {
    return [];
  }
}

function saveCompleted(list) {
  localStorage.setItem(progressKey, JSON.stringify(list));
  updateProgress();
}

function updateProgress() {
  const completed = getCompleted();
  const total = Object.values(lessons).flat().length;
  const percent = Math.round((completed.length / total) * 100);

  document.getElementById("completedCount").textContent = completed.length;
  document.getElementById("progressPercent").textContent = percent + "%";
  document.getElementById("progressBar").style.width = percent + "%";

  document.querySelectorAll(".lesson").forEach(button => {
    const done = completed.includes(button.dataset.video);
    button.classList.toggle("done", done);
    button.setAttribute("aria-pressed", String(done));
  });
}

function renderLessons() {
  Object.entries(lessons).forEach(([level, ids]) => {
    const section = document.createElement("section");
    section.className = "video-level";
    section.id = `videos-${level}`;

    const heading = document.createElement("h3");
    heading.textContent = levelNames[level];
    section.appendChild(heading);

    const grid = document.createElement("div");
    grid.className = "lesson-grid";

    ids.forEach((id, index) => {
      const button = document.createElement("button");
      button.className = "lesson";
      button.dataset.video = id;
      button.type = "button";
      button.innerHTML = `
        <img src="https://img.youtube.com/vi/${id}/hqdefault.jpg"
             alt="Parkour lesson ${index + 1}, level ${level}"
             loading="lazy">
        <span>LESSON ${String(index + 1).padStart(2, "0")}</span>
      `;

      button.addEventListener("click", () => {
        videoFrame.src =
          `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0`;
        modal.classList.add("open");
        modal.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden";
      });

      button.addEventListener("contextmenu", event => {
        event.preventDefault();
        const completed = getCompleted();
        const updated = completed.includes(id)
          ? completed.filter(video => video !== id)
          : [...completed, id];
        saveCompleted(updated);
      });

      grid.appendChild(button);
    });

    section.appendChild(grid);
    videoLevels.appendChild(section);
  });
}

function closeVideo() {
  modal.classList.remove("open");
  modal.setAttribute("aria-hidden", "true");
  videoFrame.src = "";
  document.body.style.overflow = "";
}

document.getElementById("closeModal").addEventListener("click", closeVideo);

modal.addEventListener("click", event => {
  if (event.target === modal) closeVideo();
});

document.addEventListener("keydown", event => {
  if (event.key === "Escape") closeVideo();
});

document.getElementById("resetProgress").addEventListener("click", () => {
  if (confirm("Reset your training progress on this device?")) {
    localStorage.removeItem(progressKey);
    updateProgress();
  }
});

document.getElementById("menuToggle").addEventListener("click", () => {
  document.getElementById("navMenu").classList.toggle("open");
});

document.querySelectorAll("#navMenu a").forEach(link => {
  link.addEventListener("click", () => {
    document.getElementById("navMenu").classList.remove("open");
  });
});

let currentLanguage = "en";

document.getElementById("languageToggle").addEventListener("click", () => {
  currentLanguage = currentLanguage === "en" ? "ar" : "en";

  document.documentElement.lang = currentLanguage;
  document.documentElement.dir = currentLanguage === "ar" ? "rtl" : "ltr";

  document.querySelectorAll("[data-en][data-ar]").forEach(element => {
    element.textContent = element.dataset[currentLanguage];
  });

  document.getElementById("languageToggle").textContent =
    currentLanguage === "en" ? "عربي" : "English";
});

document.getElementById("year").textContent = new Date().getFullYear();

renderLessons();
updateProgress();
