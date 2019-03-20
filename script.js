$(document).ready(function() {
  $('#button').click(function() {
    var text1 = $('#one').val();
    var text2 = $('#two').val();
    if (text1 && text2) {
      $('#empty').hide();
      $('#list').append(
      '<div class="card">'+
        '<div class="card-body">'+
          '<h5 class="card-title">'+            

            '<button class="btn btn-danger btn-sm float-right clear-button">'+
            '&#10008;'+
            '</button>'+

            '<button class="btn btn-outline-secondary btn-sm float-right switch">'+
            '&#8595;'+
            '</button>'+
            text1+

          '</h5>'+
          '<p class="card-text">'+
            text2+
          '</p>'+
        '</div>'+
      '</div>');
      $('.switch').off();
    } else {
      alert('Заполните форму');
    }

    $('.clear-button').on('click', function(event) {
      $(this).parent().parent().parent().remove();
    });

    $('.switch').click(function() {
      var ok = $(this).parent();
      var ok1 = $(ok).siblings('.card-text');
      $(ok1).slideToggle();
    });
  });
});