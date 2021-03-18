var myPet = {
    species: "Haski",
    name: "Lea",
    legs: 4,
    friends: ["Max", "Rex"]
}
function myFunction(myObj) {
    return myObj;
}
console.log(myFunction(myPet));
module.exports = { myPet, myFunction };