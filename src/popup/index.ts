document.addEventListener('DOMContentLoaded', () => {
  const searchInput = document.getElementById('search-input') as HTMLInputElement;
  searchInput?.addEventListener('input', (e) => {
    const query = (e.target as HTMLInputElement).value;
    console.log('[Marginalia Popup] Searching for:', query);
  });
});