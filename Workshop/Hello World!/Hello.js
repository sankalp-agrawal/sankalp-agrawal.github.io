document.getElementById('hello').onclick = function() {
    var input = (document.getElementById('input')).value
    var output = 'Hello, ' + input + "!"
    document.getElementById('output').value = output
}
document.getElementById('clear').onclick = function() {
    document.getElementById('output').value = "";
    document.getElementById('input').value = "";
}
