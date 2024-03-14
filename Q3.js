//Name Cases: store a person's name in a variable, and then print that person's name in lowercase, uppercase and titlecase.
var personName = "Kanwal Rafique";
console.log("Name in lowercase: ".concat(personName.toLowerCase()));
console.log("Name in Uppercase: ".concat(personName.toUpperCase()));
console.log("Name in Titlecase: ".concat(personName.replace(/\b\w/g, function (char) { return char.toUpperCase(); })));
