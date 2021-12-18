const calculate = document.getElementById('calculate');

function bmi () {
    const name = document.getElementById('name').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const result1 = document.getElementById('result1');

    if (name !== '' && height !== '' && weight !== '') {

        const valueBMI = (weight / (height * height)).toFixed(1);

        let classification = '';

        if (valueBMI < 18.5){
            classification = 'Underweight.';
        }else if (valueBMI < 25) {
            classification = 'Ideal weight.';
        }else if (valueBMI < 30){
            classification = 'Slightly overweight.';
        }else if (valueBMI < 35){
            classification = 'Obesity Level I.';
        }else if (valueBMI < 40){
            classification = 'Obesity Level II';
        }else {
            classification = 'Obesity Level III. Danger Condition!';
        }

        result1.textContent = `${name} your BMI is ${valueBMI}.  ${classification}`;

    }else {
        result1.textContent = 'Please, fill in all fields.';
    }

}

calculate.addEventListener('click', bmi); 