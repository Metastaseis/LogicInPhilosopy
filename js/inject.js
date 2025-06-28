document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  const footer = document.getElementById('site-footer');
  const promises = [];

  if (header) {
    const p = fetch('/components/header.html')
      .then(response => response.text())
      .then(html => {
        header.innerHTML = html;
      })
      .catch(err => console.error('Failed to load header:', err));
    promises.push(p);
  }

  if (footer) {
    const p = fetch('/components/footer.html')
      .then(response => response.text())
      .then(html => {
        footer.innerHTML = html;
      })
      .catch(err => console.error('Failed to load footer:', err));
    promises.push(p);
  }

  Promise.all(promises).then(() => {
    document.dispatchEvent(new CustomEvent('componentsLoaded'));
  });
});
