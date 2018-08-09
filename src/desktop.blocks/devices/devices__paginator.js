const arrowLeftDevs = document.querySelector('.devices__paginator .paginator__arrow_left');
const arrowRightDevs = document.querySelector('.devices__paginator .paginator__arrow_right');
const panelCountDevs = document.querySelectorAll('.devices__panel').length;
const devices = document.querySelector('.devices');
const pagiantorDevs = document.querySelector('.devices__paginator');
let currentPageDevs = 1;

pagiantorDevs.classList.toggle('paginator_hide', panelCountDevs < 7);

arrowRightDevs.addEventListener('click', function () {
    currentPageDevs += 1;
    arrowLeftDevs.classList.toggle('paginator__arrow_disabled', currentPageDevs === 1);
    devices.scroll({
      top: 0,
      left: 1366,
      behavior: 'smooth'
    });
});

arrowLeftDevs.addEventListener('click', function () {
  if (currentPageDevs > 1) {
    currentPageDevs -= 1;
    arrowLeftDevs.classList.toggle('paginator__arrow_disabled', currentPageDevs === 1);
    devices.scroll({
      top: 0,
      left: -1366,
      behavior: 'smooth'
    });
  }
});
