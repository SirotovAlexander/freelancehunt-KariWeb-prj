const screenWidth = window.screen.width;
console.log(screenWidth);

let sliderWidth = 0;
if (screenWidth <= 1260) {
  sliderWidth = 150;
} else {
  sliderWidth = 200;
}
$('#slider').roundSlider({
  handleShape: 'dot',
  radius: `${sliderWidth}`,
  value: 0,
  handleSize: '+25',
  startAngle: 90,
  lineCap: 'square',
  sliderType: 'min-range',
  width: 12,
  change: function (args) {
    console.log(args.value);
    $('#range').html(args.value);
  },
  // drag: function (args) {
  //   $('#range1').html(args.value);
  // },
});

// console.dir($('#slider').roundSlider()[0]);
