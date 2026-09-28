const lessons = [

  {
    level: 1,
    name: "BEGINNERS",
    color: "red",
    sub: "Build Your Foundation",

    items: [

      [
        "01",
        "Balance",
        "https://youtube.com/shorts/6aFpoFo23PA"
      ],

      [
        "02",
        "Roll",
        "https://youtube.com/shorts/M9axAOpLjsc"
      ],

      [
        "03",
        "Precision",
        "https://youtube.com/shorts/IOS7qZsFGJ0"
      ],

      [
        "04",
        "Landing",
        "https://youtube.com/shorts/8WPiCnvakbs"
      ],

      [
        "05",
        "Long Jump",
        "https://youtube.com/shorts/mpjLNNi4iUk"
      ]

    ]
  },


  {
    level: 2,
    name: "BASIC MOVES",
    color: "gold",
    sub: "Master the Fundamentals",

    items: [

      [
        "06",
        "Crane",
        "https://youtube.com/shorts/lhR_rudTPE4"
      ],

      [
        "07",
        "Safety Vault",
        "https://youtube.com/shorts/v9V71PVYjJ0"
      ],

      [
        "08",
        "Reverse Safety",
        "https://youtube.com/shorts/abQOOWzJSVc"
      ],

      [
        "09",
        "Speed Vault",
        "https://youtube.com/shorts/_IATk3dpSfU"
      ],

      [
        "10",
        "Lazy Vault",
        "https://youtube.com/shorts/JLbuT9FU6lI"
      ],

      [
        "11",
        "Thief Vault",
        "https://youtube.com/shorts/1ND7el_msvM"
      ],

      [
        "12",
        "Monkey Vault",
        "https://youtube.com/shorts/ktSlnQzloLU"
      ],

      [
        "13",
        "360 Vault",
        "https://youtube.com/shorts/Tu14vq5gmTA"
      ],

      [
        "14",
        "Dash Vault",
        "https://youtube.com/shorts/PeDeqIttPho"
      ],

      [
        "15",
        "Cat Leap",
        "https://youtube.com/shorts/y-Ins4dcNDk"
      ]

    ]
  },


  {
    level: 3,
    name: "ADVANCED MOVES",
    color: "green",
    sub: "Build Flow & Control",

    items: [

      [
        "16",
        "Tic Tac",
        "https://youtube.com/shorts/tX37Ugu_L_o"
      ],

      [
        "17",
        "Wall Run",
        "https://youtube.com/shorts/XjoqFhTUO74"
      ],

      [
        "18",
        "Underbar",
        "https://youtube.com/shorts/0SejUtKqTdU"
      ],

      [
        "19",
        "Turn Vault",
        "https://youtube.com/shorts/Tc7WZpXNCTo"
      ],

      [
        "20",
        "Kong to Dive Roll",
        "https://youtube.com/shorts/6ZE5YEDIEaU"
      ],

      [
        "21",
        "Kong Precision",
        "https://youtube.com/shorts/VWRBXT8dXYc"
      ],

      [
        "22",
        "Double Kong",
        "https://youtube.com/shorts/c15g05If_-w"
      ],

      [
        "23",
        "Palm Spin",
        "https://youtube.com/shorts/B38mbEB0kq4"
      ],

      [
        "24",
        "Wall Spin",
        "https://youtube.com/shorts/JOrAPBj1iL0"
      ]

    ]
  },


  {
    level: 4,
    name: "AERIAL MOVES",
    color: "white",
    sub: "Aerial Control",

    items: [

      [
        "25",
        "Backflip",
        "https://youtube.com/shorts/UanAXX9JgDg"
      ],

      [
        "26",
        "Frontflip",
        "https://youtube.com/shorts/jW_Y_8zKnBA"
      ],

      [
        "27",
        "Side Flip",
        "https://youtube.com/shorts/G0BJmVJPfDg"
      ]

    ]
  }

];



/* =========================
   GET YOUTUBE VIDEO ID
========================= */

