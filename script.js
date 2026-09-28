/* =========================
   PARKOUR X COURSE
========================= */

const lessons = [

  {
    level: 1,
    name: {
      en: "BEGINNERS",
      ar: "المبتدئين"
    },
    videos: [

      {
        title: {
          en: "Balance",
          ar: "التوازن"
        },
        url: "https://youtube.com/shorts/6aFpoFo23PA"
      },

      {
        title: {
          en: "Roll",
          ar: "الدحرجة"
        },
        url: "https://youtube.com/shorts/M9axAOpLjsc"
      },

      {
        title: {
          en: "Precision",
          ar: "الدقة"
        },
        url: "https://youtube.com/shorts/IOS7qZsFGJ0"
      },

      {
        title: {
          en: "Landing",
          ar: "الهبوط"
        },
        url: "https://youtube.com/shorts/8WPiCnvakbs"
      },

      {
        title: {
          en: "Long Jump",
          ar: "القفزة الطويلة"
        },
        url: "https://youtube.com/shorts/mpjLNNi4iUk"
      }

    ]
  },


  {
    level: 2,
    name: {
      en: "BASIC MOVES",
      ar: "الحركات الأساسية"
    },
    videos: [

      {
        title: {
          en: "Crane",
          ar: "كرين"
        },
        url: "https://youtube.com/shorts/lhR_rudTPE4"
      },

      {
        title: {
          en: "Safety Vault",
          ar: "Safety Vault"
        },
        url: "https://youtube.com/shorts/v9V71PVYjJ0"
      },

      {
        title: {
          en: "Reverse Safety",
          ar: "Reverse Safety"
        },
        url: "https://youtube.com/shorts/abQOOWzJSVc"
      },

      {
        title: {
          en: "Speed Vault",
          ar: "Speed Vault"
        },
        url: "https://youtube.com/shorts/_IATk3dpSfU"
      },

      {
        title: {
          en: "Lazy Vault",
          ar: "Lazy Vault"
        },
        url: "https://youtube.com/shorts/JLbuT9FU6lI"
      },

      {
        title: {
          en: "Thief Vault",
          ar: "Thief Vault"
        },
        url: "https://youtube.com/shorts/1ND7el_msvM"
      },

      {
        title: {
          en: "Monkey Vault",
          ar: "Monkey Vault"
        },
        url: "https://youtube.com/shorts/ktSlnQzloLU"
      },

      {
        title: {
          en: "360 Vault",
          ar: "360 Vault"
        },
        url: "https://youtube.com/shorts/Tu14vq5gmTA"
      },

      {
        title: {
          en: "Dash Vault",
          ar: "Dash Vault"
        },
        url: "https://youtube.com/shorts/PeDeqIttPho"
      },

      {
        title: {
          en: "Cat Leap",
          ar: "Cat Leap"
        },
        url: "https://youtube.com/shorts/y-Ins4dcNDk"
      }

    ]
  },


  {
    level: 3,
    name: {
      en: "ADVANCED MOVES",
      ar: "الحركات المتقدمة"
    },
    videos: [

      {
        title: {
          en: "Tic Tac",
          ar: "Tic Tac"
        },
        url: "https://youtube.com/shorts/tX37Ugu_L_o"
      },

      {
        title: {
          en: "Wall Run",
          ar: "Wall Run"
        },
        url: "https://youtube.com/shorts/XjoqFhTUO74"
      },

      {
        title: {
          en: "Underbar",
          ar: "Underbar"
        },
        url: "https://youtube.com/shorts/0SejUtKqTdU"
      },

      {
        title: {
          en: "Turn Vault",
          ar: "Turn Vault"
        },
        url: "https://youtube.com/shorts/Tc7WZpXNCTo"
      },

      {
        title: {
          en: "Kong to Dive Roll",
          ar: "Kong to Dive Roll"
        },
        url: "https://youtube.com/shorts/6ZE5YEDIEaU"
      },

      {
        title: {
          en: "Kong Precision",
          ar: "Kong Precision"
        },
        url: "https://youtube.com/shorts/VWRBXT8dXYc"
      },

      {
        title: {
          en: "Double Kong",
          ar: "Double Kong"
        },
        url: "https://youtube.com/shorts/c15g05If_-w"
      },

      {
        title: {
          en: "Palm Spin",
          ar: "Palm Spin"
        },
        url: "https://youtube.com/shorts/B38mbEB0kq4"
      },

      {
        title: {
          en: "Wall Spin",
          ar: "Wall Spin"
        },
        url: "https://youtube.com/shorts/JOrAPBj1iL0"
      }

    ]
  },


  {
    level: 4,
    name: {
      en: "AERIAL MOVES",
      ar: "الحركات الهوائية"
    },
    videos: [

      {
        title: {
          en: "Backflip",
          ar: "Backflip"
        },
        url: "https://youtube.com/shorts/UanAXX9JgDg"
      },

      {
        title: {
          en: "Frontflip",
          ar: "Frontflip"
        },
        url: "https://youtube.com/shorts/jW_Y_8zKnBA"
      },

      {
        title: {
          en: "Side Flip",
          ar: "Side Flip"
        },
        url: "https://youtube.com/shorts/G0BJmVJPfDg"
      }

    ]
  }

];


/* =========================
   LANGUAGE
========================= */

let currentLanguage =
  localStorage.getItem("parkourXLanguage") || "en";


/* =========================
   YOUTUBE ID
========================= */

