$(document).ready(function() {
  $('#button').click(function() {
    $('.empty').hide();
    var text1 = $('#one').val();
    var text2 = $('#two').val();
    if (text1 && text2) {
    $('#list').append(
      '<h5 class="card-title">'+
        text1+
      '</h5>'+
      '<p class="card-text">'+
      text2+
      '</p>');
    }
    else {
      alert('Заполните форму');
    }
    $('#clear-button').click(function() {
			$(this).parents('.cards').remove();
		});
  });
});
