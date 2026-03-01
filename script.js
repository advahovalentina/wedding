      const translations = {
        ru: {
          we_marry: "Мы женимся!",
          dear_guests: "Дорогие гости!",
          invitation_text: "Совсем скоро состоиться наша свадьба! Мы рады пригласить вас стать свидетелями этого торжества и разделить с нами самые яркие моменты!",
          july: "Июль",
          mon: "Пн", tue: "Вт", wed: "Ср", thu: "Чт", fri: "Пт", sat: "Сб", sun: "Вс",
          venue: "Место проведения",
          view_map: "Посмотреть на карте",
          schedule: "Тайминг",
          guests_arrival: "Сбор гостей",
          ceremony_start: "Начало церемонии",
          photoshoot: "Фотосессия",
          banquet: "Банкет",
          dress_code: "Дресс-код",
          dress_text: "Для нас главное - ваше присутствие! Но мы будем рады, если в своих нарядах вы поддержите нашу цветовую гамму и стиль нашей свадьбы!",
          contacts_title: "Контакты"
        },
        en: {
          we_marry: "We're getting married!",
          dear_guests: "Dear guests!",
          invitation_text: "Our wedding day is coming soon! We are happy to invite you to witness the celebration and share the most joyful moments with us!",
          july: "July",
          mon: "Mon", tue: "Tue", wed: "Wed", thu: "Thu", fri: "Fri", sat: "Sat", sun: "Sun",
          venue: "Venue",
          view_map: "View on map",
          schedule: "Schedule",
          guests_arrival: "Guests arrival",
          ceremony_start: "Ceremony start",
          photoshoot: "Photoshoot",
          banquet: "Banquet",
          dress_code: "Dress Code",
          dress_text: "Your presence is most important! But we would be happy if you match our color palette and wedding style in your outfit!",
          contacts_title: "Contacts"
        },
        de: {
          we_marry: "Wir heiraten!",
          dear_guests: "Liebe Gäste!",
          invitation_text: "Unsere Hochzeit steht bald bevor! Wir freuen uns, euch einzuladen, Zeugen dieser Feier zu sein und die schönsten Momente mit uns zu teilen!",
          july: "Juli",
          mon: "Mo", tue: "Di", wed: "Mi", thu: "Do", fri: "Fr", sat: "Sa", sun: "So",
          venue: "Veranstaltungsort",
          view_map: "Auf der Karte ansehen",
          schedule: "Zeitplan",
          guests_arrival: "Ankunft der Gäste",
          ceremony_start: "Beginn der Zeremonie",
          photoshoot: "Fotoshooting",
          banquet: "Bankett",
          dress_code: "Dresscode",
          dress_text: "Das Wichtigste ist eure Anwesenheit! Wir würden uns freuen, wenn ihr in euren Outfits unsere Farbpalette und den Stil unserer Hochzeit unterstützt!",
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
