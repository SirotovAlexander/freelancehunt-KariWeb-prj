$('#slider').roundSlider({
  handleShape: 'dot',
  radius: 150,
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
