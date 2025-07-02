document.addEventListener('DOMContentLoaded', () => {
  let lang = 'en';
  if (location.pathname.startsWith('/he/')) {
    lang = 'he';
  } else if (location.pathname.startsWith('/ar/')) {
    lang = 'ar';
  }

  fetch(`/i18n/${lang}.json`)
    .then(res => res.json())
    .then(messages => {
      const applyTranslations = () => {
        document.querySelectorAll('[data-i18n]').forEach(el => {
          const key = el.getAttribute('data-i18n');
          let value = messages;
          key.split('.').forEach(part => {
            if (value && part in value) {
              value = value[part];
            } else {
              value = undefined;
            }
          });
          if (value === undefined) return;

          if ((el.tagName === 'UL' || el.tagName === 'OL') && Array.isArray(value)) {
            el.innerHTML = value.map(item => `<li>${item}</li>`).join('');
          } else {
            el.textContent = value;
          }
        });
      };

      if (lang === 'he' || lang === 'ar') {
        document.documentElement.setAttribute('dir', 'rtl');
      } else {
        document.documentElement.removeAttribute('dir');
      }

      applyTranslations();
      document.addEventListener('componentsLoaded', applyTranslations);
    })
    .catch(err => console.error('Failed to load i18n file', err));
});
