/* =========================================
   PARKOUR X ACADEMY
   SCRIPT
========================================= */


/* =========================================
   COURSE DATA
========================================= */

const lessons = [

  /* -----------------------------------------
     LEVEL 1
  ----------------------------------------- */

  {
    level: 1,

    title: {
      en: "BEGINNERS",
      ar: "المبتدئين"
    },

    moves: [

      {
        en: "Balance",
        ar: "التوازن",
        video: "https://youtube.com/shorts/6aFpoFo23PA"
      },

      {
        en: "Roll",
        ar: "الدحرجة",
        video: "https://youtube.com/shorts/M9axAOpLjsc"
      },

      {
        en: "Precision",
        ar: "الدقة",
        video: "https://youtube.com/shorts/IOS7qZsFGJ0"
      },

      {
        en: "Landing",
        ar: "الهبوط",
        video: "https://youtube.com/shorts/8WPiCnvakbs"
      },

      {
        en: "Long Jump",
        ar: "القفزة الطويلة",
        video: "https://youtube.com/shorts/mpjLNNi4iUk"
      }

    ]
  },


  /* -----------------------------------------
     LEVEL 2
  ----------------------------------------- */

  {
    level: 2,

    title: {
      en: "BASIC MOVES",
      ar: "الحركات الأساسية"
    },

    moves: [

      {
        en: "Crane",
        ar: "كرين",
        video: "https://youtube.com/shorts/lhR_rudTPE4"
      },

      {
        en: "Safety Vault",
        ar: "Safety Vault",
        video: "https://youtube.com/shorts/v9V71PVYjJ0"
      },

      {
        en: "Reverse Safety",
        ar: "Reverse Safety",
        video: "https://youtube.com/shorts/abQOOWzJSVc"
      },

      {
        en: "Speed Vault",
        ar: "Speed Vault",
        video: "https://youtube.com/shorts/_IATk3dpSfU"
      },

      {
        en: "Lazy Vault",
        ar: "Lazy Vault",
        video: "https://youtube.com/shorts/JLbuT9FU6lI"
      },

      {
        en: "Thief Vault",
        ar: "Thief Vault",
        video: "https://youtube.com/shorts/1ND7el_msvM"
      },

      {
        en: "Monkey Vault",
        ar: "Monkey Vault",
        video: "https://youtube.com/shorts/ktSlnQzloLU"
      },

      {
        en: "360 Vault",
        ar: "360 Vault",
        video: "https://youtube.com/shorts/Tu14vq5gmTA"
      },

      {
        en: "Dash Vault",
        ar: "Dash Vault",
        video: "https://youtube.com/shorts/PeDeqIttPho"
      },

      {
        en: "Cat Leap",
        ar: "Cat Leap",
        video: "https://youtube.com/shorts/y-Ins4dcNDk"
      }

    ]
  },


  /* -----------------------------------------
     LEVEL 3
  ----------------------------------------- */

  {
    level: 3,

    title: {
      en: "ADVANCED MOVES",
      ar: "الحركات المتقدمة"
    },

    moves: [

      {
        en: "Tic Tac",
        ar: "Tic Tac",
        video: "https://youtube.com/shorts/tX37Ugu_L_o"
      },

      {
        en: "Wall Run",
        ar: "Wall Run",
        video: "https://youtube.com/shorts/XjoqFhTUO74"
      },

      {
        en: "Underbar",
        ar: "Underbar",
        video: "https://youtube.com/shorts/0SejUtKqTdU"
      },

      {
        en: "Turn Vault",
        ar: "Turn Vault",
        video: "https://youtube.com/shorts/Tc7WZpXNCTo"
      },

      {
        en: "Kong to Dive Roll",
        ar: "Kong to Dive Roll",
        video: "https://youtube.com/shorts/6ZE5YEDIEaU"
      },

      {
        en: "Kong Precision",
        ar: "Kong Precision",
        video: "https://youtube.com/shorts/VWRBXT8dXYc"
      },

      {
        en: "Double Kong",
        ar: "Double Kong",
        video: "https://youtube.com/shorts/c15g05If_-w"
      },

      {
        en: "Palm Spin",
        ar: "Palm Spin",
        video: "https://youtube.com/shorts/B38mbEB0kq4"
      },

      {
        en: "Wall Spin",
        ar: "Wall Spin",
        video: "https://youtube.com/shorts/JOrAPBj1iL0"
      }

    ]
  },


  /* -----------------------------------------
     LEVEL 4
  ----------------------------------------- */

  {
    level: 4,

    title: {
      en: "AERIAL MOVES",
      ar: "الحركات الهوائية"
    },

    moves: [

      {
        en: "Backflip",
        ar: "Backflip",
        video: "https://youtube.com/shorts/UanAXX9JgDg"
      },

      {
        en: "Frontflip",
        ar: "Frontflip",
        video: "https://youtube.com/shorts/jW_Y_8zKnBA"
      },

      {
        en: "Side Flip",
        ar: "Side Flip",
        video: "https://youtube.com/shorts/G0BJmVJPfDg"
      }

    ]
  }

];


/* =========================================
   CURRENT LANGUAGE
========================================= */

let currentLanguage =
  localStorage.getItem("parkourXLanguage") || "en";


/* =========================================
   YOUTUBE ID
========================================= */

function getYouTubeId(url) {

  const match =
    url.match(/shorts\/([^?&]+)/i);

  return match ? match[1] : "";
}


/* =========================================
   GET TEXT
========================================= */

function getText(textObject) {

  return textObject[currentLanguage] ||
         textObject.en;
}


/* =========================================
   RENDER COURSE
========================================= */

