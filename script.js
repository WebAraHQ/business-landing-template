const translations = {
  fa: {
    'nav.services': 'خدمات',
    'nav.work': 'نمونه‌کارها',
    'nav.process': 'روند کار',
    'nav.contact': 'تماس',
    'hero.eyebrow': 'وب · موبایل · هوش مصنوعی',
    'hero.title': 'محصولات دیجیتالی می‌سازیم که مشتری‌هایتان دوستشان دارند',
    'hero.text': 'از وب‌سایت‌های سریع تا اپلیکیشن‌های مبتنی بر هوش مصنوعی؛ ایده شما را با دقت طراحی می‌کنیم و به‌موقع تحویل می‌دهیم.',
    'hero.cta': 'شروع پروژه',
    'hero.secondary': 'دیدن نمونه‌کارها',
    'stats.projects': 'پروژه تحویل‌شده',
    'stats.satisfaction': 'درصد رضایت مشتری',
    'stats.years': 'سال تجربه',
    'services.title': 'چه کاری انجام می‌دهیم',
    'services.web.title': 'توسعه وب',
    'services.web.text': 'فروشگاه اینترنتی، سامانه رزرو و وب‌سایت شرکتی سریع و سئوشده.',
    'services.mobile.title': 'اپلیکیشن موبایل',
    'services.mobile.text': 'اپلیکیشن‌های چندسکویی متصل به سرورهای امن و مقیاس‌پذیر.',
    'services.ai.title': 'هوش مصنوعی',
    'services.ai.text': 'چت‌بات، جستجوی هوشمند و ایجنت‌هایی که هر هفته ساعت‌ها در وقت تیم شما صرفه‌جویی می‌کنند.',
    'work.title': 'نمونه‌کارهای منتخب',
    'work.all': 'همه',
    'work.web': 'وب',
    'work.ai': 'هوش مصنوعی',
    'work.p1': 'فروشگاه اینترنتی طلا',
    'work.p2': 'سامانه رزرو تور',
    'work.p3': 'دستیار خرید هوشمند',
    'testimonials.eyebrow': 'تجربه مشتریان',
    'testimonials.title': 'نتیجه خوب، از زبان مشتریان',
    'testimonials.note': 'متن‌های نمایشی این قالب هستند؛ پیش از انتشار، آن‌ها را با بازخورد واقعی و تأییدشده مشتریان جایگزین کنید.',
    'testimonials.quote1': '«اینجا یک جمله کوتاه و مشخص درباره نتیجه‌ای که برای مشتری ساخته‌اید بنویسید.»',
    'testimonials.quote2': '«توضیح دهید چه چیزی برای مشتری تغییر کرد و همکاری شما چه کمکی کرد.»',
    'testimonials.quote3': '«از نقل‌قول واقعی مشتری استفاده کنید که نتیجه‌ای قابل سنجش را بیان کند.»',
    'testimonials.name1': 'نام مشتری',
    'testimonials.name2': 'نام مشتری',
    'testimonials.name3': 'نام مشتری',
    'testimonials.role1': 'نام پروژه یا شرکت',
    'testimonials.role2': 'نام پروژه یا شرکت',
    'testimonials.role3': 'نام پروژه یا شرکت',
    'process.title': 'روند کار ما',
    'process.s1': 'شناخت',
    'process.s1t': 'اهداف، کاربران و محدودیت‌های شما را می‌شناسیم.',
    'process.s2': 'طراحی',
    'process.s2t': 'جریان‌های کاربری روشن و ظاهری متناسب با برند شما.',
    'process.s3': 'توسعه',
    'process.s3t': 'کد تمیز و تست‌شده با گزارش پیشرفت هفتگی.',
    'process.s4': 'راه‌اندازی',
    'process.s4t': 'استقرار، پایش و پشتیبانی مداوم.',
    'contact.title': 'درباره پروژه‌تان صحبت کنیم',
    'contact.text': 'نیازتان را بنویسید؛ ظرف یک روز کاری پاسخ می‌دهیم.',
    'contact.name': 'نام',
    'contact.email': 'ایمیل',
    'contact.message': 'پیام',
    'contact.send': 'ارسال پیام',
    'footer.built': 'قالب از وب آرا',
    'form.invalid': 'لطفاً همه فیلدها را درست پر کنید.',
    'form.success': 'ممنون! پیام شما دریافت شد.',
  },
  en: {
    'form.invalid': 'Please fill in all fields correctly.',
    'form.success': 'Thank you! Your message has been received.',
  },
};

