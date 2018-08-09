document.querySelectorAll('.modal_close').forEach(b => {
  b.onclick = function() {
    document.querySelectorAll('.modal').forEach(m => {
      m.classList.toggle('modal_open', false);
      document.querySelector('body').style.overflow = 'auto';
    });
  }
});

const TEMPS = {
  'manual': -10,
  'cold': 0,
  'warm': 23,
  'hot': 30
}

document.querySelectorAll('.modal__filter-item_temp').forEach(l => {
  l.onclick = function() {
    document.querySelector('.adjust-bar_theme_temp').value = TEMPS[this.id];
    document.querySelector('.modal_temp .modal__value').innerHTML = TEMPS[this.id] > 0 ? '+' + TEMPS[this.id] : TEMPS[this.id];
  }
});

const showModal = function(selector) {
  document.querySelector(selector).classList.toggle('modal_open', true);
  document.querySelector('body').style.overflow = 'hidden';
}

document.querySelectorAll('.panel_temp').forEach(p => {
  p.onclick = function() {
    showModal('.modal_temp');
  }
});

document.querySelectorAll('.panel_lamp').forEach(p => {
  p.onclick = function() {
    showModal('.modal_light');
  }
});

document.querySelectorAll('.panel_floor').forEach(p => {
  p.onclick = function() {
    showModal('.modal_knob');
  }
});