function renderLessons() {

  const container =
    document.getElementById("lessonsContainer");

  if (!container) return;

  container.innerHTML = "";


  lessons.forEach(level => {

    const levelSection =
      document.createElement("div");

    levelSection.className =
      `course-level level-${level.level}`;


    levelSection.innerHTML = `

      <div class="level-heading">

        <span class="level-number">
          ${
            currentLanguage === "ar"
              ? `المستوى ${level.level}`
              : `LEVEL ${level.level}`
          }
        </span>

        <h3>
          ${getText(level.title)}
        </h3>

      </div>

      <div class="lessons-grid"></div>

    `;


    const grid =
      levelSection.querySelector(".lessons-grid");


    level.moves.forEach((move, index) => {

      const videoId =
        getYouTubeId(move.video);

      const title =
        getText(move);

      const card =
        document.createElement("div");

      card.className =
        "lesson-card";


      card.innerHTML = `

        <div class="lesson-name">

          <span>
            ${String(index + 1).padStart(2, "0")}
          </span>

          <strong>
            ${title}
          </strong>

        </div>


        <button
          class="lesson-thumb"
          type="button"
          data-video-id="${videoId}"
          data-title-en="${move.en}"
          data-title-ar="${move.ar}"
          aria-label="${move.en}"
        >

          <img
            src="https://i.ytimg.com/vi/${videoId}/hqdefault.jpg"
            alt="${title}"
            loading="lazy"
          >

          <span class="video-play">
            ▶
          </span>

        </button>


        <button
          class="watch-button"
          type="button"
          data-video-id="${videoId}"
          data-title-en="${move.en}"
          data-title-ar="${move.ar}"
        >
          ${
            currentLanguage === "ar"
              ? "شاهد الفيديو"
              : "WATCH VIDEO"
          }
        </button>

      `;


      grid.appendChild(card);

    });


    container.appendChild(levelSection);

  });


  addVideoListeners();
}


/* =========================================
   VIDEO BUTTONS
========================================= */

function addVideoListeners() {

  const buttons =
    document.querySelectorAll(
      ".lesson-thumb, .watch-button"
    );


  buttons.forEach(button => {

    button.addEventListener("click", () => {

      const videoId =
        button.dataset.videoId;

      const title =
        currentLanguage === "ar"
          ? button.dataset.titleAr
          : button.dataset.titleEn;

      openVideo(
        videoId,
        title
      );

    });

  });

}


/* =========================================
   OPEN VIDEO
========================================= */

function openVideo(
  videoId,
  title
) {

  const modal =
    document.getElementById("videoModal");

  const frame =
    document.getElementById("videoFrame");

  const modalTitle =
    document.getElementById("videoModalTitle");


  if (!modal || !frame) return;


  modalTitle.textContent =
    title;


  frame.src =
    `https://www.youtube.com/embed/${videoId}?autoplay=1&rel=0&modestbranding=1`;


  modal.classList.add("active");

  modal.setAttribute(
    "aria-hidden",
    "false"
  );

  document.body.classList.add(
    "modal-open"
  );

}


/* =========================================
   CLOSE VIDEO
========================================= */

function closeVideo() {

  const modal =
    document.getElementById("videoModal");

  const frame =
    document.getElementById("videoFrame");


  if (!modal || !frame) return;


  modal.classList.remove("active");

  modal.setAttribute(
    "aria-hidden",
    "true"
  );


  document.body.classList.remove(
    "modal-open"
  );


  // Stop video
  frame.src = "";
}


/* =========================================
   LANGUAGE
========================================= */

function updateLanguage() {

  const isArabic =
    currentLanguage === "ar";


  /*
    Change HTML direction
  */

  document.documentElement.lang =
    currentLanguage;

  document.documentElement.dir =
    isArabic
      ? "rtl"
      : "ltr";


  /*
    Update every element
    that has data-en / data-ar
  */

  document
    .querySelectorAll("[data-en]")
    .forEach(element => {

      const text =
        isArabic
          ? element.dataset.ar
          : element.dataset.en;


      if (text !== undefined) {

        element.textContent =
          text;

      }

    });


  /*
    Update language button
  */

  const languageButton =
    document.getElementById(
      "languageToggle"
    );


  if (languageButton) {

    languageButton.textContent =
      isArabic
        ? "EN"
        : "AR";

  }


  /*
    Render course again
    because lesson names also change
  */

  renderLessons();


  /*
    Save language
  */

  localStorage.setItem(
    "parkourXLanguage",
    currentLanguage
  );

}


/* =========================================
   LANGUAGE BUTTON
========================================= */

function initLanguage() {

  const languageButton =
    document.getElementById(
      "languageToggle"
    );


  if (!languageButton) return;


  languageButton.addEventListener(
    "click",
    () => {

      currentLanguage =
        currentLanguage === "en"
          ? "ar"
          : "en";


      updateLanguage();

    }
  );

}


/* =========================================
   CLOSE MODAL
========================================= */

function initVideoModal() {

  const modal =
    document.getElementById("videoModal");

  const closeButton =
    document.getElementById("videoClose");


  if (closeButton) {

    closeButton.addEventListener(
      "click",
      closeVideo
    );

  }


  /*
    Click outside video
  */

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


  /*
    ESC key
  */

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


/* =========================================
   CURRENT YEAR
========================================= */

function updateYear() {

  const year =
    document.getElementById("year");

  if (year) {

    year.textContent =
      new Date().getFullYear();

  }

}


/* =========================================
   START
========================================= */

document.addEventListener(
  "DOMContentLoaded",
  () => {

    initLanguage();

    initVideoModal();

    updateYear();

    updateLanguage();

  }
);
