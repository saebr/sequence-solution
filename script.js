
//Runs when submit button is clicked
function run() {
    console.log('button clicked')

    //Declaring all variables
    var input1 = Number(document.getElementById('input1').value)
    var input2 = Number(document.getElementById('input2').value)
    var dropdown1 = document.getElementById('dropdown1')
    var dropdown2 = document.getElementById('dropdown2')
    var dif = input1 - input2
    var fixtext = document.getElementById('fixtext')
    var fix
    console.log(dif)
    console.log(dropdown1.value)
    console.log(dropdown2.value)
    
    //Error handeling if Chassis is selecte in both boxes
    if (dropdown1.value == 'CP' & dropdown2.value == 'CP') {
        console.log('Cannot compare Chassis to Chasis')

    //Error handling if SP, FS, or RS are selected to compare to Body dropdown.
    } else if (dropdown1.value == 'FS' & dropdown2.value == 'VIN'){
        console.log('Cannot compare Front Subrame to Body');
    } else if (dropdown1.value == 'RS' & dropdown2.value == 'VIN'){
        console.log('Cannot compare Rear Subrame to Body');
    } else if (dropdown1.value == 'SP' & dropdown2.value == 'VIN'){
        console.log('Cannot compare Battery Pack to Body');
    } else

        if (input1 === input2) {
            fix = "In sequence"
            fixtext.innerHTML = "You are in Sequence!";
        } else if (input1 > input2) {
            fix = "Create " + dif + " GTX"
            fixtext.innerHTML = fix;
        } else if (input1 < input2) {
            var removenegative = dif - dif - dif
            console.log(removenegative)
            fix = "Skip " + removenegative + " GTX"
            fixtext.innerHTML = fix;
        }
    console.log(fix)
}