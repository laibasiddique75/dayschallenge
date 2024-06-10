// Q no 49
function hobbies() {
    var hobbies = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        hobbies[_i] = arguments[_i];
    }
    hobbies.forEach(function (hobby) {
        console.log("I enjoy ".concat(hobby));
    });
}
hobbies("coding", "reading", "chatting");
// Q no 50
var myIdealDay = " My ideal day would involve:\n  1.Waking up early and going for class. \n 2. Spending a 2 hours coding on a project.\n  3. Ending a day by some coding challenges. ";
console.log(myIdealDay);
// Q no 51
function calculateArea(width, height) {
    return width * height;
}
var calculateAreaArrow = function (width, height) { return width * height; };
console.log(calculateAreaArrow(7, 0));
