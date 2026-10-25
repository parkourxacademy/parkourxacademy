
const levels = {
  1: {
    title: "LEVEL 01 — THE BEGINNER",
    lessons: [
      ["Lesson 1", "6aFpoFo23PA"],
      ["Lesson 2", "M9axAOpLjsc"],
      ["Lesson 3", "8WPiCnvakbs"],
      ["Lesson 4", "IOS7qZsFGJ0"],
      ["Lesson 5", "mpjLNNi4iUk"]
    ]
  },
  2: {
    title: "LEVEL 02 — THE EXPLORER",
    lessons: [
      ["Lesson 1", "lhR_rudTPE4"],
      ["Lesson 2", "v9V71PVYjJ0"],
      ["Lesson 3", "abQOOWzJSVc"],
      ["Lesson 4", "1ND7el_msvM"],
      ["Lesson 5", "JLbuT9FU6lI"],
      ["Lesson 6", "Tu14vq5gmTA"],
      ["Lesson 7", "tX37Ugu_L_o"],
      ["Lesson 8", "ktSlnQzloLU"],
      ["Lesson 9", "_IATk3dpSfU"],
      ["Lesson 10", "PeDeqIttPho"]
    ]
  },
  3: {
    title: "LEVEL 03 — THE ATHLETE",
    lessons: [
      ["Lesson 1", "y-Ins4dcNDk"],
      ["Lesson 2", "XjoqFhTUO74"],
      ["Lesson 3", "Tc7WZpXNCTo"],
      ["Lesson 4", "0SejUtKqTdU"],
      ["Lesson 5", "6ZE5YEDIEaU"],
      ["Lesson 6", "VWRBXT8dXYc"],
      ["Lesson 7", "c15g05If_-w"],
      ["Lesson 8", "JOrAPBj1iL0"],
      ["Lesson 9", "UanAXX9JgDg"]
    ]
  },
  4: {
    title: "LEVEL 04 — THE ELITE",
    lessons: [
      ["Lesson 1", "B38mbEB0kq4"],
      ["Lesson 2", "jW_Y_8zKnBA"],
      ["Lesson 3", "G0BJmVJPfDg"]
    ]
  }
};

