// var student = "Sam";
// var numBelts = 3;
// var courses = ["Python", "Ruby", "MERN"];
// var jobApp = {
//     company: "Google",
//     location: "Washington DC",
//     dateApplied: "2021-08-30",
//     expReq: 5000000,
//     expLevel: "entry",
//     applyAnyway: true,
//     studentsApplied: ["Samir", "Wesley", "Svetlana"]
// }

// function listCourses(){
//     for (var i = 0; i < courses.length; i++){
//         console.log(courses[i])
//     }
// }

// function hello(){
//     var nameToGreet = "Anna";
//     console.log("Hello " + nameToGreet + "!");
// }

// hello()
// console.log(courses)
// listCourses()
// console.log("Your potential job is in " + jobApp.location)

var beatles = ['Paul', 'George', 'John', 'Ringo'];
function printNames(names) {
    function actuallyPrintingNames() {
        for (var index = 0; index < names.length; index++) {
            var name = names[index];

            console.log(name + ' was found at index ' + index);
        }
        console.log('name and index after loop is ' + name + ':' + index);
    }
    actuallyPrintingNames();
}
printNames(beatles);

function actuallyPrintingNames() {
    let index = 0;
    let name;
    for (; index < names.length; index++) {
        name = names[index];
        console.log(name + ' was found at index ' + index);
    }
    console.log('name and index after loop is ' + name + ':' + index);
}