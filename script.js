const stripPhotos = [
  "https://www.figma.com/api/mcp/asset/7bbf0230-5761-42a6-8b30-8c646f2f1590",
  "https://www.figma.com/api/mcp/asset/53dee03e-ff89-42f3-b272-f5c32da2ae27",
  "https://www.figma.com/api/mcp/asset/7603905d-15b8-41b0-bb3c-8ac1c2565157",
  "https://www.figma.com/api/mcp/asset/d9b543fa-7463-4ff6-98cc-de2daca638bc",
  "https://www.figma.com/api/mcp/asset/8ed2a5b0-7d93-431c-be45-2b04f284ae4b",
  "https://www.figma.com/api/mcp/asset/569b94d6-ab0a-4b49-acc9-64fb3b5e9b12"
];

const brands = [
  {
    name: "Visionnaire",
    logo: "https://www.figma.com/api/mcp/asset/c31d94d2-6aae-478d-8d1e-c941d7b696a4",
    photo: "https://www.figma.com/api/mcp/asset/993dabc0-0028-4454-9357-71d04fe344df",
    text: "Итальянский meta-luxury бренд мебели и декора, который работает в формате total look и превращает интерьер в цельный дизайнерский образ.",
    note: "ID Gallery представляет Visionnaire в Казахстане на эксклюзивных условиях."
  },
  {
    name: "Baxter",
    logo: "https://www.figma.com/api/mcp/asset/31f0a4ce-c40c-43d7-90a0-9227f1a17ea2",
    photo: "https://www.figma.com/api/mcp/asset/a40e350b-5662-468f-9319-4fc981be5ff8",
    text: "Легендарная фабрика, превратившая натуральную кожу в искусство: брутальная эстетика, редкие материалы и коллекции от ведущих мировых дизайнеров.",
    note: "Idea Decor — эксклюзивный дистрибьютор Baxter в Алматы."
  },
  {
    name: "Molteni&C",
    logo: "https://www.figma.com/api/mcp/asset/961ae520-c8f8-4db0-b872-b8bacb064bf2",
    photo: "https://www.figma.com/api/mcp/asset/9e804100-5187-4503-b80e-f77d548722ae",
    text: "Более 90 лет задает стандарты современной люксовой мебели: архитектурный дизайн, коллекции Heritage и безупречное качество исполнения.",
    note: "Idea Decor — лучшие условия на мебель Molteni&C в Казахстане."
  },
  {
    name: "Roberto Cavalli Home Interiors",
    logo: "https://www.figma.com/api/mcp/asset/a5e9a445-7bf3-47c8-ab94-848e90482378",
    photo: "https://www.figma.com/api/mcp/asset/1c66caa4-6cf5-4d9e-acc9-46fed2ac1b5b",
    text: "Яркая интерьерная коллекция fashion-дома Roberto Cavalli: смелые фактуры, анималистические мотивы и флорентийское качество ручной работы.",
    note: "В Казахстане бренд доступен через Idea Decor по прямому контракту с фабрикой."
  },
  {
    name: "Gianfranco Ferré Home",
    logo: "https://www.figma.com/api/mcp/asset/05370b49-edf7-4b39-8e62-f458c9cb8700",
    photo: "https://www.figma.com/api/mcp/asset/5120b0fa-9ae1-413d-8424-ac4e088eca07",
    text: "Минималистичная итальянская эстетика с четкой геометрией, благородными материалами и респектабельным характером коллекций.",
    note: "Продукцию Gianfranco Ferré Home можно приобрести в Idea Decor."
  },
  {
    name: "ETRO Home Interiors",
    logo: "https://www.figma.com/api/mcp/asset/b73c85a3-749f-4db6-947a-1658befbf806",
    photo: "https://www.figma.com/api/mcp/asset/edf2a72a-380e-4d61-bf77-fedcfb3692ac",
    text: "Эклектичный интерьерный стиль ETRO: фирменный пейсли, культурные мотивы и выразительные текстильные решения уровня haute interior.",
    note: "В Казахстане ETRO Home Interiors представлен через Idea Decor."
  },
  {
    name: "Bonaldo",
    logo: "https://www.figma.com/api/mcp/asset/9bc1edfa-08ed-4979-a870-d7ebd7f9c8d5",
    photo: "https://www.figma.com/api/mcp/asset/a429fb3b-c15c-414c-a022-24ad10d380cf",
    text: "Итальянский бренд с 90-летней историей: гармония дизайна и комфорта, широкий каталог и коллекции от международных звезд дизайна.",
    note: "Idea Decor представляет Bonaldo в Казахстане на эксклюзивных условиях."
  },
  {
    name: "Lalique",
    logo: "https://www.figma.com/api/mcp/asset/453f4e11-55d4-4ab3-9487-43522dc20b88",
    photo: "https://www.figma.com/api/mcp/asset/753e5401-df5c-40b6-aa28-2d287793d3b9",
    text: "Французский символ роскоши, объединяющий ювелирную точность и хрусталь: от декора и света до масштабных интерьерных объектов.",
    note: "Продукцию Lalique в Казахстане можно приобрести в Idea Decor."
  },
  {
    name: "Loro Piana Interiors",
    logo: "https://www.figma.com/api/mcp/asset/7281faf9-4535-41cb-ac24-198b2155eb6d",
    photo: "https://www.figma.com/api/mcp/asset/dda514f7-402f-46ac-b219-5a186d406ac3",
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

  const s = document.createElement("div");
  s.className = "shot";
  s.append(makeImg(src, "Фото салона"));
  salonsStrip.append(s);
});

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

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    heroStrip.style.transform = `translateY(${y * 0.07}px) scale(${1.02 + Math.min(y / 8000, 0.02)})`;
  },
  { passive: true }
);
