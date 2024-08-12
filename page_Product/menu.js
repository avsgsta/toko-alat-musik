const buttons = document.querySelectorAll('#arnold'),
  toaste = document.querySelector('.toaste');
(closeIcon = document.querySelector('.close')), (progress = document.querySelector('.progress'));

let timer1, timer2;

buttons.forEach((button) => {
  button.addEventListener('click', () => {
    toaste.classList.add('active');
    progress.classList.add('active');

    timer1 = setTimeout(() => {
      toaste.classList.remove('active');
    }, 2200);

    timer2 = setTimeout(() => {
      progress.classList.remove('active');
    }, 2600);
  });
});

closeIcon.addEventListener('click', () => {
  toaste.classList.remove('active');

  setTimeout(() => {
    progress.classList.remove('active');
  }, 300);

  clearTimeout(timer1);
  clearTimeout(timer2);
});

let navbar = document.querySelector('.navbar');
