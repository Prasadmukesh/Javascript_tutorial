 //fun1
 function Greet(name = "India") {
    alert("Good Morning " + name);
}
//fun2
function HelloYukti() {
    alert("Hello i am yukti chauhan!");
}
//fun3
function Helloshivani() {
    alert("Hello i am shivani Sharma!")
}
//fun4
function Helloaditi() {
    alert("Hello i am Aditi Garg!")
}

//fun5
function addname(firstname, lastname) {
    const pname = firstname + " " + lastname;
    alert("My good name is " + pname);
}
//fun6
function OddEven(num) {
    if (num % 2 == 0) {
        //alert("Even Number");
        return 1;
    }
    else {
        //alert("Odd Number");
        return 0;
    }
}
// calculate simple interest
function sical(p, r, t) {
    var si = (p * r * t) / 100;
    alert("Simple interest is Rs." + si);
}
function calemi(loan, r, t) {
    var si = (loan * r * t) / 100;
    var total = loan + si;
    var emi = total / (t * 12);
    alert(loan + "," + si + ", " + total + " ," + emi);

}