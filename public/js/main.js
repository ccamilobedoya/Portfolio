var itemIndex = 1;
var nextBx = 0;

$('.arrow-rigth').click(function(){
  if ($('.b-item').length > itemIndex) {
    var nextLeft = -itemIndex * 100;
    $('.b1').css('left', nextLeft + 'vw');
    itemIndex++;
    moveBackground(nextLeft);
  }
});

$('.arrow-left').click(function(){
  if (itemIndex > 1) {
    itemIndex--;
    var nextLeft = -(itemIndex * 100) + 100;
    $('.b1').css('left', nextLeft + 'vw');
    moveBackground(nextLeft);
  }
});

function moveBackground (actualPos) {
  for (i=2; i <= 6; i++){
    nextBx = actualPos / (i*(i+0.5));
    $('.b' + i).css('background-position-x', nextBx + 'vw');
    //$('.b' + i).css('transform', 'translate3d('+ nextBx + 'vw,0,0)');
  }
}
