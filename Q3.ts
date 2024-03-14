//Name Cases: store a person's name in a variable, and then print that person's name in lowercase, uppercase and titlecase.

let personName: string = "Kanwal Rafique";

console.log(`Name in lowercase: ${personName.toLowerCase()}`);
console.log(`Name in Uppercase: ${personName.toUpperCase()}`);
console.log(`Name in Titlecase: ${personName.replace(/\b\w/g,(char)=>char.toUpperCase())}`);


