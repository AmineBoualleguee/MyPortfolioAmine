(function () {
  'use strict';
  var motion = matchMedia('(prefers-reduced-motion: reduce)');
  motion.addEventListener('change',function () {
    REDUCED = motion.matches;
    if (motion.matches) {
      document.querySelectorAll('[data-rv]').forEach(function (node) { node.classList.add('in'); });
    }
    window.dispatchEvent(new Event('ab:motion'));
  });
  var observer;
  if ('IntersectionObserver' in window) observer = new IntersectionObserver(function (entries) {
    var position = 0;
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      entry.target.style.setProperty('--entry-delay',Math.min(position++ * 45,135) + 'ms');
      if (!motion.matches) entry.target.classList.add('project-enter');
      observer.unobserve(entry.target);
    });
  },{threshold:0.08});
  window.observeProjectRows = function () {
    if (!observer) return;
    observer.disconnect();
    document.querySelectorAll('#projRows .row').forEach(function (row) {
      if (!row.classList.contains('project-enter')) observer.observe(row);
    });
  };
  window.observeProjectRows();
})();
