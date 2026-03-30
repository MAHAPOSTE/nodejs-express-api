function moveChars(str) {
    let capLetter = "";
    let sLetter = "";
    for (let ch of str) {
       if (ch == ch.toUpperCase()) {
           capLetter += ch;
       } 
       else {
          sLetter += ch; 
       }
    }
    return capLetter + sLetter;
}
console.log(moveChars("FaceBookS"));