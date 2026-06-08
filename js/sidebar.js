function createSidebar(active) {
  const icons = {
    dashboard: '<svg class="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="1" y="1" width="6" height="6" rx="1"/><rect x="9" y="1" width="6" height="6" rx="1"/><rect x="1" y="9" width="6" height="6" rx="1"/><rect x="9" y="9" width="6" height="6" rx="1"/></svg>',
    propietarios: '<svg class="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="8" cy="5" r="3"/><path d="M2 14c0-3.3 2.7-6 6-6s6 2.7 6 6"/></svg>',
    haciendas: '<svg class="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M1 14V7l7-5 7 5v7H1z"/><rect x="5.5" y="9" width="5" height="5"/></svg>',
    toros: '<svg class="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><ellipse cx="8" cy="9" rx="5" ry="4"/><path d="M3 7C1.5 5.5 1 3 3 2M13 7c1.5-1.5 2-4 0-5"/><circle cx="8" cy="4" r="1.5"/></svg>',
    certificados: '<svg class="nav-icon" viewBox="0 0 16 16" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="2" y="1" width="12" height="14" rx="1"/><path d="M5 5h6M5 8h6M5 11h3"/></svg>'
  };

  const items = [
    { id: 'dashboard',    label: 'Dashboard',    href: 'dashboard.html',         section: 'Principal' },
    { id: 'propietarios', label: 'Propietarios', href: 'propietarios.html',      section: 'Gesti&oacute;n' },
    { id: 'haciendas',    label: 'Haciendas',    href: 'haciendas.html',         section: null },
    { id: 'toros',        label: 'Toros',        href: 'toros.html',             section: null },
    { id: 'certificados', label: 'Certificados', href: 'certificados.html', section: null },
  ];

  let navHTML = '';
  items.forEach(item => {
    if (item.section) {
      navHTML += `<div class="nav-section-label">${item.section}</div>`;
    }
    navHTML += `<a class="nav-item${active === item.id ? ' active' : ''}" href="${item.href}">${icons[item.id]}${item.label}</a>`;
  });

  const html = `<div class="sidebar-overlay" id="sidebarOverlay"></div>
  <aside class="sidebar">
    <button class="hamburger" id="sidebarToggle" aria-label="Men&uacute;">
      <span></span><span></span><span></span>
    </button>
    <div class="sidebar-brand">
      <h1>EQUIBOV</h1>
      <span>Androlog&iacute;a Bovina</span>
    </div>
    <nav class="sidebar-nav">${navHTML}</nav>
    <div class="sidebar-footer">
      <div class="user-info" id="userEmail">cargando...</div>
      <button class="btn-logout" id="btnLogout">Cerrar sesi&oacute;n</button>
    </div>
  </aside>`;

  setTimeout(() => {
    const toggle = document.getElementById('sidebarToggle');
    const sidebar = document.querySelector('.sidebar');
    const overlay = document.getElementById('sidebarOverlay');
    if (toggle && sidebar && overlay) {
      toggle.addEventListener('click', () => {
        sidebar.classList.toggle('open');
        overlay.classList.toggle('open');
      });
      overlay.addEventListener('click', () => {
        sidebar.classList.remove('open');
        overlay.classList.remove('open');
      });
    }
  }, 0);

  return html;
}
