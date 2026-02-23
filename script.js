const slides = [
  {
    n: "01",
    t: "ID Gallery",
    d: "Искусство создания уникальных интерьеров и резиденций класса люкс.",
    s: "Слайд 001 · О компании",
    img: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "02",
    t: "О компании",
    d: "IdeaDecor — эксклюзивный представитель ведущих мебельных брендов Италии и Франции. 20+ лет на рынке, 1500+ проектов, комплектация под ключ.",
    s: "Слайд 002",
    img: "https://images.unsplash.com/photo-1616627561839-074385245ff6?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "03",
    t: "Наши бренды",
    d: "Коллекции премиальной мебели, света и декора с акцентом на дизайн, качество и долговечность.",
    s: "Слайд 003",
    img: "https://images.unsplash.com/photo-1617104551722-3b2d5136640c?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "04",
    t: "Итальянское наследие",
    d: "Иконы современного интерьера и лимитированные коллекции для частных резиденций и общественных пространств.",
    s: "Слайд 004",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "05",
    t: "Armani Casa",
    d: "Выверенные пропорции, благородные материалы и эстетика современной роскоши.",
    s: "Слайд 005",
    img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "06",
    t: "Riva 1920",
    d: "Авторская работа с массивом дерева, скульптурный характер и природная текстура.",
    s: "Слайд 006",
    img: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb3?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "07",
    t: "Poliform",
    d: "Чистая архитектура пространства и модульные решения для жизни без компромиссов.",
    s: "Слайд 007",
    img: "https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "08",
    t: "Molteni&C",
    d: "Легендарная фабрика с более чем 90-летней историей, объединяющая искусство и инновации.",
    s: "Слайд 008",
    img: "https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "09",
    t: "Trussardi Casa",
    d: "Итальянская элегантность, выразительные силуэты и статусный характер коллекций.",
    s: "Слайд 009",
    img: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "10",
    t: "Rugiano",
    d: "Металл, кожа и ремесленные детали, превращающие мебель в арт-объект.",
    s: "Слайд 010",
    img: "https://images.unsplash.com/photo-1616594039964-3fbd5b9f0b29?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "11",
    t: "Visionnaire",
    d: "Смелый интерьерный couture-подход: высокая мода, перенесенная в пространство дома.",
    s: "Слайд 011",
    img: "https://images.unsplash.com/photo-1616593969747-4797dc75033e?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "12",
    t: "Turri",
    d: "Традиции итальянского мастерства, отточенные до современного люксового стандарта.",
    s: "Слайд 012",
    img: "https://images.unsplash.com/photo-1616046229478-9901c5536a45?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "13",
    t: "Baxter",
    d: "Уникальные тактильные материалы и спокойная, но мощная визуальная выразительность.",
    s: "Слайд 013",
    img: "https://images.unsplash.com/photo-1616464916356-5f5f7f7d86a2?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "14",
    t: "NATUZZI ITALIA",
    d: "Комфорт и эргономика, дополненные узнаваемой эстетикой made in Italy.",
    s: "Слайд 014",
    img: "https://images.unsplash.com/photo-1616593969815-012e1f48f4d4?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "15",
    t: "Daytona",
    d: "Современная роскошь с динамичным характером и изысканными отделками.",
    s: "Слайд 015",
    img: "https://images.unsplash.com/photo-1584622781867-53f5f8f6f4c6?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "16",
    t: "LAGO",
    d: "Дизайн, где архитектура модульности создает легкость и свободу компоновки.",
    s: "Слайд 016",
    img: "https://images.unsplash.com/photo-1615874959474-d609969a20ed?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "17",
    t: "Bonaldo",
    d: "Сильная геометрия, пластика линий и выразительные центральные элементы интерьера.",
    s: "Слайд 017",
    img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "18",
    t: "Longhi",
    d: "Сдержанная роскошь и продуманный баланс между классикой и современностью.",
    s: "Слайд 018",
    img: "https://images.unsplash.com/photo-1617098900768-1c4d8ea75471?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "19",
    t: "Giorgio Collection",
    d: "Ар-деко мотивы, редкие материалы и высокий уровень детализации.",
    s: "Слайд 019",
    img: "https://images.unsplash.com/photo-1617104678098-de229db51175?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "20",
    t: "Minotti",
    d: "Архитектурная эстетика soft minimal с безупречным качеством исполнения.",
    s: "Слайд 020",
    img: "https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "21",
    t: "Poltrona Frau",
    d: "Культовые кожаные решения и мастерство, признанное эталоном в мире дизайна.",
    s: "Слайд 021",
    img: "https://images.unsplash.com/photo-1618220252344-8ec99ec624b1?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "22",
    t: "3D Туры",
    d: "Погрузитесь в атмосферу салонов ID Gallery в Астане и Алматы не выходя из дома.",
    s: "Слайд 022",
    img: "https://images.unsplash.com/photo-1615529162924-f86053884667?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "23",
    t: "Виртуальные Экскурсии",
    d: "Исследуйте каждую деталь интерьеров и подберите решения для вашего пространства.",
    s: "Слайд 023",
    img: "https://images.unsplash.com/photo-1617098474202-0d0d7f60b47c?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "24",
    t: "Фото Салонов",
    d: "Реальные проекты, которые демонстрируют масштаб, композицию и качество материалов.",
    s: "Слайд 024",
    img: "https://images.unsplash.com/photo-1618220179428-22790b461013?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "25",
    t: "Галерея Пространств",
    d: "Коллекция атмосферных интерьерных сцен с акцентом на свет и текстуру.",
    s: "Слайд 025",
    img: "https://images.unsplash.com/photo-1617098900591-3f90928e8c54?auto=format&fit=crop&w=1800&q=80"
  },
  {
    n: "26",
    t: "Контакты",
    d: "ID Gallery · Астана / Алматы · Индивидуальная консультация и комплектация проектов под ключ.",
    s: "Слайд 026",
    img: "https://images.unsplash.com/photo-1617806118233-18e1de247200?auto=format&fit=crop&w=1800&q=80"
  }
];

