var backdrop = document.querySelector('.backdrop');
var modal = document.querySelector('.modal');
var selectPlanButtons = document.querySelectorAll('.plan button');
var toggleButton = document.querySelector('.toggle-button');
var mobileNav = document.querySelector('.mobile-nav');

// console.dir(backdrop);
for (var i = 0; i < selectPlanButtons.length; i++) {
  selectPlanButtons[i].addEventListener('click', function() {
    modal.style.display = 'block';
    backdrop.style.display = 'block';
  });
}

backdrop.addEventListener("click", function() {
  mobileNav.style.display = 'none';
  this.closeModal();
});

toggleButton.addEventListener('click', function() {
  mobileNav.style.display = 'block';
  backdrop.style.display = 'block';
});
