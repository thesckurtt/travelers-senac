$('.div-btn-travel').on('click', function() {
  $(this).attr('transition-style', 'in:wipe:right');

  // Aguarda 500ms antes de remover o atributo
  setTimeout(() => {
    $(this).removeAttr('transition-style');
  }, 500); // Ajuste o tempo conforme necessário
});
AOS.init();