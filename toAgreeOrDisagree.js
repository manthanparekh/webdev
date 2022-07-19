// Manthan Parekh  
// write a function agreeOrDisagree() that takes two strings 
// and return 'agree' or 'disagree' if the two strings are same or not 

const agreeOrDisagree = (first, second) => {
    if (first === second) {
        return 'You agree!'
    } else {
        return 'You disagree!'
    }
}

/*
As a ternary 
const agreeOrDisagree = (first, second) => 
(first, second) ? 'You agree!' : 'You disagree!'
*/

console.log(agreeOrDisagree("yes", "yes"))
console.log(agreeOrDisagree("yep", "no"))