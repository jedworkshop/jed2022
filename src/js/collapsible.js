
const buttons = Array.from(document.querySelectorAll('[class="btn_abstract"]'));

window.addEventListener('click', (event) => {
  const element = event.target;
  if (buttons.includes(element)) {
    element.classList['toggle']('clicked');

    const selector = element.getAttribute('data-target');
    const target = document.querySelector(selector);
    target.classList['toggle']('show');
  }
}, false);