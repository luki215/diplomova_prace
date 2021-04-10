const changeEv = new Event('change');
const cartButtonsComponents = document.getElementsByClassName('c-cart-buttons');

for (let btnC of cartButtonsComponents) {
  const minus = btnC.querySelector('.input-group-prepend button');
  const plus = btnC.querySelector('.input-group-append button');
  const input = btnC.querySelector('input[type="number"]');

  minus.addEventListener('click', () => {
    input.value = Math.max(1, +input.value - 1);
    input.dispatchEvent(changeEv);
  });

  plus.addEventListener('click', () => {
    input.value = Math.min(99, +input.value + 1);
    input.dispatchEvent(changeEv);
  });

  input.addEventListener('change', function () {
    if (this.value <= 1) {
      minus.setAttribute('disabled', true);
    } else {
      minus.removeAttribute('disabled');
    }
    if (this.value >= 99) {
      plus.setAttribute('disabled', true);
    } else {
      plus.removeAttribute('disabled');
    }
  });
}

// init toasts
$('.toast').toast({ delay: 5000 });
$('.toast').toast('show');
