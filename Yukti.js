function GetMessage() {
   
   let day = parseInt(document.getElementById('num1').value);
    switch (day) {
        case 0:
            // alert("Today is Sunday/Holiday");
            document.getElementById('msg').innerHTML = "Today is Sunday";

            break;
        case 1:
            document.getElementById('msg').innerHTML ="Todays is Monday";
            break;
        case 2:
            document.getElementById('msg').innerHTML ="Todays is Tuesday";
            break;
        case 3:
            document.getElementById('msg').innerHTML ="Todays is Wednesday";
            break;
        case 4:
            document.getElementById('msg').innerHTML ="Todays is Thursday";
            break;
        case 5:
            document.getElementById('msg').innerHTML ="Todays is Friday";
            break;
        case 6:
            document.getElementById('msg').innerHTML ="Todays is Saturday";
            break;
       
        default:
            document.getElementById('msg').innerHTML = "Invalid Number";
            break;

    }
}
/* Bill Calculate*/
function Cal() {
    let index = document.getElementById('item').value;
    let qnty = parseInt(document.getElementById('qty').value);
    switch (index) {
        case "Pen":
            let bill= 199.00 * qnty;
            alert(" Total Bill Is Rs." +bill);
            break;
        case "Mouse":
            alert(" Total Bill Is Rs." + 299.00 * qnty);
            break;
        default:
            alert("Invalid ");
            break;
    }
}
