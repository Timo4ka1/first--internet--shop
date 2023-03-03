// Сладйер на головній сторінці
$(document).ready(function () {
  $('.section__slider').slick({

  });
});

// Слайдер на сторінці товару
$(document).ready(function () {
  $('.product__galery').slick({
    dots: true,
    adaptiveHeight: true,
  });
});

function onEntry(entry) {
  entry.forEach(change => {
    if (change.isIntersecting) {
      change.target.classList.add('element-show');
    }
  });
}
let options = { threshold: [0.5] };
let observer = new IntersectionObserver(onEntry, options);
let elements = document.querySelectorAll('.element-animation');
for (let elm of elements) {
  observer.observe(elm);
}