function getYouTubeId(url) {

  const match =
    url.match(
      /shorts\/([^?&]+)/i
    );

  if (match) {

    return match[1];

  }

  return "";

}



/* =========================
   RENDER LESSONS
========================= */

function renderLessons() {

  const root =
    document.getElementById("levels");


  root.innerHTML =
    lessons.map(level => `

      <div class="level ${level.color}">

        <div class="level-title">

          <span class="level-dot"></span>

          <div>

            <h3>
              LEVEL ${level.level}
              — ${level.name}
            </h3>

            <div class="level-sub">
              ${level.sub}
            </div>

          </div>

        </div>


        <div class="lesson-grid">

          ${level.items.map(item => {

            const videoId =
              getYouTubeId(item[2]);


            const thumbnail =
              `https://i.ytimg.com/vi/${videoId}/hqdefault.jpg`;


            return `

              <article class="lesson">

                <a
                  href="${item[2]}"
                  target="_blank"
                  rel="noopener"
                  class="lesson-thumb"
                >

                  <img
                    src="${thumbnail}"
                    alt="${item[1]} Parkour tutorial"
                    loading="lazy"
                  >

                  <span class="video-play">
                    ▶
                  </span>

                </a>


                <div class="lesson-info">

                  <div class="num">
                    ${item[0]}
                  </div>


                  <h4>
                    ${item[1]}
                  </h4>


                  <a
                    href="${item[2]}"
                    target="_blank"
                    rel="noopener"
                    class="lesson-watch"
                  >

                    ▶ WATCH VIDEO

                  </a>

                </div>

              </article>

            `;

          }).join("")}

        </div>

      </div>

    `).join("");

}



/* =========================
   TRANSLATIONS
========================= */

const translations = {

  en: {

    "nav.about":
      "About",

    "nav.training":
      "Training",

    "nav.course":
      "Online Course",

    "nav.book":
      "Book",

    "nav.wear":
      "Sportswear",

    "nav.contact":
      "Contact",


    "hero.title":
      "TRAIN. MOVE. EXPLORE. REPEAT.",

    "hero.text":
      "Professional parkour training, education and a complete learning path from beginner to advanced.",

    "hero.cta":
      "START TRAINING",

    "hero.about":
      "MEET AMR SAMY",


    "about.title":
      "Amr Samy",

    "about.text":
      "Amr Samy is a professional parkour athlete and one of the early contributors to the development of parkour in Egypt. He started training in 2005 and officially joined the first Egyptian team on 31/03/2008.",

    "about.text2":
      "Today, Parkour X brings together training, education, courses for athletes and coaches, a parkour book, and sportswear for the parkour community.",

    "about.stat1":
      "Training Started",

    "about.stat2":
      "First Team — Official Start",

    "about.stat3":
      "Academy & Community",


    "training.title":
      "Build Real Parkour Skills",

    "training.c1":
      "Professional Training",

    "training.p1":
      "Structured parkour training for athletes who want to develop movement, control and confidence.",

    "training.c2":
      "Athlete & Coach Courses",

    "training.p2":
      "Online and in-person educational courses designed for athletes and coaches.",

    "training.c3":
      "Parkour Community",

    "training.p3":
      "A platform connecting training, knowledge, media and parkour culture.",


    "course.title":
      "From Beginner to Advanced",

    "course.text":
      "A free video series that builds your foundation step by step and progresses through basic, advanced and aerial movements.",

    "course.promo":
      "WATCH PROMO",

    "course.promoTitle":
      "Official Course Promo",

    "course.promoText":
      "Start here and discover the Parkour X training journey.",


    "book.title":
      "Parkour X Book",

    "book.text":
      "A dedicated parkour book project created to document knowledge and help grow parkour education in Egypt and the Arab world.",


    "wear.title":
      "Parkour X Sportswear",

    "wear.text":
      "Sportswear created with parkour athletes and movement in mind. The collection will be presented here as it launches.",


    "contact.title":
      "Train With Parkour X",

    "contact.text":
      "For training, courses, collaborations and bookings, get in touch.",

    "contact.call":
      "Call"

  },


  ar: {

    "nav.about":
      "عن الأكاديمية",

    "nav.training":
      "التدريب",

    "nav.course":
      "الكورس الأونلاين",

    "nav.book":
      "الكتاب",

    "nav.wear":
      "الملابس",

    "nav.contact":
      "تواصل معنا",


    "hero.title":
      "اتدرّب • اتحرك • استكشف • كرر",

    "hero.text":
      "تدريب باركور احترافي، تعليم وكورس متكامل يبدأ من المبتدئين ويتدرج حتى المستوى المتقدم.",

    "hero.cta":
      "ابدأ التدريب",

    "hero.about":
      "تعرف على عمرو سامي",


    "about.title":
      "عمرو سامي",

    "about.text":
      "عمرو سامي لاعب باركور محترف ومن أوائل المساهمين في تطوير رياضة الباركور في مصر. بدأ التدريب عام 2005 وانضم رسميًا إلى أول فريق مصري في 31/03/2008.",

    "about.text2":
      "اليوم تجمع Parkour X بين التدريب، التعليم، الكورسات للاعبين والمدربين، كتاب للباركور، وبراند ملابس رياضية لمجتمع الباركور.",

    "about.stat1":
      "بداية التدريب",

    "about.stat2":
      "أول فريق — البداية الرسمية",

    "about.stat3":
      "أكاديمية ومجتمع",


    "training.title":
      "ابني مهارات باركور حقيقية",

    "training.c1":
      "تدريب باركور احترافي",

    "training.p1":
      "تدريب منظم للاعبين الراغبين في تطوير الحركة والتحكم والثقة.",

    "training.c2":
      "كورسات للاعبين والمدربين",

    "training.p2":
      "كورسات تعليمية أونلاين وعلى أرض الواقع للاعبين والمدربين.",

    "training.c3":
      "مجتمع الباركور",

    "training.p3":
      "منصة تجمع التدريب والمعرفة والمحتوى وثقافة الباركور.",


    "course.title":
      "من المبتدئ إلى المتقدم",

    "course.text":
      "سلسلة فيديوهات مجانية تبني الأساس خطوة بخطوة ثم تنتقل إلى الحركات الأساسية والمتقدمة والهوائية.",

    "course.promo":
      "شاهد البرومو",

    "course.promoTitle":
      "برومو الكورس",

    "course.promoText":
      "ابدأ من هنا واكتشف رحلة التدريب مع Parkour X.",


    "book.title":
      "كتاب Parkour X",

    "book.text":
      "مشروع كتاب متخصص في الباركور لتوثيق المعرفة والمساهمة في تطوير تعليم الباركور في مصر والوطن العربي.",


    "wear.title":
      "ملابس Parkour X الرياضية",

    "wear.text":
      "ملابس رياضية مصممة مع وضع لاعبي الباركور والحركة في الاعتبار. سيتم عرض المجموعة هنا عند إطلاقها.",


    "contact.title":
      "اتدرّب مع Parkour X",

    "contact.text":
      "للتدريب والكورسات والتعاون والحجوزات، تواصل معنا.",

    "contact.call":
      "اتصال"

  }

};



/* =========================
   LANGUAGE
========================= */

let lang = "en";


function setLanguage() {

  document.documentElement.lang =
    lang;


  document.body.classList.toggle(
    "rtl",
    lang === "ar"
  );


  document.getElementById(
    "langBtn"
  ).textContent =
    lang === "en"
      ? "العربية"
      : "English";


  document
    .querySelectorAll("[data-i18n]")
    .forEach(element => {

      const key =
        element.dataset.i18n;


      if (
        translations[lang][key]
      ) {

        element.textContent =
          translations[lang][key];

      }

    });

}



/* =========================
   YEAR
========================= */

document.getElementById(
  "year"
).textContent =
  new Date().getFullYear();



/* =========================
   START
========================= */

renderLessons();

setLanguage();
