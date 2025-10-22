document.addEventListener('DOMContentLoaded', function() {
  const arrows = document.querySelectorAll('.arrow-down-svg, .arrow-down-svg-second');
  arrows.forEach(function(arrow) {
    let animating = false;
    arrow.addEventListener('mouseenter', function() {
      if (animating) return;
      animating = true;
      arrow.classList.add('arrow-bounce-anim');
      arrow.addEventListener('animationend', function handler() {
        arrow.classList.remove('arrow-bounce-anim');
        animating = false;
        arrow.removeEventListener('animationend', handler);
      });
    });
  });
});