const translations = {
  en: {
    navHome:"Home", navTraining:"Training", navAbout:"About",
    navFounder:"Founder", navClothing:"Clothing", navProgress:"Progress",
    navCommunity:"Community", signIn:"Sign In",
    heroEyebrow:"THE MOVEMENT IS YOURS",
    heroTitle:"TRAIN BEYOND<br>YOUR LIMITS.",
    heroText:"Build strength. Master movement. Challenge yourself. Start your parkour journey with PARKOUR X Academy.",
    startTraining:"START TRAINING ↗", discover:"DISCOVER OUR ACADEMY",
    statLevels:"TRAINING LEVELS", statVideos:"TRAINING VIDEOS",
    statSince:"OUR JOURNEY BEGAN", journey:"YOUR JOURNEY",
    chooseLevel:"CHOOSE YOUR <em>LEVEL.</em>",
    trainingIntro:"Learn the basics. Build control. Keep progressing.",
    level1:"LEVEL 01 · FOUNDATION", level2:"LEVEL 02 · DEVELOPMENT",
    level3:"LEVEL 03 · PERFORMANCE", level4:"LEVEL 04 · ADVANCED",
    beginner:"THE BEGINNER", explorer:"THE EXPLORER",
    athlete:"THE ATHLETE", elite:"THE ELITE",
    beginnerText:"Build your foundation with essential movements and safe landing techniques.",
    explorerText:"Improve coordination, precision, balance and movement confidence.",
    athleteText:"Challenge your skills and develop smoother movement combinations.",
    eliteText:"Develop advanced skills with preparation and proper progression.",
    exploreLevel:"EXPLORE LEVEL ↗", close:"CLOSE ✕",
    aboutKicker:"ABOUT US", aboutTitle:"MORE THAN A SPORT.<br><em>IT'S A LIFESTYLE.</em>",
    aboutText:"PARKOUR X Academy is built for people who want to move better, become stronger and develop confidence through parkour. We promote safe, structured training for beginners and advanced athletes.",
    founderKicker:"MEET THE FOUNDER",
    founderTitle:"BUILT ON PASSION.<br><em>DRIVEN BY MOVEMENT.</em>",
    founderRole:"FOUNDER · PARKOUR ATHLETE · COACH",
    founderText:"Amr Samy has trained in parkour since 2005 and helped build the Egyptian parkour scene. PARKOUR X Academy reflects his passion for movement, discipline, athletic development and inspiring the next generation.",
    meetTeam:"FOLLOW THE JOURNEY ↗",
    clothingKicker:"PARKOUR X ORIGINALS",
    clothingTitle:"MOVE IN <em>STYLE.</em>",
    clothingText:"Street-inspired clothing made for movement, comfort and everyday training.",
    shopNow:"EXPLORE THE COLLECTION ↗",
    productNote:"Concept previews — replace with real product photos and ordering details when available.",
    progressKicker:"TRACK YOUR JOURNEY",
    progressTitle:"YOUR PROGRESS.<br><em>YOUR STORY.</em>",
    progressText:"Complete lessons, collect points and build your own training routine.",
    trainingStats:"YOUR TRAINING STATS", lessonsDone:"LESSONS DONE",
    xpPoints:"XP POINTS", overallProgress:"OVERALL PROGRESS",
    resetProgress:"RESET MY PROGRESS",
    challengeKicker:"TAKE THE CHALLENGE",
    challengeTitle:"SHOW UP.<br><em>LEVEL UP.</em>",
    challengeText:"Choose one skill to practise this week. Train consistently, focus on technique and celebrate your progress.",
    acceptChallenge:"ACCEPT THE CHALLENGE ↗",
    communityKicker:"BUILT BY MOVEMENT",
    communityTitle:"ONE COMMUNITY.<br><em>NO LIMITS.</em>",
    communityText:"Follow the team, share your journey and inspire others to keep moving forward.",
    joinCommunity:"JOIN OUR COMMUNITY ↗",
    joinKicker:"JOIN THE MOVEMENT",
    joinTitle:"YOUR JOURNEY <em>STARTS HERE.</em>",
    accountNote:"Online accounts need your Supabase project to be configured first.",
    emailLabel:"EMAIL", passwordLabel:"PASSWORD",
    createAccount:"CREATE ACCOUNT",
    markDone:"MARK AS COMPLETED", undoDone:"✓ COMPLETED — UNDO",
    resetConfirm:"Reset all completed lessons and XP points on this device?",
    resetDone:"Your progress has been reset.",
    challengeAccepted:"CHALLENGE ACCEPTED! Choose a lesson, practise safely and mark it complete when you finish.",
    enterCredentials:"Please enter your email and password.",
    passwordShort:"Password must be at least 6 characters.",
    noSupabase:"Online accounts are not configured yet. Add your Supabase URL and publishable key first.",
    waiting:"Please wait...",
    signupSent:"Account request submitted. Check your email if confirmation is required.",
    signedIn:"Signed in successfully.",
    authError:"Authentication failed."
  },
  ar: {
    navHome:"الرئيسية", navTraining:"التدريب", navAbout:"عن الأكاديمية",
    navFounder:"المؤسس", navClothing:"الملابس", navProgress:"تقدمي",
    navCommunity:"المجتمع", signIn:"تسجيل الدخول",
    heroEyebrow:"الحركة بإيدك",
    heroTitle:"اتحدى<br>حدودك.",
    heroText:"ابني قوتك، وطوّر مهاراتك، واتحدى نفسك. ابدأ رحلتك في الباركور مع أكاديمية PARKOUR X.",
    startTraining:"ابدأ التدريب ↗", discover:"اكتشف الأكاديمية",
    statLevels:"مستويات التدريب", statVideos:"فيديوهات التدريب",
    statSince:"بداية رحلتنا", journey:"رحلتك",
    chooseLevel:"اختار <em>مستواك.</em>",
    trainingIntro:"اتعلم الأساسيات، وطوّر تحكمك، واستمر في التقدم.",
    level1:"المستوى 01 · التأسيس", level2:"المستوى 02 · التطوير",
    level3:"المستوى 03 · الأداء", level4:"المستوى 04 · المتقدم",
    beginner:"المبتدئ", explorer:"المستكشف",
    athlete:"الرياضي", elite:"المحترف",
    beginnerText:"ابدأ بالمهارات الأساسية وتعلّم الهبوط الآمن والحركة الصحيحة.",
    explorerText:"طوّر التناسق والدقة والتوازن والثقة في الحركة.",
    athleteText:"اختبر مهاراتك وطوّر قدرتك على دمج الحركات بسلاسة.",
    eliteText:"اشتغل على المهارات المتقدمة بالتجهيز والتدرج الصحيح.",
    exploreLevel:"استكشف المستوى ↗", close:"إغلاق ✕",
    aboutKicker:"عن الأكاديمية",
    aboutTitle:"أكتر من رياضة.<br><em>ده أسلوب حياة.</em>",
    aboutText:"أكاديمية PARKOUR X لكل شخص عايز يتحرك بشكل أفضل، ويبقى أقوى، ويكتسب الثقة من خلال الباركور. بنشجع التدريب الآمن والمنظم للمبتدئين والرياضيين المتقدمين.",
    founderKicker:"اتعرف على المؤسس",
    founderTitle:"شغف من البداية.<br><em>والحركة هي الطريق.</em>",
    founderRole:"مؤسس · لاعب باركور · مدرب",
    founderText:"عمرو سامي بيتدرب على الباركور من سنة 2005، وشارك في بناء مشهد الباركور المصري. أكاديمية PARKOUR X هي انعكاس لشغفه بالحركة والانضباط والتطوير الرياضي وإلهام الجيل الجديد.",
    meetTeam:"تابع رحلتنا ↗",
    clothingKicker:"مجموعة PARKOUR X",
    clothingTitle:"اتحرك <em>بستايل.</em>",
    clothingText:"ملابس مستوحاة من ثقافة الشارع، مصممة للراحة والحركة والتدريب اليومي.",
    shopNow:"اكتشف المجموعة ↗",
    productNote:"دي نماذج تصميم مبدئية — استبدلها بصور المنتجات الحقيقية وبيانات الطلب عند توفرها.",
    progressKicker:"تابع رحلتك",
    progressTitle:"تقدمك.<br><em>قصتك.</em>",
    progressText:"كمّل الدروس، واجمع النقاط، وابني روتين التدريب الخاص بيك.",
    trainingStats:"إحصائيات تدريبك", lessonsDone:"دروس مكتملة",
    xpPoints:"نقاط الخبرة", overallProgress:"التقدم الإجمالي",
    resetProgress:"إعادة ضبط التقدم",
    challengeKicker:"اتحدى نفسك",
    challengeTitle:"التزم.<br><em>واتطور.</em>",
    challengeText:"اختار مهارة تتمرن عليها الأسبوع ده. استمر في التدريب، وركز على الأسلوب الصحيح، واحتفل بتقدمك.",
    acceptChallenge:"اقبل التحدي ↗",
    communityKicker:"مجتمع بيجمعنا",
    communityTitle:"مجتمع واحد.<br><em>بلا حدود.</em>",
    communityText:"تابع الفريق، وشارك رحلتك، وشجّع غيرك إنه يستمر ويتطور.",
    joinCommunity:"انضم لمجتمعنا ↗",
    joinKicker:"انضم لرحلة الحركة",
    joinTitle:"رحلتك <em>بتبدأ هنا.</em>",
    accountNote:"لازم نضبط إعدادات Supabase الأول علشان الحسابات الأونلاين تشتغل.",
    emailLabel:"البريد الإلكتروني", passwordLabel:"كلمة المرور",
    createAccount:"إنشاء حساب",
    markDone:"علّم الدرس كمكتمل", undoDone:"✓ مكتمل — تراجع",
    resetConfirm:"متأكد إنك عايز تمسح الدروس المكتملة والنقاط من الجهاز ده؟",
    resetDone:"تمت إعادة ضبط التقدم.",
    challengeAccepted:"قبلت التحدي! اختار درس، واتمرن بأمان، وعلّمه كمكتمل لما تخلص.",
    enterCredentials:"من فضلك اكتب البريد الإلكتروني وكلمة المرور.",
    passwordShort:"كلمة المرور لازم تكون 6 أحرف على الأقل.",
    noSupabase:"الحسابات الأونلاين لسه مش متفعلة. لازم تضيف رابط Supabase ومفتاح النشر الأول.",
    waiting:"جاري التنفيذ...",
    signupSent:"تم إرسال طلب إنشاء الحساب. راجع بريدك لو مطلوب تأكيد الحساب.",
    signedIn:"تم تسجيل الدخول بنجاح.",
    authError:"تعذر تسجيل الدخول."
  }
};

