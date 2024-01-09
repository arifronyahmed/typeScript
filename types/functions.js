//after the parameter declaration the defined type is infact the return type of the function
function square(num) {
    return num * num;
}
square(2);
function greet(person, message) {
    if (person === void 0) { person = "anonym"; }
    return "hello ".concat(person, " , nice to meet you, ").concat(message);
}
greet("", "welcome");
var colors = ["red", "green", "blue", "yellow", "orange"];
colors.map(function (color) {
    return color.toLocaleUpperCase();
});
//void is a returen type for functions that don't return anything.
//it means just that this function is void of any data
//TypeScript can infer this type fairly well,
//but sometimes it may want you to anotate a function with a void return explicitly
