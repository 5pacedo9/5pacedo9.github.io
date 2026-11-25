(() => {
  'use strict';
  const root = document.querySelector('.portfolio-page');
  if (!root) return;

  // Projects are always shown in page order. Include complete credits when printing.
  let printState;
  window.addEventListener('beforeprint', () => {
    printState = [...root.querySelectorAll('details')].map(detail => [detail, detail.open]);
    printState.forEach(([detail]) => { detail.open = true; });
  });
  window.addEventListener('afterprint', () => {
    if (!printState) return;
    printState.forEach(([detail, wasOpen]) => { detail.open = wasOpen; });
    printState = undefined;
  });
})();
