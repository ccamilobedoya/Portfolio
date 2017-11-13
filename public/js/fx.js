//var absoluteOffset = anime.timeline();
// absoluteOffset
//   .add({
//     targets: '#item .item-back',
//     translateX: [{value: '-105%'},{value: '-97%'},{value: '-100%'}],
//     duration: 400,
//     easing: 'easeInExpo',
//     offset: 100 // Starts at 1000ms of the timeline
//   });

var cssSelector = anime({
  targets: '#item .item-back',
  translateX: '-100%',
  duration: 850,
  elasticity: 230,
  delay: 100
});
