function stordData(A) {
    var txtInput = document.getElementById('txtInput')
    var oldValue = txtInput.value
    var operator = ["+", "-", "*", "/", "."]
    var len = oldValue.length
    var lastChar = oldValue[len - 1]
    //console.log(lastChar)
    if (operator.includes(A)) {
        if (operator.includes(lastChar)) {
            var removeLast = oldValue.slice(0, -1)
            txtInput.value = removeLast + A
        } else {
            txtInput.value = oldValue + A
        }

    } else {
        txtInput.value = oldValue + A
    }
}
function calculate() {
    var txtInput = document.getElementById('txtInput')
    var newValue = eval(txtInput.value)
    txtInput.value = newValue
}

function clearAll() {
    document.getElementById('txtInput').value = ""
}