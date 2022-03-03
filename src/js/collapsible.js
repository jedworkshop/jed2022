
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


const allButton = document.querySelector('[class="btn_abstract_all"]');
allButton.addEventListener('click', (event) => {
  const element = event.target;
  const selector = element.getAttribute('data-target');

  const action = element.getAttribute('data-action');
  console.log(action);
  if (action === 'open') {
    document.querySelectorAll(selector).forEach(target => {
      target.classList['add']('show');
      element.setAttribute('data-action', 'close');
      element.innerHTML = '全ての概要を閉じる';
    });
  } else {
    document.querySelectorAll(selector).forEach(target => {
      target.classList['remove']('show');
      element.setAttribute('data-action', 'open');
      element.innerHTML = '全ての概要を開く';
    });
  }
}, false);