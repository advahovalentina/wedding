const translations = {
  ru: {
    we_marry: "Мы женимся!",
    dear_guests: "Дорогие гости!",
    invitation_text: "Совсем скоро состоится один из самых важных дней в нашей жизни — день нашей свадьбы. Мы будем счастливы разделить эту радость вместе с вами и приглашаем вас стать частью нашего праздника!",
    july: "Июль",
    mon: "Пн", tue: "Вт", wed: "Ср", thu: "Чт", fri: "Пт", sat: "Сб", sun: "Вс",
    venue: "Место проведения",
    view_map: "Посмотреть на карте",
    schedule: "Тайминг",
    guests_arrival: "Сбор гостей",
    ceremony_start: "Начало церемонии",
    photoshoot: "Фотосессия",
    banquet: "Праздничный ужин",
    dress_code: "Дресс-код",
    dress_text: "Для нас самое важное — ваше присутствие. Но мы будем рады, если в своих нарядах вы поддержите цветовую гамму и стиль нашей свадьбы.",

    rsvp_title: "Подтверждение присутствия",
    rsvp_text: "Будем признательны, если вы подтвердите своё присутствие до",
    rsvp_date: "1 июня",

    contacts_title: "Контакты"
  },

  en: {
    we_marry: "We're getting married!",
    dear_guests: "Dear guests!",
    invitation_text: "A very special day in our lives is coming soon — our wedding day. We would be truly happy to share this joy with you and invite you to be part of our celebration.",
    july: "July",
    mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun",
    venue: "Venue",
    view_map: "View on map",
    schedule: "Schedule",
    guests_arrival: "Guest arrival",
    ceremony_start: "Ceremony",
    photoshoot: "Photoshoot",
    banquet: "Reception",
    dress_code: "Dress Code",
    dress_text: "Your presence means the most to us. We would also love if your outfits match the color palette and style of our wedding.",

  rsvp_title: "Confirm attendance",
    rsvp_text: "Please confirm your attendance by",
    rsvp_date: "June 1",
    rsvp_date: "1. Juni",

    contacts_title: "Contacts"
  },

  de: {
    we_marry: "Wir heiraten!",
    dear_guests: "Liebe Gaste!",
    invitation_text: "Schon bald kommt einer der wichtigsten Tage unseres Lebens — unser Hochzeitstag. Wir würden uns sehr freuen, diesen besonderen Moment mit euch zu teilen und euch als Teil unserer Feier dabei zu haben.",
    july: "Juli",
    mon: "Mo", tue: "Di", wed: "Mi", thu: "Do", fri: "Fr", sat: "Sa", sun: "So",
    venue: "Veranstaltungsort",
    view_map: "Auf der Karte ansehen",
    schedule: "Zeitplan",
    guests_arrival: "Ankunft der Gäste",
    ceremony_start: "Zeremonie",
    photoshoot: "Fotoshooting",
    banquet: "Festessen",
    dress_code: "Dresscode",
    dress_text: "Das Wichtigste für uns ist eure Anwesenheit. Wir würden uns jedoch freuen, wenn eure Outfits die Farben und den Stil unserer Hochzeit widerspiegeln.",

    rsvp_title: "Teilnahme bestatigen",
    rsvp_text: "Bitte bestätigt eure Teilnahme bis zum",

    contacts_title: "Kontakte"
  }
};

      document.querySelectorAll(".lang button").forEach(btn => {
        btn.addEventListener("click", () => {
          const lang = btn.dataset.lang;
          document.querySelectorAll("[data-i18n]").forEach(el => {
            const key = el.dataset.i18n;
            if(translations[lang][key]) el.textContent = translations[lang][key];
          });
          document.querySelectorAll(".lang button").forEach(b => b.setAttribute("aria-pressed", "false"));
          btn.setAttribute("aria-pressed", "true");
        });
      });
