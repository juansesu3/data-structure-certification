function rot13(str) {
    let decodeResult = "";
    let alphabetStart = "abcdefghijklm".toUpperCase();
    let alphabetEnd = "nopqrstuvwxyz".toUpperCase();
  
    for (let i = 0; i < str.length; i += 1) {
      let letterToDecode = str[i]
  
      if (alphabetStart.indexOf(letterToDecode) >= 0) {
  
        decodeResult += alphabetEnd[alphabetStart.indexOf(letterToDecode)]
  
  
      } else if (alphabetEnd.indexOf(letterToDecode) >= 0) {
  
        decodeResult += alphabetStart[alphabetEnd.indexOf(letterToDecode)]
  
  
      } else {
         decodeResult += letterToDecode
      }
  
      
    }
  
  
    return decodeResult;
  }
  
  console.log(rot13("SERR PBQR PNZC"));
  //console.log(result);