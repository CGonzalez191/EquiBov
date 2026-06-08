function showToast(msg, type) {
  const existing = document.querySelectorAll('.toast');
  if (existing.length >= 3) existing[0].remove();

  const colors = {
    success: { bg: '#EBF3E8', text: '#3B6D11', border: '#C0DD97', icon: '\u2713' },
    error:   { bg: '#F5EAEA', text: '#8B2E2E', border: '#E0AAAA', icon: '\u2717' },
    info:    { bg: '#FDF3E3', text: '#8B5E1A', border: '#F0D09A', icon: '\u2139' }
  };
  const c = colors[type] || colors.info;

  const el = document.createElement('div');
  el.className = 'toast';
  el.innerHTML = `<span class="toast-icon">${c.icon}</span><span class="toast-msg">${msg}</span><button class="toast-close" onclick="this.parentElement.remove()">&times;</button>`;
  el.style.cssText = `background:${c.bg};color:${c.text};border:1px solid ${c.border};`;
  document.body.appendChild(el);

  requestAnimationFrame(() => el.classList.add('show'));
  setTimeout(() => { if (el.isConnected) { el.classList.remove('show'); setTimeout(() => el.remove(), 300); } }, 3500);
}

function showConfirm(msg) {
  return new Promise(resolve => {
    const overlay = document.createElement('div');
    overlay.className = 'modal-overlay';
    overlay.style.cssText = 'display:flex;animation:fadeIn 0.2s ease forwards;';

    const box = document.createElement('div');
    box.className = 'modal';
    box.style.cssText = 'max-width:400px;padding:28px;';

    box.innerHTML = `
      <p style="font-size:12px;color:var(--carbon);line-height:1.6;letter-spacing:0.04em;margin-bottom:24px;">${msg}</p>
      <div class="modal-actions">
        <button class="btn-cancel" id="confirmNo">Cancelar</button>
        <button class="btn-primary" id="confirmYes" style="background:#8B2E2E;">Eliminar</button>
      </div>`;

    overlay.appendChild(box);
    document.body.appendChild(overlay);

    const cleanup = val => { overlay.remove(); resolve(val); };
    document.getElementById('confirmYes').addEventListener('click', () => cleanup(true));
    document.getElementById('confirmNo').addEventListener('click', () => cleanup(false));
    overlay.addEventListener('click', e => { if (e.target === overlay) cleanup(false); });
  });
}
