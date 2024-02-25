let sliderWidth = 150;

const screenWidth = window.screen.width;
const firstDomElemForDelet = document.querySelector(
  '.calculator__positionWrapper'
);
const secondDomElemForDelet = document.querySelector('positionDesk__fix');

if (screenWidth > 1260) {
  firstDomElemForDelet.remove();
  sliderWidth = 200;
}

const valueQuantity = document.querySelector('.product__valueFirst');

const valueMinimal = document.querySelector('.product__valueSecond');
const rangeValueCalculator = document.querySelector(
  '.styled-slider.slider-progress'
);
const sliderValue = document.querySelector('.sliderValue');
const finishProfit = document.querySelector(
  '.profit-wrapper__text.profit-wrapper__text--fix'
);

rangeValueCalculator.addEventListener('input', textChange);

function textChange(evt) {
  valueMinimal.textContent = `${evt.currentTarget.valueAsNumber}`;
  finishProfit.textContent =
    valueMinimal.textContent * valueQuantity.textContent;

  if (valueQuantity.textContent <= 100) {
    finishProfit.textContent = Math.floor(
      ((valueQuantity.textContent * valueMinimal.textContent) / 100) * 25
    );
  } else if (
    valueQuantity.textContent > 100 &&
    valueQuantity.textContent <= 200
  ) {
    finishProfit.textContent = Math.floor(
      ((valueQuantity.textContent * valueMinimal.textContent) / 100) * 27
    );
  } else if (valueQuantity.textContent > 200) {
    finishProfit.textContent = Math.floor(
      ((valueQuantity.textContent * valueMinimal.textContent) / 100) * 30
    );
  }
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
  max: '300',
  change: function (args) {
    $('#range').html(args.value);
    valueQuantity.textContent = args.value;
    sliderValue.textContent = '';
    sliderValue.textContent = args.value + '' + '.шт';
    if (valueQuantity.textContent <= 100) {
      finishProfit.textContent = ((valueQuantity.textContent * 800) / 100) * 25;
    } else if (
      valueQuantity.textContent > 100 &&
      valueQuantity.textContent <= 200
    ) {
      finishProfit.textContent = ((valueQuantity.textContent * 800) / 100) * 27;
    } else if (valueQuantity.textContent > 200) {
      finishProfit.textContent = ((valueQuantity.textContent * 800) / 100) * 30;
    }
  },
  // drag: function (args) {
  //   console.log(args.value);
  //   $('#range1').html(args.value);
  // },
});
