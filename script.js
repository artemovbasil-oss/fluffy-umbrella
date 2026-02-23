const ASSET = "https://basilarcana-assets.b-cdn.net/idea";

const stripPhotos = [
  `${ASSET}/visionnaire.png`,
  `${ASSET}/baxter.png`,
  `${ASSET}/molteni.png`,
  `${ASSET}/roberto.png`,
  `${ASSET}/ferre.png`,
  `${ASSET}/etro.png`
];

const brands = [
  {
    name: "Visionnaire",
    logo: `${ASSET}/logo-visionnaire-white.png`,
    photo: `${ASSET}/visionnaire.png`,
    text: "Итальянский meta-luxury бренд мебели и декора, который работает в формате total look и превращает интерьер в цельный дизайнерский образ.",
    note: "ID Gallery представляет Visionnaire в Казахстане на эксклюзивных условиях."
  },
  {
    name: "Baxter",
    logo: `${ASSET}/logo-baxter-white.png`,
    photo: `${ASSET}/baxter.png`,
    text: "Легендарная фабрика, превратившая натуральную кожу в искусство: брутальная эстетика, редкие материалы и коллекции от ведущих мировых дизайнеров.",
    note: "Idea Decor — эксклюзивный дистрибьютор Baxter в Алматы."
  },
  {
    name: "Molteni&C",
    logo: `${ASSET}/logo-molteni-white.png`,
    photo: `${ASSET}/molteni.png`,
    text: "Более 90 лет задает стандарты современной люксовой мебели: архитектурный дизайн, коллекции Heritage и безупречное качество исполнения.",
    note: "Idea Decor — лучшие условия на мебель Molteni&C в Казахстане."
  },
  {
    name: "Roberto Cavalli Home Interiors",
    logo: `${ASSET}/logo-roberto-white.png`,
    photo: `${ASSET}/roberto.png`,
    text: "Яркая интерьерная коллекция fashion-дома Roberto Cavalli: смелые фактуры, анималистические мотивы и флорентийское качество ручной работы.",
    note: "В Казахстане бренд доступен через Idea Decor по прямому контракту с фабрикой."
  },
  {
    name: "Gianfranco Ferré Home",
    logo: `${ASSET}/logo-ferre-white.png`,
    photo: `${ASSET}/ferre.png`,
    text: "Минималистичная итальянская эстетика с четкой геометрией, благородными материалами и респектабельным характером коллекций.",
    note: "Продукцию Gianfranco Ferré Home можно приобрести в Idea Decor."
  },
  {
    name: "ETRO Home Interiors",
    logo: `${ASSET}/logo-etro-white.png`,
    photo: `${ASSET}/etro.png`,
    text: "Эклектичный интерьерный стиль ETRO: фирменный пейсли, культурные мотивы и выразительные текстильные решения уровня haute interior.",
    note: "В Казахстане ETRO Home Interiors представлен через Idea Decor."
  },
  {
    name: "Bonaldo",
    logo: `${ASSET}/logo-bonaldo-white.png`,
    photo: `${ASSET}/bonaldo.png`,
    text: "Итальянский бренд с 90-летней историей: гармония дизайна и комфорта, широкий каталог и коллекции от международных звезд дизайна.",
    note: "Idea Decor представляет Bonaldo в Казахстане на эксклюзивных условиях."
  },
  {
    name: "Lalique",
    logo: `${ASSET}/logo-lalique-white.png`,
    photo: `${ASSET}/lalique.png`,
    text: "Французский символ роскоши, объединяющий ювелирную точность и хрусталь: от декора и света до масштабных интерьерных объектов.",
    note: "Продукцию Lalique в Казахстане можно приобрести в Idea Decor."
  },
  {
    name: "Loro Piana Interiors",
    logo: `${ASSET}/logo-loro-white.png`,
    photo: `${ASSET}/loro.png`,
    text: "Тактильная роскошь интерьерного текстиля: редкие кашемировые и шелковые материалы, созданные для мебели и декора премиального уровня.",
    note: "Loro Piana Interiors в Казахстане доступен через Idea Decor."
  }
];

