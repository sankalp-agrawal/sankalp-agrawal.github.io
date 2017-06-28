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
