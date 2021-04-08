
var weight;
var height;
var bmi;
var result;


function calculatorBMI() {

    weight = document.getElementById('weight').value;

    height = document.getElementById('height').value;

    bmi = weight/(height*height);

    if(bmi < 17){

        result = document.getElementById('result');
        result.innerHTML = '<br/> Your result is: ' + bmi.toFixed(2) + '<h3><br/> Very underweight <br/></h3>';
        return false; // To Fixed the result and not send the form, put return false to show the result

    }
    else if(bmi > 17 && bmi < 18.49){

        result = document.getElementById('result');
        result.innerHTML = '<br/> Your result is: ' + bmi.toFixed(2) + '<h3><br/> Under weight <br/></h3>';
        return false; // To Fixed the result and not send the form, put return false to show the result

    }
    else if(bmi > 18.5 && bmi < 24.99){

        result = document.getElementById('result');
        result.innerHTML = '<br/> Your result is: ' + bmi.toFixed(2) + '<h3><br/> Normal weight <br/></h3>';
        return false; // To Fixed the result and not send the form, put return false to show the result

    }
    else if(bmi => 25){

        result = document.getElementById('result');
        result.innerHTML = '<br/> Your result is: ' + bmi.toFixed(2) + '<h3><br/> Overweight weight <br/></h3>';
        return false; // To Fixed the result and not send the form, put return false to show the result

    }
    else{
        return false;
    }

}