document.getElementById('plus').onclick = function () {
    var first_number =  parseFloat((document.getElementById('first_number')).value);
    var second_number = parseFloat((document.getElementById('second_number')).value);
    var output = first_number + second_number;
    document.getElementById('output').innerHTML = output;
};
document.getElementById('minus').onclick = function () {
    var first_number =  parseFloat((document.getElementById('first_number')).value);
    var second_number = parseFloat((document.getElementById('second_number')).value);
    var output = first_number - second_number;
    document.getElementById('output').innerHTML = output;
};
document.getElementById('divide').onclick = function () {
    var first_number =  parseFloat((document.getElementById('first_number')).value);
    var second_number = parseFloat((document.getElementById('second_number')).value);
    var output = first_number / second_number;
    document.getElementById('output').innerHTML = output;
};
document.getElementById('multiply').onclick = function () {
    var first_number =  parseFloat((document.getElementById('first_number')).value);
    var second_number = parseFloat((document.getElementById('second_number')).value);
    var output = first_number * second_number;
    document.getElementById('output').innerHTML = output;
};
document.getElementById('sqrt').onclick = function () {
    var first_number =  parseFloat((document.getElementById('first_number')).value);
    var output = Math.sqrt(first_number);
    document.getElementById('output').innerHTML = output;
};
document.getElementById('power').onclick = function () {
    var first_number =  parseFloat((document.getElementById('first_number')).value);
    var second_number = parseFloat((document.getElementById('second_number')).value);
    var output = Math.pow(first_number, second_number);
    document.getElementById('output').innerHTML = output;
};
document.getElementById('sin').onclick = function () {
    var first_number =  parseFloat((document.getElementById('first_number')).value);
    var first_number = first_number*((Math.PI)/180)
    var output = (Math.sin(first_number)).toFixed(4);
    document.getElementById('output').innerHTML = output;
};
document.getElementById('cos').onclick = function () {
    var first_number =  parseFloat((document.getElementById('first_number')).value);
    var first_number = first_number*((Math.PI)/180)
    var output = (Math.cos(first_number)).toFixed(4);
    document.getElementById('output').innerHTML = output;
};
document.getElementById('tan').onclick = function () {
    var first_number =  parseFloat((document.getElementById('first_number')).value);
    var first_number = first_number*((Math.PI)/180)
    var output = (Math.tan(first_number)).toFixed(4);
    document.getElementById('output').innerHTML = output;
};