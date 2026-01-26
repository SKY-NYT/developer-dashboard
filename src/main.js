const resources = [
  { name: 'MDN Web Docs', category: 'Documentation', link: 'https://developer.mozilla.org' },
  { name: 'Vite Guide', category: 'Build Tools', link: 'https://vitejs.dev' },
  { name: 'Frontend Masters', category: 'Learning', link: 'https://frontendmasters.com' },
  { name: 'Stack Overflow', category: 'Community', link: 'https://stackoverflow.com' },
  { name: 'GitHub', category: 'Version Control', link: 'https://github.com' },
  { name: 'Can I Use', category: 'Browser Support', link: 'https://caniuse.com' }
];

const grid = document.querySelector('#resource-grid');
const searchInput = document.querySelector('#search');

const render = (data) => {
  if (data.length === 0) {
    grid.innerHTML = `<p style="grid-column: 1/-1; text-align: center; color: #64748b; padding: 40px;">No resources found matching your search.</p>`;
    return;
  }

  grid.innerHTML = data.map(item => `
    <article class="card">
      <div class="category">${item.category}</div>
      <h3>${item.name}</h3>
      <a href="${item.link}" target="_blank" rel="noopener noreferrer">
        Open Resource 
        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path><polyline points="15 3 21 3 21 9"></polyline><line x1="10" y1="14" x2="21" y2="3"></line></svg>
      </a>
    </article>
  `).join('');
};

searchInput.addEventListener('input', (e) => {
  const term = e.target.value.toLowerCase();
  const filtered = resources.filter(res => 
    res.name.toLowerCase().includes(term) || 
    res.category.toLowerCase().includes(term)
  );
  render(filtered);
});


render(resources);