let language = "en";
const storageKey = "parkourx_progress_v3";
const totalLessons = Object.values(levels).reduce((n, level) => n + level.lessons.length, 0);

function t(key) {
  return translations[language][key] || translations.en[key] || key;
}

function loadProgress() {
  try {
    const data = JSON.parse(localStorage.getItem(storageKey) || "[]");
    return Array.isArray(data) ? data : [];
  } catch {
    return [];
  }
}

let completed = loadProgress();

function saveProgress() {
  try {
    localStorage.setItem(storageKey, JSON.stringify(completed));
  } catch (error) {
    console.warn("Local progress could not be saved.", error);
  }
}

function applyTranslations() {
  document.documentElement.lang = language;
  document.documentElement.dir = language === "ar" ? "rtl" : "ltr";
  document.body.classList.toggle("arabic", language === "ar");

  document.querySelectorAll("[data-i18n]").forEach(element => {
    const value = t(element.dataset.i18n);
    element.innerHTML = value;
  });

  document.getElementById("languageBtn").textContent =
    language === "en" ? "عربي" : "English";

  document.querySelectorAll(".level-btn").forEach(button => {
    button.textContent = t("exploreLevel");
  });

  renderProgress();

  const openLevel = document.getElementById("lessonArea").dataset.level;
  if (openLevel && !document.getElementById("lessonArea").hidden) {
    renderLessons(Number(openLevel), false);
  }
}

