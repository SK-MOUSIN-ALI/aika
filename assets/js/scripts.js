$(document).ready(function() {
  // Password Hide & Show
  $('#togglePassword').on('click', function() {
      let passwordField = $('#password');
      let passwordFieldType = passwordField.attr('type');
      if (passwordFieldType === 'password') {passwordField.attr('type', 'text');} else {passwordField.attr('type', 'password');}
      $(this).find('i').toggleClass('ri-eye-fill ri-eye-off-fill');
  });

  // Sticky Header
  var nav = document.querySelector(".navbar");
  window.onscroll = function () {if (document.documentElement.scrollTop > 20) {nav.classList.add("scroll-on");}else {nav.classList.remove("scroll-on");}
  }
});

