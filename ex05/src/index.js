var school = {
    name: "Arena",
    location: "Sarajevo",
    established: 2020
};
function myFunction(name) {
    school.name = name;
    return; school
}
myFunction("Paragon");
console.log(school.name);
module.exports = { school, myFunction };