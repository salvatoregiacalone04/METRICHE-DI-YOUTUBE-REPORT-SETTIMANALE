const toast = document.querySelector('#toast');
document.querySelector('#exportButton').addEventListener('click', () => {
  toast.classList.add('show');
  setTimeout(() => toast.classList.remove('show'), 2600);
});

document.querySelector('#periodButton').addEventListener('click', (event) => {
  const periods = ['12 — 18 ago 2024', '05 — 11 ago 2024', '29 lug — 04 ago 2024'];
  const current = periods.indexOf(event.currentTarget.firstChild.textContent.trim());
  event.currentTarget.firstChild.textContent = ` ${periods[(current + 1) % periods.length]} `;
});