function renderLessons(levelNumber, scroll = true) {
  const level = levels[levelNumber];
  if (!level) return;

  const area = document.getElementById("lessonArea");
  area.dataset.level = String(levelNumber);
  document.getElementById("lessonTitle").textContent =
    language === "ar"
      ? ["", "المستوى 01 — المبتدئ", "المستوى 02 — المستكشف", "المستوى 03 — الرياضي", "المستوى 04 — المحترف"][levelNumber]
      : level.title;

  const grid = document.getElementById("lessonGrid");
  grid.replaceChildren();

  level.lessons.forEach(([name, videoId], index) => {
    const key = `${levelNumber}-${index}`;
    const done = completed.includes(key);

    const card = document.createElement("article");
    card.className = "lesson-card";

    const frame = document.createElement("div");
    frame.className = "video-frame";

    const iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube-nocookie.com/embed/${videoId}`;
    iframe.title = `${name} - PARKOUR X Academy`;
    iframe.loading = "lazy";
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
    iframe.allowFullscreen = true;
    frame.appendChild(iframe);

    const info = document.createElement("div");
    info.className = "lesson-info";

    const heading = document.createElement("h4");
    heading.textContent = `${String(index + 1).padStart(2, "0")} / ${
      language === "ar" ? `الدرس ${index + 1}` : name
    }`;

    const button = document.createElement("button");
    button.className = `complete-btn${done ? " completed" : ""}`;
    button.textContent = done ? t("undoDone") : t("markDone");
    button.type = "button";

    button.addEventListener("click", () => {
      if (completed.includes(key)) {
        completed = completed.filter(item => item !== key);
      } else {
        completed.push(key);
      }
      saveProgress();
      renderProgress();
      renderLessons(levelNumber, false);
    });

    info.append(heading, button);
    card.append(frame, info);
    grid.appendChild(card);
  });

  area.hidden = false;
  if (scroll) area.scrollIntoView({ behavior: "smooth", block: "start" });
}

function renderProgress() {
  const count = completed.length;
  const percent = Math.round(count / totalLessons * 100);

  document.getElementById("completedCount").textContent = count;
  document.getElementById("pointsCount").textContent = count * 10;
  document.getElementById("progressPercent").textContent = `${percent}%`;
  document.getElementById("progressFill").style.width = `${percent}%`;
}

document.querySelectorAll(".level-btn").forEach(button => {
  button.addEventListener("click", () => renderLessons(Number(button.dataset.level)));
});

document.getElementById("closeLessons").addEventListener("click", () => {
  document.getElementById("lessonArea").hidden = true;
});

document.getElementById("languageBtn").addEventListener("click", () => {
  language = language === "en" ? "ar" : "en";
  applyTranslations();
});

document.getElementById("resetProgressBtn").addEventListener("click", () => {
  if (!window.confirm(t("resetConfirm"))) return;
  completed = [];
  saveProgress();
  renderProgress();

  const area = document.getElementById("lessonArea");
  if (!area.hidden && area.dataset.level) {
    renderLessons(Number(area.dataset.level), false);
  }

  document.getElementById("challengeMessage").textContent = t("resetDone");
});

document.getElementById("challengeBtn").addEventListener("click", () => {
  document.getElementById("challengeMessage").textContent = t("challengeAccepted");
});

document.getElementById("year").textContent = new Date().getFullYear();

const modal = document.getElementById("authModal");

document.getElementById("authBtn").addEventListener("click", () => {
  modal.hidden = false;
});
document.getElementById("closeAuth").addEventListener("click", () => {
  modal.hidden = true;
});
modal.addEventListener("click", event => {
  if (event.target === modal) modal.hidden = true;
});
document.addEventListener("keydown", event => {
  if (event.key === "Escape") modal.hidden = true;
});

async function authenticate(action) {
  const email = document.getElementById("authEmail").value.trim();
  const password = document.getElementById("authPassword").value;
  const message = document.getElementById("authMessage");

  if (!email || !password) {
    message.textContent = t("enterCredentials");
    return;
  }
  if (password.length < 6) {
    message.textContent = t("passwordShort");
    return;
  }

  const client = window.parkourSupabase;
  if (!client) {
    message.textContent = t("noSupabase");
    return;
  }

  message.textContent = t("waiting");

  try {
    const response = action === "signup"
      ? await client.auth.signUp({ email, password })
      : await client.auth.signInWithPassword({ email, password });

    if (response.error) throw response.error;
    message.textContent = action === "signup" ? t("signupSent") : t("signedIn");
  } catch (error) {
    message.textContent = error.message || t("authError");
  }
}

document.getElementById("signInBtn").addEventListener("click", () => authenticate("signin"));
document.getElementById("signUpBtn").addEventListener("click", () => authenticate("signup"));

applyTranslations();
