$(document).ready(function() {

  $('.tweet').on('click', function () {
    $('.stats').hide();
  });

  $('.tweet').on('click', function () {
    var $stats = $(this).find('.stats');
    $stats.show();
  });

  $("#tweet-content").on('click', function(){
    var $tweetComp = $(this).find(".tweet-compose");
    $tweetComp.animate({
      height: "5em"
    }, 10 );
    $('#tweet-controls').show();
  });

$('#main').on('click', function () {
  $(".tweet-compose").animate({
    height: "2.5em"
  }, 10 );
  $('#tweet-controls').hide();
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

  if($(this).val().length < 1 ) {
    $('.button').prop('disabled', true);
  }
  else { $('.button').prop('disabled', false);
  }
});



$("#tweet-submit").on('click', function(){
  var $newTweet = $('.tweet').first().clone(true, true);

  var enteredText = $('textarea').first().val();

  $newTweet.find('.avatar').attr('src', 'img/alagoon.jpg');
  $newTweet.find('.fullname').text('Mark Ferris');
  $newTweet.find('.username').text('@littleferris');
  $newTweet.find('.tweet-text').text(enteredText);
  $newTweet.find('.num-favorites').text('0');
  $newTweet.find('.num-retweets').text('0');
  $('#stream').first().prepend($newTweet);
  $('textarea').val('');
});

var now = new Date();
jQuery("time.timeago").timeago();














});
