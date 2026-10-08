const posts = [
  {
    id: 1,
    category: 'research',
    label: 'Research',
    date: '2025 – 2026',
    title: 'Historical & Future Drought Analysis using SPI and NEX-GDDP-CMIP',
    excerpt: 'Assessing climate projections and drought characteristics across arid and semi-arid regions with high-resolution climate modeling.',
    body: 'Investigating spatiotemporal drought patterns using Standardized Precipitation Index (SPI) combined with downscaled NEX-GDDP-CMIP climate change projections to understand future precipitation deficits and climate risk vulnerability.'
  },
  {
    id: 2,
    category: 'gis',
    label: 'GIS & RS',
    date: '2025',
    title: 'Change Detection of Soil Degradation in Coastal Sindh',
    excerpt: 'Utilizing multi-temporal satellite imagery, remote sensing indices, and GIS spatial modeling to evaluate coastal salinity and land degradation.',
    body: 'Applied remote sensing datasets and spatial analysis techniques in ArcGIS Pro and Google Earth Engine to track coastal erosion, soil degradation, and vegetation shifts across fragile coastal ecosystems in Sindh.'
  },
  {
    id: 3,
    category: 'fieldwork',
    label: 'Fieldwork',
    date: 'Nov 2025',
    title: 'Forest Carbon Sequestration & Ecosystem Services Survey',
    excerpt: 'Field socio-economic survey at Miani Forest Department, Hyderabad, to assess community livelihoods and carbon biomass potential.',
    body: 'Conducted field measurements, biomass surveys, and community interviews to quantify forest carbon storage and model ecosystem services supporting local sustainability and conservation planning.'
  },
  {
    id: 4,
    category: 'research',
    label: 'Health & Climate',
    date: '2025 – 2026',
    title: 'Influence of Climate Shifts on Tuberculosis Incidence Patterns',
    excerpt: 'Spatial epidemiology modeling using GIS to correlate humidity, temperature, and socioeconomic vulnerabilities with TB distribution.',
    body: 'Leveraging GIS mapping and statistical spatial clustering to reveal the correlations between climatic variations, environmental triggers, and public health incidents across regional demographics.'
  },
  {
    id: 5,
    category: 'education',
    label: 'Education',
    date: '2023 – 2025',
    title: 'Youth Climate Advocacy with GiM, GYBN & TENL',
    excerpt: 'Empowering young leaders through hands-on climate education, biodiversity workshops, and regional environmental webinars.',
    body: 'Facilitating grassroots workshops, capacity building sessions, and policy webinars on biodiversity conservation, climate adaptation, and sustainable development goals in partnership with youth-led organizations.'
  }
];

const root = document.documentElement;
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeIcon = document.querySelector('[data-theme-icon]');
const savedTheme = localStorage.getItem('sarmad-theme');

if (savedTheme) {
  root.dataset.theme = savedTheme;
}

const moonSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
const sunSvg = `<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;

function updateThemeControl() {
  const isLight = root.dataset.theme === 'light';
  if (themeIcon) {
    themeIcon.innerHTML = isLight ? sunSvg : moonSvg;
  }
  const metaTheme = document.querySelector('meta[name="theme-color"]');
  if (metaTheme) {
    metaTheme.setAttribute('content', isLight ? '#f0f4f9' : '#070e17');
  }
}

updateThemeControl();

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    root.dataset.theme = root.dataset.theme === 'light' ? 'dark' : 'light';
    localStorage.setItem('sarmad-theme', root.dataset.theme);
    updateThemeControl();
  });
}

// ADAPTIVE NAVBAR SCROLL HANDLER (TOP HORIZONTAL -> LEFT VERTICAL DOCK)
function handleNavScroll() {
  if (window.innerWidth <= 650) {
    document.body.classList.remove('nav-scrolled');
    return;
  }
  if (window.scrollY > 85) {
    document.body.classList.add('nav-scrolled');
  } else {
    document.body.classList.remove('nav-scrolled');
  }
}

window.addEventListener('scroll', handleNavScroll, { passive: true });
window.addEventListener('resize', handleNavScroll);
handleNavScroll();

const sections = [...document.querySelectorAll('[data-section]')];
const navLinks = [...document.querySelectorAll('[data-route]')];

function updateRoute() {
  const current = (location.hash || '#home').slice(1).split('/')[0];
  navLinks.forEach(link => link.classList.toggle('active', link.dataset.route === current));
}

window.addEventListener('hashchange', updateRoute);
updateRoute();

const blogGrid = document.querySelector('[data-blog-grid]');
const emptyState = document.querySelector('[data-blog-empty]');

function renderPosts(filter = 'all') {
  if (!blogGrid) return;
  const visible = filter === 'all' ? posts : posts.filter(post => post.category === filter);
  blogGrid.innerHTML = visible.map(post => `
    <article class="blog-card" data-post-id="${post.id}" tabindex="0" role="button" aria-label="Read ${post.title}">
      <span class="card-category">${post.label} / ${post.date}</span>
      <h3>${post.title}</h3>
      <p>${post.excerpt}</p>
      <footer>
        <span>Read details</span>
        <span>↗</span>
      </footer>
    </article>
  `).join('');

  if (emptyState) {
    emptyState.hidden = visible.length > 0;
  }

  blogGrid.querySelectorAll('[data-post-id]').forEach(card => {
    card.addEventListener('click', () => openPost(Number(card.dataset.postId)));
    card.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        openPost(Number(card.dataset.postId));
      }
    });
  });
}

renderPosts();

document.querySelectorAll('[data-filter]').forEach(button => {
  button.addEventListener('click', () => {
    document.querySelectorAll('[data-filter]').forEach(item => item.classList.remove('active'));
    button.classList.add('active');
    renderPosts(button.dataset.filter);
  });
});

const modal = document.querySelector('[data-blog-modal]');
const modalTitle = document.querySelector('[data-modal-title]');
const modalCategory = document.querySelector('[data-modal-category]');
const modalDate = document.querySelector('[data-modal-date]');
const modalBody = document.querySelector('[data-modal-body]');

function openPost(id) {
  if (!modal) return;
  const post = posts.find(item => item.id === id);
  if (!post) return;
  if (modalTitle) modalTitle.textContent = post.title;
  if (modalCategory) modalCategory.textContent = `${post.label} / Work`;
  if (modalDate) modalDate.textContent = post.date;
  if (modalBody) modalBody.textContent = post.body;
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
}

function closePost() {
  if (!modal) return;
  modal.classList.remove('open');
  modal.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}

document.querySelectorAll('[data-modal-close]').forEach(element => {
  element.addEventListener('click', closePost);
});

document.addEventListener('keydown', event => {
  if (event.key === 'Escape') closePost();
});

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const id = entry.target.dataset.section;
      navLinks.forEach(link => link.classList.toggle('active', link.dataset.route === id));
    }
  });
}, { rootMargin: '-35% 0px -55% 0px' });

sections.forEach(section => observer.observe(section));
