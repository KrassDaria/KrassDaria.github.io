const hamburger = document.querySelector('.hamburger'),
      menu = document.querySelector('.menu'),
      closeElem = document.querySelector('.menu__close');

hamburger.addEventListener('click', () => {
      menu.classList.add('active') 
});

closeElem.addEventListener('click', () => {
  menu.classList.remove('active');
});

const counters = document.querySelectorAll('.skills__ratings-counter'),
      lines = document.querySelectorAll('.skills__ratings-line span');

counters.forEach( (item, i) => {
  lines[i].style.width = item.innerHTML;
});




// Отправка данных на почту

$('form').submit(function(e) {
  e.preventDefault();

  if (!$(this).valid()){
    return;
  }

  $.ajax({
    type: "POST",
    url: "mailer/smart.php",
    data: $(this).serialize()
  }).done(function(){
    $(this).find("input").val("");

    // $('#consultation, #order').fadeOut(); /* отвечает за появление благодарственного окна, у меня его нет  */
    // $('.overlay, #thanks').fadeIn('slow'); /* отвечает за появление благодарственного окна, у меня его нет  */


    $('form').trigger('reset');
  });
  return false;
});