function getYouTubeId(url) {

  const match = url.match(
    /(?:shorts\/|youtu\.be\/|v=)([^?&/]+)/i
  );

  return match ? match[1] : "";

}


/* =========================
   LANGUAGE TEXT
========================= */

function getText(obj) {

  if (!obj) return "";

  return obj[currentLanguage] || obj.en || "";

}


/* =========================
   RENDER LESSONS
========================= */

function renderLessons() {

  const container =
    document.getElementById("lessonsContainer");

  if (!container) return;

  container.innerHTML = "";


  lessons.forEach(level => {

    const levelBlock =
      document.createElement("div");

    levelBlock.className = "level-block";


    const heading =
      document.createElement("div");

    heading.className = "level-heading";


    const number =
      document.createElement("span");

    number.className = "level-number";

    number.textContent =
      String(level.level).padStart(2, "0");


    const title =
      document.createElement("h3");

    title.textContent =
      getText(level.name);


    heading.appendChild(number);
    heading.appendChild(title);


    const grid =
      document.createElement("div");

    grid.className = "lesson-grid";


    level.videos.forEach(video => {

      const videoId =
        getYouTubeId(video.url);

      if (!videoId) return;


      const card =
        document.createElement("article");

      card.className = "lesson-card";


      const name =
        document.createElement("div");

      name.className = "lesson-name";


      const strong =
        document.createElement("strong");

      strong.textContent =
        getText(video.title);


      name.appendChild(strong);


      const thumbnail =
        document.createElement("div");

      thumbnail.className =
        "lesson-thumbnail";


      const img =
        document.createElement("img");

      img.src =
        `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;

      img.alt =
        getText(video.title);

      img.loading = "lazy";


      const play =
        document.createElement("span");

      play.className =
        "lesson-play";

      play.textContent = "▶";


      thumbnail.appendChild(img);
      thumbnail.appendChild(play);


      thumbnail.addEventListener(
        "click",
        () => {
          openVideo(
            videoId,
            getText(video.title)
          );
        }
      );


      const watch =
        document.createElement("button");

      watch.type = "button";

      watch.className =
        "lesson-watch";

      watch.textContent =
        currentLanguage === "ar"
          ? "شاهد الفيديو"
          : "WATCH VIDEO";


      watch.addEventListener(
        "click",
        () => {
          openVideo(
            videoId,
            getText(video.title)
          );
        }
      );


      card.appendChild(name);
      card.appendChild(thumbnail);
      card.appendChild(watch);

      grid.appendChild(card);

    });


    levelBlock.appendChild(heading);
    levelBlock.appendChild(grid);

    container.appendChild(levelBlock);

  });

}


/* =========================
   VIDEO MODAL
========================= */

function openVideo(videoId, title) {

  const modal =
    document.getElementById("videoModal");

  const frame =
    document.getElementById("videoFrame");

  const modalTitle =
    document.getElementById("videoModalTitle");


  if (!modal || !frame) return;


  frame.src =
    `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;


  if (modalTitle) {
    modalTitle.textContent = title;
  }


  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );


  document.body.style.overflow = "hidden";

}


/* =========================
   CLOSE VIDEO
========================= */

function closeVideo() {

  const modal =
    document.getElementById("videoModal");

  const frame =
    document.getElementById("videoFrame");


  if (frame) {
    frame.src = "";
  }


  if (modal) {

    modal.classList.remove("active");

    modal.setAttribute(
      "aria-hidden",
      "true"
    );

  }


  document.body.style.overflow = "";

}


/* =========================
   LANGUAGE UPDATE
========================= */

function updateLanguage() {

  document.documentElement.lang =
    currentLanguage;

  document.documentElement.dir =
    currentLanguage === "ar"
      ? "rtl"
      : "ltr";


  document
    .querySelectorAll("[data-en][data-ar]")
    .forEach(element => {

      element.textContent =
        currentLanguage === "ar"
          ? element.dataset.ar
          : element.dataset.en;

    });


  const languageButton =
    document.getElementById(
      "languageToggle"
    );


  if (languageButton) {

    languageButton.textContent =
      currentLanguage === "ar"
        ? "EN"
        : "AR";

  }


  renderLessons();


  localStorage.setItem(
    "parkourXLanguage",
    currentLanguage
  );

}


/* =========================
   LANGUAGE BUTTON
========================= */

function initLanguage() {

  const button =
    document.getElementById(
      "languageToggle"
    );


  if (!button) return;


  button.addEventListener(
    "click",
    () => {

      currentLanguage =
        currentLanguage === "en"
          ? "ar"
          : "en";

      updateLanguage();

    }
  );


  updateLanguage();

}


/* =========================
   VIDEO MODAL EVENTS
========================= */

function initVideoModal() {

  const close =
    document.getElementById(
      "videoClose"
    );

  const modal =
    document.getElementById(
      "videoModal"
    );


  if (close) {

    close.addEventListener(
      "click",
      closeVideo
    );

  }


  if (modal) {

    modal.addEventListener(
      "click",
      event => {

        if (
          event.target === modal
        ) {
          closeVideo();
        }

      }
    );

  }


  document.addEventListener(
    "keydown",
    event => {

      if (
        event.key === "Escape"
      ) {
        closeVideo();
      }

    }
  );

}


/* =========================
   FOOTER YEAR
========================= */

function updateYear() {

  const year =
    document.getElementById("year");

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }

}


/* =========================
   INIT
========================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initLanguage();

    initVideoModal();

    updateYear();

  }
);
