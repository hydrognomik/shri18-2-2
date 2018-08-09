const output = document.querySelector('.modal__value');
const rangeSLider = document.querySelector('.adjust-bar.adjust-bar_theme_temp');

rangeSLider.oninput = function() {
  output.innerHTML = this.value > 0 ? '+' + this.value : this.value;
}
