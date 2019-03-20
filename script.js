$(document).ready(function() {
  $('#button').click(function() {
    $('.empty').hide();
    var text1 = $('#one').val();
    var text2 = $('#two').val();
    if (text1 && text2) {
    $('#list').append(
      '<h5 class="card-title">'+
        text1+'&nbsp'+
        '<button class="btn btn-outline-secondary btn-sm switch">'+
        '&#8595;'+'</button>'+'&nbsp'+
        '<button class="btn btn-danger btn-sm clear-button">'+
        '&#10008;'+'</button>'+
      '</h5>'+
      '<p class="card-text">'+
        text2+
      '</p>');
    $('.switch').off();
    }
    else {
      alert('Заполните форму');
    }

    $('.clear-button').on('click', function(event) {
			$(this).parents('.card-title').remove();
		});

    $('.switch').click(function() {
      var ok = $(this).parent();
      var ok1 = $(ok).siblings('.card-text');
      $(ok1).slideToggle();
    });
  });
});
