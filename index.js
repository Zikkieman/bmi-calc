const form = document.querySelector('form');
form.addEventListener('submit', function (event) {
  event.preventDefault();
});
const button = document.querySelector('button');

function bmiCalc() {
  const height = parseFloat(document.querySelector('#height').value);
  const weight = parseFloat(document.querySelector('#weight').value);

  const result = document.getElementById('results');

  console.log(weight, height);

  bmi = (weight) / Math.pow(height , 2);
  const resultBmi = Math.round(bmi * 10) / 10
  if (height === 0 || isNaN(height)) {
    result.innerHTML = 'Please input a valid height';
  } else if (weight === 0 || isNaN(weight)) {
    result.innerHTML = 'Please input a valid weight';
  } else {
    result.innerHTML = resultBmi;
  }
  console.log(resultBmi);
}

button.addEventListener('click', function () {
  bmiCalc();
});
