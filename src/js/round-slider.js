$('#slider').roundSlider({
  handleShape: 'dot',
  radius: 150,
  value: 0,
  handleSize: '+25',
  startAngle: 90,
  lineCap: 'square',
  sliderType: 'min-range',
  width: 12,
});

console.log($('#slider').roundSlider()[0].innerText);
