$(document).ready(function() {

  $("#tweet-content").on('click', function(){
    $(".tweet-compose").animate({
      height: "5em"
    }, 10 );
  });


$('#tweet-content').on('click', function () {
  $('#tweet-controls').show();
});


var maxLength = 140;
$('textarea').keyup(function() {

  var length = $(this).val().length;
  var length = maxLength-length;

  $('#char-count').text(length);

  if ($(this).val().length > (maxLength - 10)) {
    $('#char-count').css('color', '#ef8383');
    }
    else {
      $('#char-count').css('color', '#999');
    }

  if ( $(this).val().length > maxLength ) {
    $('.button').prop('disabled', true);
  }
  else { $('.button').prop('disabled', false);
  }
});



$("#tweet-submit").on('click', function(){

  var $tweet = $('.tweet').first().clone();
  var enteredText = $('textarea').first().val();

  $tweet.find('.avatar').attr('src', 'img/alagoon.jpg');
  $tweet.find('.fullname').text('Your Name Here');
  $tweet.find('.username').text('@myNameHere');
  $tweet.find('.tweet-text').text(enteredText);
  $('#stream').first().prepend($tweet);
  $('textarea').val('');
});

















});
