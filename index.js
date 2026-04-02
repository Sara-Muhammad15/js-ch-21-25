
// -------------------------------------------------------
// Q1 - Take first and last name, merge into fullName, greet user
// -------------------------------------------------------

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName + " " + lastName;
document.write("Hello, " + fullName + "! Welcome!");


// -------------------------------------------------------
// Q2 - Take favorite phone model input, display its length
// -------------------------------------------------------

var phone = prompt("Enter your favorite phone model:");
document.write("My favorite phone is: " + phone + "<br>");
document.write("Length of string: " + phone.length);


// -------------------------------------------------------
// Q3 - Find index of letter 'n' in "Pakistani"
// -------------------------------------------------------

var str = "Pakistani";
var index = str.indexOf("n");
document.write("String: " + str + "<br>");
document.write("Index of 'n': " + index);


// -------------------------------------------------------
// Q4 - Find last index of letter 'l' in "Hello World"
// -------------------------------------------------------

var str = "Hello World";
var lastIndex = str.lastIndexOf("l");
document.write("String: " + str + "<br>");
document.write("Last index of 'l': " + lastIndex);


// -------------------------------------------------------
// Q5 - Find character at 3rd index in "Pakistani"
// -------------------------------------------------------

var str = "Pakistani";
var ch = str.charAt(3);
document.write("String: " + str + "<br>");
document.write("Character at index 3: " + ch);


// -------------------------------------------------------
// Q6 - Repeat Q1 using concat() method
// -------------------------------------------------------

var firstName = prompt("Enter your first name:");
var lastName = prompt("Enter your last name:");
var fullName = firstName.concat(" ", lastName);
document.write("Hello, " + fullName + "! Welcome!");


// -------------------------------------------------------
// Q7 - Replace "Hyder" with "Islam" in "Hyderabad"
// -------------------------------------------------------

var city = "Hyderabad";
var newCity = city.replace("Hyder", "Islam");
document.write("City: " + city + "<br>");
document.write("After replacement: " + newCity);


// -------------------------------------------------------
// Q8 - Replace all occurrences of "and" with "&"
// -------------------------------------------------------

var message = "Ali and Sami are best friends. They play cricket and football together.";
var newMessage = message.replaceAll("and", "&");
document.write(newMessage);


// -------------------------------------------------------
// Q9 - Convert string "472" to number 472, display values and types
// -------------------------------------------------------

var strNum = "472";
document.write("Value: " + strNum + "<br>");
document.write("Type: " + typeof strNum + "<br>");

var num = Number(strNum);
document.write("Value: " + num + "<br>");
document.write("Type: " + typeof num);


// -------------------------------------------------------
// Q10 - Take user input and convert to uppercase
// -------------------------------------------------------

var input = prompt("Enter something:");
document.write("User input: " + input + "<br>");
document.write("Upper case: " + input.toUpperCase());


// -------------------------------------------------------
// Q11 - Take user input and convert to title case
// -------------------------------------------------------

var input = prompt("Enter something:");
var titleCase = input.charAt(0).toUpperCase() + input.slice(1).toLowerCase();
document.write("User input: " + input + "<br>");
document.write("Title case: " + titleCase);


// -------------------------------------------------------
// Q12 - Convert 35.36 to string, remove dot, display "3536"
// -------------------------------------------------------

var num = 35.36;
var str = num.toString();
var result = str.replace(".", "");
document.write("Number: " + num + "<br>");
document.write("Result: " + result);


// -------------------------------------------------------
// Q13 - Validate username, reject if it contains @ , . or !
// -------------------------------------------------------

var username = prompt("Enter a username:");
var isValid = true;

for (var i = 0; i < username.length; i++) {
    var code = username.charCodeAt(i);
    // ASCII: 33=!  44=,  46=.  64=@
    if (code == 33 || code == 44 || code == 46 || code == 64) {
        isValid = false;
        break;
    }
}

if (!isValid) {
    alert("Please enter a valid username");
} else {
    document.write("Welcome, " + username + "!");
}


// -------------------------------------------------------
// Q14 - Search bakery array by user input (case-insensitive)
// -------------------------------------------------------

var A = ["cake", "apple pie", "cookie", "chips", "patties"];
var order = prompt("Welcome to ABC Bakery. What do you want to order sir/ma'am?");
var orderLower = order.toLowerCase();
var found = false;
var foundIndex = -1;

for (var i = 0; i < A.length; i++) {
    if (A[i].toLowerCase() == orderLower) {
        found = true;
        foundIndex = i;
        break;
    }
}

if (found) {
    document.write(orderLower + " is <b>available</b> at index " + foundIndex + " in our bakery");
} else {
    document.write("We are sorry. " + orderLower + " is <b>not available</b> in our bakery");
}


// -------------------------------------------------------
// Q15 - Password validator (letters+numbers, not start with digit, min 6 chars)
// -------------------------------------------------------

var password = prompt("Enter a password:");
var isValid = true;
var msg = "";

if (password.length < 6) {
    isValid = false;
    msg = "Password must be at least 6 characters long";
}

var firstCode = password.charCodeAt(0);
if (firstCode >= 48 && firstCode <= 57) {
    isValid = false;
    msg = "Password can not begin with a number";
}

var hasLetter = false;
var hasNumber = false;

for (var i = 0; i < password.length; i++) {
    var c = password.charCodeAt(i);
    // A-Z: 65-90   a-z: 97-122   0-9: 48-57
    if ((c >= 65 && c <= 90) || (c >= 97 && c <= 122)) {
        hasLetter = true;
    }
    if (c >= 48 && c <= 57) {
        hasNumber = true;
    }
}

if (!hasLetter || !hasNumber) {
    isValid = false;
    msg = "Password must contain both alphabets and numbers";
}

document.write("Entered password: " + password + "<br>");
if (!isValid) {
    document.write(msg + "<br>");
    document.write("Please enter a valid password");
    alert("Please enter a valid password");
} else {
    document.write("Password is valid!");
}


// -------------------------------------------------------
// Q16 - Split "University of Karachi" into array and display elements
// -------------------------------------------------------

var university = "University of Karachi";
var arr = university.split("");

for (var i = 0; i < arr.length; i++) {
    document.write(arr[i] + "<br>");
}


// -------------------------------------------------------
// Q17 - Display the last character of user input
// -------------------------------------------------------

var input = prompt("Enter something:");
var lastChar = input.charAt(input.length - 1);
document.write("User input: " + input + "<br>");
document.write("Last character of input: " + lastChar);


// -------------------------------------------------------
// Q18 - Count occurrences of word "the" in a string
// -------------------------------------------------------

var text = "The quick brown fox jumps over the lazy dog";
var count = 0;
var word = "the";
var lowerText = text.toLowerCase();

var index = lowerText.indexOf(word);
while (index != -1) {
    count++;
    index = lowerText.indexOf(word, index + 1);
}

document.write("Text: " + text + "<br>");
document.write("There are " + count + " occurrence(s) of word 'the'");