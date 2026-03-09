document.addEventListener("DOMContentLoaded", () => {
  const arrows = document.querySelectorAll(".arrow-down-svg, .arrow-down-svg-second");

  arrows.forEach((arrow) => {
    let isAnimating = false;

    arrow.addEventListener("mouseenter", () => {
      if (isAnimating) {
        return;
      }

      isAnimating = true;
      arrow.classList.add("arrow-bounce-anim");

      const onAnimationEnd = () => {
        arrow.classList.remove("arrow-bounce-anim");
        isAnimating = false;
        arrow.removeEventListener("animationend", onAnimationEnd);
      };

      arrow.addEventListener("animationend", onAnimationEnd);
    });
  });
});
