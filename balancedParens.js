// Sample Strings
let sample1 = "This ( is unbalanced."
let sample2 = "(This (is (a) balanced) string.)"
let sample3 = "This is () also ) unbalanced."
let sample4 = "Balanced."
//What does balanced mean? If you see one ( there must be another one at the same position from the center)
// Write your solution below:

function isBalanced(word) {
    //could I assign the comparison of ( to ) to be true? 
    let leftString = ``
    let rightString = ``
     for(i=0; i<word.length; i++){
        if(word[i] === `(`){
            leftString = leftString.concat(word[i])
        }
        else if (word[i] === `)`){
            rightString = rightString + word[i]; 
        }
     }
     if(leftString.length === rightString.length){
        return true; 
     }
     return false; 
}

console.log(isBalanced(`(lk()lk)`)); 