const dict = {
  ru: {
    hero_kicker: "Мы женимся",
    names: "Имя & Имя",
    date: "24 августа 2026",
    city: "Кишинёв",
    hero_btn_details: "Смотреть детали",
    hero_btn_rsvp: "Подтвердить участие",
    invite_title: "Дорогие гости!",
    invite_text: "Мы будем счастливы разделить с вами наш особенный день.",
    details_title: "Детали",
    details_when: "Когда",
    details_where: "Где",
    details_map: "Карта",
    details_date: "24 августа 2026",
    details_time: "Сбор гостей: 16:00 · Церемония: 16:30",
    venue_name: "Название площадки",
    venue_address: "Адрес, город",
    map_open: "Открыть маршрут",
    timeline_title: "Тайминг",
    t1_time: "16:00",
    t1_text: "Сбор гостей",
    t2_time: "16:30",
    t2_text: "Церемония",
    t3_time: "17:30",
    t3_text: "Банкет",
    rsvp_title: "Подтверждение участия",
    rsvp_text: "Пожалуйста, подтвердите присутствие до <strong>1 августа</strong>.",
    rsvp_btn: "Открыть форму RSVP",
    rsvp_hint: "Если ссылка не открывается, напишите нам — контакты ниже.",
    contacts_title: "Контакты",
  },
  en: {
    hero_kicker: "We’re getting married",
    names: "Name & Name",
    date: "24 August 2026",
    city: "Chișinău",
    hero_btn_details: "See details",
    hero_btn_rsvp: "Confirm attendance",
    invite_title: "Dear guests!",
    invite_text: "We’d be happy to celebrate our special day with you.",
    details_title: "Details",
    details_when: "When",
    details_where: "Where",
    details_map: "Map",
    details_date: "24 August 2026",
    details_time: "Guests arrive: 4:00 PM · Ceremony: 4:30 PM",
    venue_name: "Venue name",
    venue_address: "Address, city",
    map_open: "Open directions",
    timeline_title: "Schedule",
    t1_time: "4:00 PM",
    t1_text: "Guests arrive",
    t2_time: "4:30 PM",
    t2_text: "Ceremony",
    t3_time: "5:30 PM",
    t3_text: "Dinner",
    rsvp_title: "RSVP",
    rsvp_text: "Please confirm your attendance by <strong>1 August</strong>.",
    rsvp_btn: "Open RSVP form",
    rsvp_hint: "If the link doesn’t open, message us — contacts below.",
    contacts_title: "Contacts",
  }
};

function setLang(lang) {
  document.documentElement.lang = lang;
  document.querySelectorAll("[data-i18n]").forEach(el => {
    const key = el.getAttribute("data-i18n");
    const value = dict[lang][key];
    if (value == null) return;
    if (key === "rsvp_text") el.innerHTML = value;
    else el.textContent = value;
  });

  document.querySelectorAll(".lang__btn").forEach(btn => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle("is-active", active);
    btn.setAttribute("aria-pressed", active ? "true" : "false");
  });

  localStorage.setItem("wedding_lang", lang);
}

document.getElementById("y").textContent = new Date().getFullYear();
setLang(localStorage.getItem("wedding_lang") || "ru");
document.querySelectorAll(".lang__btn").forEach(btn => btn.addEventListener("click", () => setLang(btn.dataset.lang)));
