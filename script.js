const menuToggle = document.getElementById('menuToggle');
const mainNav = document.getElementById('mainNav');
menuToggle.addEventListener('click', () => {
  const open = mainNav.classList.toggle('open');
  menuToggle.setAttribute('aria-expanded', String(open));
  menuToggle.setAttribute('aria-label', open ? 'Close navigation' : 'Open navigation');
  menuToggle.textContent = open ? '×' : '☰';
});
mainNav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  mainNav.classList.remove('open');
  menuToggle.setAttribute('aria-expanded', 'false');
  menuToggle.textContent = '☰';
}));
document.querySelectorAll('.chapter-row').forEach(button => {
  button.addEventListener('click', () => {
    const preview = document.getElementById(`preview-${button.dataset.chapter}`);
    const open = preview.classList.toggle('open');
    button.querySelector('.chapter-status').innerHTML = `${open ? 'CLOSE' : 'PREVIEW'} <b>${open ? '−' : '＋'}</b>`;
  });
});
document.getElementById('year').textContent = new Date().getFullYear();
