$(document).ready(function() {
  $('button').click(function() {
    $('.empty').hide();
    var text1 = $('#one').val();
    var text2 = $('#two').val();
    if (text1 && text2) {
    $('#list').append(
      '<div class="cards">'+
        '<div class="cards1">'+
          '<button class="clear-button">'+
          '</button>'+
          '<button class="switch">'+
          '</button>'+
          text1+
        '</div>'+
        '<div class="cards2">'+
          text2+
        '</div>'+
      '</div>');
    $('.switch').off();
    }
    else { 
      alert('Заполните форму');
    }
  });
});