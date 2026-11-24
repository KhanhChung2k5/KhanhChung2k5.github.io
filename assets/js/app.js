(function () {
  const projects = window.PORTFOLIO_PROJECTS || [];
  const galleryGrid = document.getElementById('galleryGrid');
  const filterTabs = document.getElementById('filterTabs');

  // Theme, Clock & Copy Email
  const themeToggle = document.getElementById('themeToggle');
  const themeIcon = document.getElementById('themeIcon');
  const localClock = document.getElementById('localClock');
  const copyEmailBtn = document.getElementById('copyEmailBtn');
  const copyEmailLabel = document.getElementById('copyEmailLabel');

  // Slide-Over Drawer
  const drawer = document.getElementById('projectDrawer');
  const drawerClose = document.getElementById('drawerClose');
  const drawerCat = document.getElementById('drawerCat');
  const drawerRole = document.getElementById('drawerRole');
  const drawerTitle = document.getElementById('drawerTitle');
  const drawerSummary = document.getElementById('drawerSummary');
  const drawerMainImg = document.getElementById('drawerMainImg');
  const drawerCaption = document.getElementById('drawerCaption');
  const drawerZoomTrigger = document.getElementById('drawerZoomTrigger');
  const drawerThumbs = document.getElementById('drawerThumbs');
  const drawerMetrics = document.getElementById('drawerMetrics');
  const drawerChallenge = document.getElementById('drawerChallenge');
  const drawerHighlights = document.getElementById('drawerHighlights');
  const drawerResults = document.getElementById('drawerResults');
  const drawerTags = document.getElementById('drawerTags');
  const drawerActions = document.getElementById('drawerActions');

  // Command Palette
  const cmdTrigger = document.getElementById('cmdTrigger');
  const cmdModal = document.getElementById('cmdModal');
  const cmdInput = document.getElementById('cmdInput');
  const cmdResults = document.getElementById('cmdResults');

  // Lightbox
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightboxImg');
  const lightboxCaption = document.getElementById('lightboxCaption');
  const lightboxClose = document.getElementById('lightboxClose');
  const lightboxPrev = document.getElementById('lightboxPrev');
  const lightboxNext = document.getElementById('lightboxNext');

  let activeFilter = 'all';
  let currentProject = null;
  let currentImageIdx = 0;

  const yearEl = document.getElementById('yearNow');
  if (yearEl) yearEl.textContent = new Date().getFullYear();

  // Live HCMC Clock
  function tickClock() {
    if (!localClock) return;
    try {
      const str = new Intl.DateTimeFormat('en-GB', {
        timeZone: 'Asia/Ho_Chi_Minh',
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      }).format(new Date());
      localClock.textContent = `HCMC · ${str} ICT`;
    } catch (_) {
      localClock.textContent = 'HCMC · UTC+7';
    }
  }
  tickClock();
  setInterval(tickClock, 30000);

  // Scroll Reveal Observer
  const revealObserver =
    'IntersectionObserver' in window
      ? new IntersectionObserver(
          (entries) => {
            entries.forEach((e) => {
              if (e.isIntersecting) {
                e.target.classList.add('visible');
                revealObserver.unobserve(e.target);
              }
            });
          },
          { threshold: 0.08 }
        )
      : null;

  function observeReveals() {
    document.querySelectorAll('.reveal:not(.visible)').forEach((el) => {
      if (revealObserver) revealObserver.observe(el);
      else el.classList.add('visible');
    });
  }

  function updateCounts() {
    const counts = {
      all: projects.length,
      fullstack: projects.filter((p) => p.categories.includes('fullstack')).length,
      automation: projects.filter((p) => p.categories.includes('automation')).length,
      'security-qa': projects.filter((p) => p.categories.includes('security-qa')).length,
      distributed: projects.filter((p) => p.categories.includes('distributed')).length
    };
    Object.entries(counts).forEach(([k, v]) => {
      const el = document.getElementById(`count-${k}`);
      if (el) el.textContent = v;
    });
  }

  function renderGallery() {
    const list =
      activeFilter === 'all'
        ? projects
        : projects.filter((p) => p.categories.includes(activeFilter));

    galleryGrid.innerHTML = '';
    list.forEach((p, idx) => {
      const card = document.createElement('article');
      card.className = 'case-card reveal';
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');

      const num = String(idx + 1).padStart(2, '0');
      const total = String(list.length).padStart(2, '0');
      const metricsHtml = (p.metrics || [])
        .slice(0, 2)
        .map((m) => `<span class="case-metric-chip">${m.val} ${m.lbl}</span>`)
        .join('');
      const tagsHtml = (p.tags || [])
        .slice(0, 4)
        .map((t) => `<span>${t}</span>`)
        .join('');

      card.innerHTML = `
        <div class="case-mat">
          <div class="case-screen-frame">
            <img src="${p.cover}" alt="${p.title}" loading="lazy" />
          </div>
          ${p.images.length > 1 ? `<span class="case-screens-pill">${p.images.length} screens</span>` : ''}
        </div>
        <div class="case-body">
          <div class="case-meta-row">
            <span class="case-cat">${p.categoryLabel}</span>
            <span class="case-idx">${num} / ${total}</span>
          </div>
          <h3 class="case-title">${p.title}</h3>
          <p class="case-desc">${p.summary}</p>
          <div class="case-metrics-row">${metricsHtml}</div>
          <div class="case-bottom">
            <div class="case-tags">${tagsHtml}</div>
            <span class="case-cta">Inspect →</span>
          </div>
        </div>
      `;

      card.addEventListener('click', () => openDrawer(p));
      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openDrawer(p);
        }
      });
      galleryGrid.appendChild(card);
    });
    observeReveals();
  }

  function setDrawerImage(index) {
    if (!currentProject || !currentProject.images.length) return;
    currentImageIdx = (index + currentProject.images.length) % currentProject.images.length;
    const item = currentProject.images[currentImageIdx];
    drawerMainImg.src = item.src;
    drawerMainImg.alt = item.caption || currentProject.title;
    drawerCaption.textContent = item.caption || '';

    drawerThumbs.querySelectorAll('.drawer-thumb-btn').forEach((btn, idx) => {
      btn.classList.toggle('active', idx === currentImageIdx);
    });
  }

  function openDrawer(project) {
    currentProject = project;
    currentImageIdx = 0;

    drawerCat.textContent = project.categoryLabel;
    drawerRole.textContent = project.role;
    drawerTitle.textContent = project.title;
    drawerSummary.textContent = project.summary;
    drawerChallenge.textContent = project.challenge;
    drawerResults.textContent = project.results;

    drawerMetrics.innerHTML = (project.metrics || [])
      .map((m) => `<div><dt>${m.lbl}</dt><dd>${m.val}</dd></div>`)
      .join('');
    drawerHighlights.innerHTML = (project.highlights || []).map((h) => `<li>${h}</li>`).join('');
    drawerTags.innerHTML = (project.tags || []).map((t) => `<span>${t}</span>`).join('');

    drawerThumbs.innerHTML = '';
    if (project.images.length > 1) {
      project.images.forEach((imgObj, idx) => {
        const btn = document.createElement('button');
        btn.type = 'button';
        btn.className = 'drawer-thumb-btn' + (idx === 0 ? ' active' : '');
        btn.innerHTML = `<img src="${imgObj.src}" alt="${imgObj.caption}" />`;
        btn.addEventListener('click', () => setDrawerImage(idx));
        drawerThumbs.appendChild(btn);
      });
    }

    let actionsHtml = `
      <a href="https://www.fiverr.com/conal_khanh" target="_blank" rel="noopener noreferrer" class="btn-solid">
        Request Similar Project on Fiverr ↗
      </a>
      <a href="mailto:khanhcong460@gmail.com?subject=${encodeURIComponent('Project Inquiry: ' + project.title)}" class="btn-glass">
        Email Inquiry
      </a>
    `;
    if (project.githubUrl) {
      actionsHtml += `<a href="${project.githubUrl}" target="_blank" rel="noopener noreferrer" class="btn-glass">GitHub Repo ↗</a>`;
    }
    drawerActions.innerHTML = actionsHtml;

    setDrawerImage(0);
    drawer.classList.remove('hidden');
    document.body.style.overflow = 'hidden';
  }

  function closeDrawer() {
    drawer.classList.add('hidden');
    if (lightbox.classList.contains('hidden')) document.body.style.overflow = '';
  }

  // Command Palette
  function renderCmdResults(query) {
    const q = (query || '').trim().toLowerCase();
    const matches = projects.filter((p) => {
      if (!q) return true;
      return [p.title, p.categoryLabel, p.summary, ...(p.tags || [])].join(' ').toLowerCase().includes(q);
    });
    cmdResults.innerHTML = '';
    if (!matches.length) {
      cmdResults.innerHTML = '<div style="padding:16px;color:var(--text-dim);font-size:0.86rem;">No matching projects.</div>';
      return;
    }
    matches.forEach((p) => {
      const btn = document.createElement('button');
      btn.type = 'button';
      btn.className = 'cmd-row';
      btn.innerHTML = `<span class="cmd-row-title">${p.title}</span><span class="cmd-row-sub">${p.categoryLabel}</span>`;
      btn.addEventListener('click', () => {
        closeCmd();
        openDrawer(p);
      });
      cmdResults.appendChild(btn);
    });
  }

  function openCmd() {
    cmdModal.classList.remove('hidden');
    cmdInput.value = '';
    renderCmdResults('');
    setTimeout(() => cmdInput.focus(), 20);
  }
  function closeCmd() { cmdModal.classList.add('hidden'); }

  // Lightbox
  function openLightbox() {
    if (!currentProject) return;
    updateLightbox();
    lightbox.classList.remove('hidden');
  }
  function updateLightbox() {
    if (!currentProject) return;
    const item = currentProject.images[currentImageIdx];
    lightboxImg.src = item.src;
    lightboxCaption.textContent = `${currentImageIdx + 1} / ${currentProject.images.length} — ${item.caption}`;
    const multi = currentProject.images.length > 1;
    lightboxPrev.classList.toggle('hidden', !multi);
    lightboxNext.classList.toggle('hidden', !multi);
  }
  function closeLightbox() { lightbox.classList.add('hidden'); }

  // Events
  filterTabs.addEventListener('click', (e) => {
    const btn = e.target.closest('.filter-pill');
    if (!btn) return;
    activeFilter = btn.dataset.filter;
    filterTabs.querySelectorAll('.filter-pill').forEach((b) => b.classList.remove('active'));
    btn.classList.add('active');
    renderGallery();
  });

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      const root = document.documentElement;
      const next = root.getAttribute('data-theme') === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', next);
      themeIcon.textContent = next === 'dark' ? '☀' : '◐';
    });
  }

  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', () => {
      const email = copyEmailBtn.dataset.email;
      if (navigator.clipboard) {
        navigator.clipboard.writeText(email).then(() => {
          copyEmailLabel.textContent = 'Copied to clipboard ✓';
          setTimeout(() => (copyEmailLabel.textContent = email), 2000);
        });
      }
    });
  }

  cmdTrigger.addEventListener('click', openCmd);
  cmdInput.addEventListener('input', (e) => renderCmdResults(e.target.value));
  cmdModal.addEventListener('click', (e) => { if (e.target === cmdModal) closeCmd(); });

  drawerClose.addEventListener('click', closeDrawer);
  drawer.addEventListener('click', (e) => { if (e.target === drawer) closeDrawer(); });

  drawerZoomTrigger.addEventListener('click', openLightbox);
  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => { if (e.target === lightbox) closeLightbox(); });
  lightboxPrev.addEventListener('click', () => { setDrawerImage(currentImageIdx - 1); updateLightbox(); });
  lightboxNext.addEventListener('click', () => { setDrawerImage(currentImageIdx + 1); updateLightbox(); });

  document.addEventListener('keydown', (e) => {
    if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
      e.preventDefault();
      if (cmdModal.classList.contains('hidden')) openCmd();
      else closeCmd();
      return;
    }
    if (e.key === 'Escape') {
      if (!lightbox.classList.contains('hidden')) closeLightbox();
      else if (!cmdModal.classList.contains('hidden')) closeCmd();
      else if (!drawer.classList.contains('hidden')) closeDrawer();
    }
    if (!lightbox.classList.contains('hidden')) {
      if (e.key === 'ArrowLeft') { setDrawerImage(currentImageIdx - 1); updateLightbox(); }
      if (e.key === 'ArrowRight') { setDrawerImage(currentImageIdx + 1); updateLightbox(); }
    }
  });

  updateCounts();
  renderGallery();
  observeReveals();
})();
