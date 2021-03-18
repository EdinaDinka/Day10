function myFunction() {
    var myMusic = {
        001: {
            artist: "Billy Joel",
            title: "Piano Man",
            relase_year: 1973,
            formats: {
                1: "CD",
                2: "8T",
                3: "LP"
            },
            gold: true
        },
        002: {
            artist: "Michael Jackson",
            title: "Thriller",
            relase_year: 1982,
            formats: {
                1: "LP",
                2: "8T",
                3: "CD"
            },
            gold: false
        }
    };
    return myMusic;
}
console.log(myFunction()[2]);
module.exports = myFunction;
