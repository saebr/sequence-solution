

function run() {
    console.log('button clicked')
    var a = Number(document.getElementById('input1').value)
    var b = Number(document.getElementById('input2').value)
    var dif = a - b
    var fix
    console.log(dif)
    if (a === b) {
        fix = "In sequence"
    } else if (a > b) {
        fix = "Create " + dif + " GTX"
    } else if (a < b) {
        fix = "Skip " + dif + " GTX" 
    }
console.log(fix)
}