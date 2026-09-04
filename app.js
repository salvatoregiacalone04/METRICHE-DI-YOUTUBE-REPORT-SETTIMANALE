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

const metricsTrack = document.querySelector('.metrics-track');
const metricDots = document.querySelectorAll('.metrics-dots button');
if (metricsTrack && metricDots.length) {
  metricsTrack.addEventListener('scroll', () => {
    const current = Math.round(metricsTrack.scrollLeft / metricsTrack.clientWidth);
    metricDots.forEach((dot, index) => dot.classList.toggle('active', index === current));
  }, { passive: true });
  metricDots.forEach((dot, index) => dot.addEventListener('click', () => {
    metricsTrack.scrollTo({ left: index * metricsTrack.clientWidth, behavior: 'smooth' });
  }));
}
