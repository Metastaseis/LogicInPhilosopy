document.addEventListener('DOMContentLoaded', () => {
  const header = document.getElementById('site-header');
  if (header) {
    fetch('/components/header.html')
      .then(response => response.text())
      .then(html => {
        header.innerHTML = html;
      })
      .catch(err => console.error('Failed to load header:', err));
  }

  const footer = document.getElementById('site-footer');
  if (footer) {
    fetch('/components/footer.html')
      .then(response => response.text())
      .then(html => {
        footer.innerHTML = html;
      })
      .catch(err => console.error('Failed to load footer:', err));
  }
});
