function verify(text) {

  if (typeof text != 'string') {
    console.log('error: text is not a string!');
    return 0;
  }

  const textArr = text.split('');

  const checkArr = [];

  textArr.forEach((letter, i) => {
    if ((letter == '(') || (letter == '[') || (letter == '<')) { // если найдена открывающая скобка, она добавляется в массив checkArr
      checkArr.push(letter);
    } else if ((letter == ')') || (letter == ']') || (letter == '>')) { //если найдена закрывающая скобка, проверяется, парная ли она к последней открывающей
      if ( 
        ((letter == ')') && (checkArr[checkArr.length - 1] == '(')) || //если парная - из массива checkArr удаляется последняя скобка 
        ((letter == ']') && (checkArr[checkArr.length - 1] == '[')) ||
        ((letter == '>') && (checkArr[checkArr.length - 1] == '<')) 
       ) {
        checkArr.pop();
      } else {  
        checkArr.push('0');
      }
    }
  });

  if ((checkArr.length != 0)) { // если в массиве что-нибудь осталось, - то не все открывшиеся скобки закрылись
    return 0;
  } else return 1;
}

console.log(verify("before ( middle []) after ")); // 1
console.log(verify("(((<<<>>>)))")); // 1
console.log(verify("---++++>----")); // 0
console.log(verify("(  [  <>  ()  ]  <>  )")); // 1
console.log(verify("")); // 1
console.log(verify("   (      [)")); // 0
console.log(verify(") (")); // 0
console.log(verify("<(   >)"));  // 0  
console.log(verify("(((((")); // 0

