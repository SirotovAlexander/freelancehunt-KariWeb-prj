const valueQuantity = document.querySelector('.product__valueFirst');
const valueMinimal = document.querySelector('.product__valueSecond');
const rangeValueCalculator = document.querySelector(
  '.styled-slider.slider-progress'
);
const sliderValue = document.querySelector('.sliderValue');
// const profitValue = document.querySelector(
//   '."profit-wrapper__text.profit-wrapper__text--fix'
// );
// console.dir(valueQuantity.textContent);
// console.dir(sliderValue.textContent);
// console.dir(rangeValueCalculator);
rangeValueCalculator.addEventListener('input', textChange);

function textChange(evt) {
  valueMinimal.textContent = `${evt.currentTarget.valueAsNumber}`;
}

const screenWidth = window.screen.width;

let sliderWidth = 0;
let sliderID = '';

if (screenWidth <= 1260) {
  sliderWidth = 150;
  sliderID = '#slider';
}

if (screenWidth > 1260) {
  sliderWidth = 200;
  sliderID = '#sliderR';
}

$(`${sliderID}`).roundSlider({
  handleShape: 'dot',
  radius: `${sliderWidth}`,
  value: 0,
  handleSize: '+25',
  startAngle: 90,
  lineCap: 'square',
  sliderType: 'min-range',
  width: 12,
  change: function (args) {
    // console.log(args.value);
    $('#range').html(args.value);
    valueQuantity.textContent = args.value;
    sliderValue.textContent = '';
    sliderValue.textContent = args.value + '' + '.шт';
  },
  // drag: function (args) {
  //   $('#range1').html(args.value);
  // },
});
