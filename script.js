/* Collapsible toggles */
    document.querySelectorAll('.collapsible').forEach(section => {
      const btn = section.querySelector('.toggle-btn');
      const header = section.querySelector('.collapsible-header');
      header.addEventListener('click', () => {
        const open = section.classList.toggle('open');
        btn.textContent = open ? '−' : '+';
      });
    });

    /* Optional: remember checklist ticks per page */
    (function(){
      const list = document.getElementById('waste-checklist');
      if (!list) return;
      const storageKey = 'dg-waste-checklist:' + location.pathname;

      // Restore
      try {
        const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
        list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
          if (saved[cb.dataset.key]) cb.checked = true;
        });
      } catch(e){ /* ignore */ }

      // Save on change
      list.addEventListener('change', () => {
        const state = {};
        list.querySelectorAll('input[type="checkbox"]').forEach(cb => {
          state[cb.dataset.key] = cb.checked;
        });
        try { localStorage.setItem(storageKey, JSON.stringify(state)); } catch(e){ /* ignore */ }
      });
    })();