const heroStrip = document.getElementById("heroStrip");
const aboutGrid = document.getElementById("aboutGrid");
const salonsStrip = document.getElementById("salonsStrip");
const brandCards = document.getElementById("brandCards");
const brandLogoWall = document.getElementById("brandLogoWall");
const themeToggle = document.getElementById("themeToggle");

function makeImg(src, alt, className, opts = {}) {
  const img = document.createElement("img");
  img.src = src;
  img.alt = alt;
  if (className) img.className = className;
  img.decoding = "async";
  img.referrerPolicy = "no-referrer";
  if (opts.high) {
    img.fetchPriority = "high";
    img.loading = "eager";
  } else {
    img.loading = "lazy";
  }
  return img;
}

stripPhotos.forEach((src, i) => {
  heroStrip.append(makeImg(src, "ID Gallery", "", { high: i < 2 }));

  const a = document.createElement("div");
  a.className = "tile";
  a.append(makeImg(src, "ID Gallery"));
  aboutGrid.append(a);
});

const salonShot = document.createElement("div");
salonShot.className = "shot";
salonShot.append(makeImg(`${ASSET}/salony.png`, "Фото салонов"));
salonsStrip.append(salonShot);

brands.forEach((brand, i) => {
  const logo = document.createElement("div");
  logo.className = "logo-chip";
  logo.append(makeImg(brand.logo, `${brand.name} logo`));
  brandLogoWall.append(logo);

  const card = document.createElement("article");
  card.className = "card";
  card.style.transitionDelay = `${Math.min(i * 55, 280)}ms`;

  card.innerHTML = `
    <img class="card-photo" src="${brand.photo}" alt="${brand.name}" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
    <div class="card-body">
      <div class="card-logo-wrap">
        <img class="card-logo" src="${brand.logo}" alt="${brand.name} logo" loading="lazy" decoding="async" referrerpolicy="no-referrer" />
      </div>
      <h3 class="card-title">${brand.name}</h3>
      <p class="card-text">${brand.text}</p>
      <p class="card-note">${brand.note}</p>
    </div>
  `;

  brandCards.append(card);
});

const themeKey = "idg_theme";
const mq = window.matchMedia("(prefers-color-scheme: dark)");

function applyTheme(theme) {
  document.documentElement.setAttribute("data-theme", theme);
  themeToggle.textContent = theme === "dark" ? "☾" : "☀";
}

const saved = localStorage.getItem(themeKey);
applyTheme(saved || (mq.matches ? "dark" : "light"));

themeToggle.addEventListener("click", () => {
  const current = document.documentElement.getAttribute("data-theme");
  const next = current === "dark" ? "light" : "dark";
  localStorage.setItem(themeKey, next);
  applyTheme(next);
});

mq.addEventListener("change", (e) => {
  if (localStorage.getItem(themeKey)) return;
  applyTheme(e.matches ? "dark" : "light");
});

const revealEls = document.querySelectorAll("[data-reveal], .card");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in");
      }
    });
  },
  { threshold: 0.16, rootMargin: "0px 0px -8% 0px" }
);

revealEls.forEach((el) => revealObserver.observe(el));

const sections = document.querySelectorAll("main section[id]");
const menuLinks = document.querySelectorAll(".menu-link");

const menuObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) return;
      menuLinks.forEach((l) => l.classList.remove("is-active"));
      const active = document.querySelector(`.menu-link[href="#${entry.target.id}"]`);
      if (active) active.classList.add("is-active");
    });
  },
  { threshold: 0.45 }
);

sections.forEach((section) => menuObserver.observe(section));

menuLinks.forEach((link) => {
  link.addEventListener("click", (e) => {
    e.preventDefault();
    const target = document.querySelector(link.getAttribute("href"));
    if (!target) return;
    target.scrollIntoView({ behavior: "smooth", block: "start" });
  });
});
