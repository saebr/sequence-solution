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

    //Resets text and text color
    fixtext.style.color = 'black';
    fixtext.innerHTML = "";

    //Error handeling if Chassis is selected in both boxes
    if (dropdown1.value == 'CP' & dropdown2.value == 'CP') {
        console.log('Cannot compare Chassis to Chasis')
        fixtext.style.color = 'red';
        fixtext.innerHTML = "Unable to compare a Chassis to a Chassis";
        //Error handling if SP, FS, or RS are selected to compare to Body dropdown.
    } else if (dropdown1.value == 'FS' & dropdown2.value == 'VIN') {
        console.log('Cannot compare Front Subrame to Body');
        fixtext.style.color = 'red';
        fixtext.innerHTML = "Unable to compare a Front Subframe to a Body";
    } else if (dropdown1.value == 'RS' & dropdown2.value == 'VIN') {
        console.log('Cannot compare Rear Subrame to Body');
        fixtext.style.color = 'red';
        fixtext.innerHTML = "Unable to compare a Rear Subframe to a Body";
    } else if (dropdown1.value == 'SP' & dropdown2.value == 'VIN') {
        console.log('Cannot compare Battery Pack to Body');
        fixtext.style.color = 'red';
        fixtext.innerHTML = "Unable to compare a Battery Pack to a Body";
    } else

        if (input1 === input2) {
            fix = "In sequence"
            fixtext.style.color = 'green';
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

//Checks to make sure only numbers are being entered in text boxes
function isNumber(evt) {
    evt = (evt) ? evt : window.event;
    var charCode = (evt.which) ? evt.which : evt.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
        return false; 
    }
    return true;
}