const storage = {
  get(key) { try { return localStorage.getItem(key); } catch { return null; } },
  set(key, value) { try { localStorage.setItem(key, value); } catch { /* storage unavailable */ } },
};

// Remember the original English text so we can switch back.
document.querySelectorAll('[data-i18n]').forEach((el) => {
  translations.en[el.dataset.i18n] ??= el.textContent;
});

function t(key, lang = document.documentElement.lang) {
  return translations[lang]?.[key] ?? translations.en[key] ?? key;
}

function setLanguage(lang) {
  document.documentElement.lang = lang;
  document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
  document.querySelectorAll('[data-i18n]').forEach((el) => { el.textContent = t(el.dataset.i18n, lang); });
  document.getElementById('lang-toggle').textContent = lang === 'fa' ? 'EN' : 'فا';
  storage.set('lang', lang);
}

function setTheme(theme) {
  document.documentElement.dataset.theme = theme;
  storage.set('theme', theme);
}

// Language and theme
document.getElementById('lang-toggle').addEventListener('click', () => {
  setLanguage(document.documentElement.lang === 'fa' ? 'en' : 'fa');
});
document.getElementById('theme-toggle').addEventListener('click', () => {
  setTheme(document.documentElement.dataset.theme === 'dark' ? 'light' : 'dark');
});
setTheme(storage.get('theme') ?? (matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'));
if (storage.get('lang') === 'fa') setLanguage('fa');

// Mobile menu
const nav = document.getElementById('nav');
const menuButton = document.getElementById('menu-toggle');
menuButton.addEventListener('click', () => {
  const open = nav.classList.toggle('is-open');
  menuButton.setAttribute('aria-expanded', String(open));
});
nav.addEventListener('click', (event) => {
  if (event.target.matches('a')) {
    nav.classList.remove('is-open');
    menuButton.setAttribute('aria-expanded', 'false');
  }
});

// Project filters
document.querySelectorAll('.chip').forEach((chip) => {
  chip.addEventListener('click', () => {
    document.querySelectorAll('.chip').forEach((c) => c.classList.toggle('is-active', c === chip));
    const filter = chip.dataset.filter;
    document.querySelectorAll('.project').forEach((project) => {
      project.classList.toggle('is-hidden', filter !== 'all' && project.dataset.category !== filter);
    });
  });
});

// Count-up statistics and reveal animations
function countUp(el) {
  const target = Number(el.dataset.count);
  const start = performance.now();
  const step = (now) => {
    const progress = Math.min((now - start) / 1200, 1);
    el.textContent = Math.round(target * progress);
    if (progress < 1) requestAnimationFrame(step);
  };
  requestAnimationFrame(step);
}

const observer = new IntersectionObserver((entries) => {
  entries.forEach((entry) => {
    if (!entry.isIntersecting) return;
    if (entry.target.dataset.count) countUp(entry.target);
    entry.target.classList.add('is-visible');
    observer.unobserve(entry.target);
  });
}, { threshold: 0.2 });
document.querySelectorAll('.reveal, [data-count]').forEach((el) => observer.observe(el));

// Contact form validation (connect it to your own back-end or form service)
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');
form.addEventListener('submit', (event) => {
  event.preventDefault();
  let valid = true;
  form.querySelectorAll('input, textarea').forEach((field) => {
    const ok = field.checkValidity() && field.value.trim().length > 0;
    field.classList.toggle('is-invalid', !ok);
    valid &&= ok;
  });
  status.className = 'form__status ' + (valid ? 'is-success' : 'is-error');
  status.textContent = t(valid ? 'form.success' : 'form.invalid');
  if (valid) form.reset();
});

document.getElementById('year').textContent = new Date().getFullYear();
