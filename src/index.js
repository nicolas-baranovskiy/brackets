module.exports = function check(str, bracketsConfig) {
  let openBracket = [];
  let closeBracket = [];
  let stack = [];
  let topElement;
  
  for (let i = 0; i < bracketsConfig.length; i++) {
    openBracket.push(bracketsConfig[i][0]);
    closeBracket.push(bracketsConfig[i][1]);
  }
  
  for (let i = 0; i < str.length; i++) {
    for(let n = 0; n < bracketsConfig.length; n++){
      if (str[i] ===openBracket[n] && str[i] === closeBracket[n]) {
        if (!stack.includes(str[i])) {
        stack.push(str[i])
         topElement = stack[stack.length - 1];
      } else{
        stack.pop()
        topElement = stack[stack.length - 1];
      }
      } else if (str[i] === openBracket[n]) {
        stack.push(str[i])
         topElement = stack[stack.length - 1];
      } else if (str[i] === closeBracket[n]) {
        
        if (stack.length === 0) {
          return false;
        } 
        
        if (topElement === openBracket[n]) {
          stack.pop()
          topElement = stack[stack.length - 1];
        } else {
          return false;
        }
      }
    } 
   }
  
  return stack.length === 0;
}