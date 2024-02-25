// const screenWidth = window.screen.width;

// if (screenWidth <= 1260) {
//   sliderWidth = 150;
//   sliderID = '#slider';
// }

// if (screenWidth > 1260) {
//   sliderWidth = 200;
//   sliderID = '#sliderR';
// }
const valueQuantity = document.getElementById('#mobileValue__First');
const valueMinimal = document.getElementById('#mobileRange__Calc');
const rangeValueCalculator = document.getElementById('#mobileRange__Calc');
const sliderValue = document.getElementById('#mobileSlider__Value');
const finishProfit = document.getElementById('#mobileProdit__Value');
console.log(rangeValueCalculator);
rangeValueCalculator.addEventListener('input', textChange);

function textChange(evt) {
  valueMinimal.textContent = `${evt.currentTarget.valueAsNumber}`;
  finishProfit.textContent =
    valueMinimal.textContent * valueQuantity.textContent;

  if (valueQuantity.textContent <= 100) {
    finishProfit.textContent =
      ((valueQuantity.textContent * valueMinimal.textContent) / 100) * 25;
  } else if (
    valueQuantity.textContent > 100 &&
    valueQuantity.textContent <= 200
  ) {
    finishProfit.textContent =
      ((valueQuantity.textContent * valueMinimal.textContent) / 100) * 27;
  } else if (valueQuantity.textContent > 200) {
    finishProfit.textContent =
      ((valueQuantity.textContent * valueMinimal.textContent) / 100) * 30;
  }
}

let sliderWidth = 0;
let sliderID = '';

$('#sliderR').roundSlider({
  handleShape: 'dot',
  radius: 200,
  value: 0,
  handleSize: '+25',
  startAngle: 90,
  lineCap: 'square',
  sliderType: 'min-range',
  width: 12,
  max: '300',
  change: function (args) {
    // console.log(args.value);
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

    // finishProfit.textContent = valueQuantity.textContent * 800;
  },
  // drag: function (args) {
  //   console.log(args.value);
  //   $('#range1').html(args.value);
  // },
});