const slidesRoot = document.getElementById("slides");
const progress = document.getElementById("progress");

slides.forEach((slide) => {
  const section = document.createElement("section");
  section.className = "slide";
  section.id = `slide-${slide.n}`;

  const bg = document.createElement("div");
  bg.className = "slide-bg";
  section.style.setProperty("--bg-image", `url('${slide.img}')`);

  const overlay = document.createElement("div");
  overlay.className = "slide-overlay";

  const content = document.createElement("article");
  content.className = "slide-content";
  content.innerHTML = `
    <p class="slide-number">${slide.s}</p>
    <h2>${slide.t}</h2>
    <p>${slide.d}</p>
    <p class="small">ID Gallery · Luxury Interior & Furniture</p>
  `;

  section.append(bg, overlay, content);
  slidesRoot.append(section);
});

const sections = document.querySelectorAll(".slide");
const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
      }
    });
  },
  { threshold: 0.25 }
);

const progressObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }

      const index = Array.from(sections).indexOf(entry.target) + 1;
      progress.textContent = `${String(index).padStart(2, "0")} / ${String(sections.length).padStart(2, "0")}`;
    });
  },
  { threshold: 0.65 }
);

sections.forEach((section) => {
  revealObserver.observe(section);
  progressObserver.observe(section);
});

window.addEventListener(
  "scroll",
  () => {
    const y = window.scrollY;
    sections.forEach((section, i) => {
      const bg = section.querySelector(".slide-bg");
      const speed = 0.04 + (i % 4) * 0.008;
      bg.style.transform = `translateY(${(y - section.offsetTop) * speed}px) scale(1.05)`;
    });
  },
  { passive: true }
);
